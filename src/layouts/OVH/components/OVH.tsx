/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import SearchForm from './SearchForm';
import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import MinWidthLayout from 'layouts/MinWidth';
import React, { useState } from 'react';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';
import { Row as GridRow, Col as GridCol } from '@zendeskgarden/react-grid';
import { UnorderedList, Paragraph, MD } from '@zendeskgarden/react-typography';
import { Body, Cell, Head, SortableCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';

const StyledTable = styled(Table)`
  margin-bottom: ${p => p.theme.space.md};
  min-width: 500px;
`;

export const StyledDescriptionHeader = styled.div`
  line-height: ${p => p.theme.lineHeights.sm};
  letter-spacing: 0.5px;
  font-size: ${p => p.theme.fontSizes.lg};
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

type Direction = 'asc' | 'desc' | undefined;

interface IRow {
  language: string;
  task: string;
  competitionID: string;
}

const rawRowData = [
  { index: 1, language: 'Abkhaz', task: 'Large Vocabulary', competitionID: '141' },
  { index: 2, language: 'Abkhaz', task: 'Constrained Vocabulary', competitionID: '117' },
  { index: 3, language: 'Arabic', task: 'Large Vocabulary', competitionID: '150' },
  { index: 4, language: 'Arabic', task: 'Constrained Vocabulary', competitionID: '118' },
  { index: 5, language: 'Armenian', task: 'Large Vocabulary', competitionID: '160' },
  { index: 6, language: 'Assamese', task: 'Large Vocabulary', competitionID: '142' },
  { index: 7, language: 'Basaa', task: 'Large Vocabulary', competitionID: '143' },
  { index: 8, language: 'Bashkort', task: 'Large Vocabulary', competitionID: '154' },
  { index: 9, language: 'Basque', task: 'Large Vocabulary', competitionID: '159' },
  { index: 10, language: 'Basque', task: 'Constrained Vocabulary', competitionID: '124' },
  { index: 11, language: 'Belarussian', task: 'Large Vocabulary', competitionID: '169' },
  { index: 12, language: 'Breton', task: 'Large Vocabulary', competitionID: '146' },
  { index: 13, language: 'Bulgarian', task: 'Large Vocabulary', competitionID: '144' },
  { index: 14, language: 'Catalan', task: 'Large Vocabulary', competitionID: '168' },
  { index: 15, language: 'Catalan', task: 'Constrained Vocabulary', competitionID: '123' },
  { index: 16, language: 'Chinese (Hong Kong)', task: 'Large Vocabulary', competitionID: '204' },
  { index: 17, language: 'Chuvash', task: 'Large Vocabulary', competitionID: '147' },
  { index: 18, language: 'Chuvash', task: 'Constrained Vocabulary', competitionID: '120' },
  { index: 19, language: 'Czech', task: 'Large Vocabulary', competitionID: '149' },
  { index: 20, language: 'Czech', task: 'Constrained Vocabulary', competitionID: '122' },
  { index: 21, language: 'Dhivehi', task: 'Large Vocabulary', competitionID: '152' },
  { index: 22, language: 'Dutch', task: 'Large Vocabulary', competitionID: '194' },
  { index: 23, language: 'Dutch', task: 'Constrained Vocabulary', competitionID: '130' },
  { index: 24, language: 'English', task: 'Large Vocabulary', competitionID: '163' },
  { index: 25, language: 'English', task: 'Constrained Vocabulary', competitionID: '137' },
  { index: 26, language: 'Esperanto', task: 'Constrained Vocabulary', competitionID: '211' },
  { index: 27, language: 'Estonian', task: 'Large Vocabulary', competitionID: '153' },
  { index: 28, language: 'Finnish', task: 'Large Vocabulary', competitionID: '155' },
  { index: 29, language: 'French', task: 'Constrained Vocabulary', competitionID: '206' },
  { index: 30, language: 'Frisian', task: 'Large Vocabulary', competitionID: '158' },
  { index: 31, language: 'Frisian', task: 'Constrained Vocabulary', competitionID: '125' },
  { index: 32, language: 'Galician', task: 'Large Vocabulary', competitionID: '162' },
  { index: 33, language: 'Georgian', task: 'Large Vocabulary', competitionID: '167' },
  { index: 34, language: 'Georgian', task: 'Constrained Vocabulary', competitionID: '127' },
  { index: 35, language: 'German', task: 'Constrained Vocabulary', competitionID: '208' },
  { index: 36, language: 'Greek', task: 'Large Vocabulary', competitionID: '151' },
  { index: 37, language: 'Guarani', task: 'Large Vocabulary', competitionID: '157' },
  { index: 38, language: 'Hakha', task: 'Large Vocabulary', competitionID: '145' },
  { index: 39, language: 'Hindi', task: 'Large Vocabulary', competitionID: '164' },
  { index: 40, language: 'Hungarian', task: 'Large Vocabulary', competitionID: '172' },
  { index: 41, language: 'Indonesian', task: 'Large Vocabulary', competitionID: '170' },
  { index: 42, language: 'Indonesian', task: 'Constrained Vocabulary', competitionID: '126' },
  { index: 43, language: 'Interlingua', task: 'Large Vocabulary', competitionID: '165' },
  { index: 44, language: 'Irish', task: 'Large Vocabulary', competitionID: '156' },
  { index: 45, language: 'Japanese', task: 'Large Vocabulary', competitionID: '202' },
  { index: 46, language: 'Kabyle', task: 'Large Vocabulary', competitionID: '214' },
  { index: 47, language: 'Kabyle', task: 'Constrained Vocabulary', competitionID: '205' },
  { index: 48, language: 'Kazakh', task: 'Large Vocabulary', competitionID: '166' },
  { index: 49, language: 'Kinyarwanda', task: 'Constrained Vocabulary', competitionID: '209' },
  { index: 50, language: 'Kurmanji-Kurdish', task: 'Large Vocabulary', competitionID: '174' },
  { index: 51, language: 'Kyrgyz', task: 'Large Vocabulary', competitionID: '171' },
  { index: 52, language: 'Kyrgyz', task: 'Constrained Vocabulary', competitionID: '128' },
  { index: 53, language: 'Latvian', task: 'Large Vocabulary', competitionID: '175' },
  { index: 54, language: 'Lithuanian', task: 'Large Vocabulary', competitionID: '179' },
  { index: 55, language: 'Luganda', task: 'Large Vocabulary', competitionID: '180' },
  { index: 56, language: 'Luganda', task: 'Constrained Vocabulary', competitionID: '129' },
  { index: 57, language: 'Maltese', task: 'Large Vocabulary', competitionID: '177' },
  { index: 58, language: 'Mongolian', task: 'Large Vocabulary', competitionID: '178' },
  { index: 59, language: 'Odia', task: 'Large Vocabulary', competitionID: '173' },
  { index: 60, language: 'Odia', task: 'Constrained Vocabulary', competitionID: '131' },
  { index: 61, language: 'Polish', task: 'Large Vocabulary', competitionID: '191' },
  { index: 62, language: 'Polish', task: 'Constrained Vocabulary', competitionID: '132' },
  { index: 63, language: 'Portuguese', task: 'Large Vocabulary', competitionID: '192' },
  { index: 64, language: 'Portuguese', task: 'Constrained Vocabulary', competitionID: '133' },
  { index: 65, language: 'Punjabi', task: 'Large Vocabulary', competitionID: '176' },
  { index: 66, language: 'Romanian', task: 'Large Vocabulary', competitionID: '185' },
  { index: 67, language: 'Romontsch', task: 'Large Vocabulary', competitionID: '182' },
  { index: 68, language: 'Rumantsch', task: 'Large Vocabulary', competitionID: '181' },
  { index: 69, language: 'Russian', task: 'Large Vocabulary', competitionID: '196' },
  { index: 70, language: 'Russian', task: 'Constrained Vocabulary', competitionID: '135' },
  { index: 71, language: 'Sakha', task: 'Large Vocabulary', competitionID: '184' },
  { index: 72, language: 'Serbian', task: 'Large Vocabulary', competitionID: '186' },
  { index: 73, language: 'Slovak', task: 'Large Vocabulary', competitionID: '190' },
  { index: 74, language: 'Slovenian', task: 'Large Vocabulary', competitionID: '189' },
  { index: 75, language: 'Spanish', task: 'Large Vocabulary', competitionID: '220' },
  { index: 76, language: 'Spanish', task: 'Constrained Vocabulary', competitionID: '210' },
  { index: 77, language: 'Swedish', task: 'Large Vocabulary', competitionID: '183' },
  { index: 78, language: 'Swedish', task: 'Constrained Vocabulary', competitionID: '136' },
  { index: 79, language: 'Taiwanese Mandarin', task: 'Large Vocabulary', competitionID: '203' },
  { index: 80, language: 'Tamil', task: 'Large Vocabulary', competitionID: '199' },
  { index: 81, language: 'Tamil', task: 'Constrained Vocabulary', competitionID: '138' },
  { index: 82, language: 'Tatar', task: 'Large Vocabulary', competitionID: '195' },
  { index: 83, language: 'Tatar', task: 'Constrained Vocabulary', competitionID: '140' },
  { index: 84, language: 'Thai', task: 'Large Vocabulary', competitionID: '197' },
  { index: 85, language: 'Turkish', task: 'Large Vocabulary', competitionID: '193' },
  { index: 86, language: 'Turkish', task: 'Constrained Vocabulary', competitionID: '139' },
  { index: 87, language: 'Ukrainian', task: 'Large Vocabulary', competitionID: '200' },
  { index: 88, language: 'Upper', task: 'Large Vocabulary', competitionID: '161' },
  { index: 89, language: 'Urdu', task: 'Large Vocabulary', competitionID: '187' },
  { index: 90, language: 'Uyghur', task: 'Large Vocabulary', competitionID: '198' },
  { index: 91, language: 'Welsh', task: 'Large Vocabulary', competitionID: '148' },
  { index: 92, language: 'Welsh', task: 'Constrained Vocabulary', competitionID: '121' }
];

const sortData = (tableData: IRow[], languageSort: Direction, taskSort: Direction) => {
  if (!languageSort && !taskSort) {
    return tableData;
  }

  let field: 'language' | 'task' | 'competitionID';
  let sortValue: Direction;

  if (languageSort) {
    field = 'language';
    sortValue = languageSort;
  } else {
    field = 'task';
    sortValue = taskSort;
  }

  return tableData.sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    if (aValue > bValue) {
      return sortValue === 'asc' ? 1 : -1;
    } else if (aValue < bValue) {
      return sortValue === 'asc' ? -1 : 1;
    }

    return 0;
  });
};

export const OVH: React.FC = () => {
  const pageSize = 15;

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');

  const [languageSort, setLanguageSort] = useState<Direction>();
  const [taskSort, setTaskSort] = useState<Direction>();

  const location = useLocation();
  const parsedParameters = queryString.parse(location.search);
  const [searchQuery, setSearchQuery] = useState(parsedParameters.s || '');

  const searchRowData: IRow[] = rawRowData.filter(competition => {
    const query = searchQuery.toLowerCase();
    const task = competition.task.toLowerCase();
    const language = competition.language.toLowerCase();

    return language.includes(query) || task.includes(query);
  });

  const rowData: IRow[] = rawRowData;

  const [data, setData] = useState(rowData);

  const createRow = (row: IRow, index: number) => {
    return (
      <Row key={index} isStriped={index % 2 === 0}>
        <Cell>{row.language}</Cell>
        <Cell>{row.task}</Cell>
        <Cell>
          <Anchor href={`https://codalab.lisn.upsaclay.fr/competitions/${row.competitionID}`}>
            {row.language} {row.task} Competition
          </Anchor>
        </Cell>
      </Row>
    );
  };

  return (
    <MinWidthLayout>
      <Tabs
        selectedItem={selectedTab}
        onChange={setSelectedTab}
        css={css`
          padding-bottom: ${p => p.theme.space.xl};
        `}
      >
        <TabList>
          <Tab item="description">Description</Tab>
          <Tab item="competitions">Competitions</Tab>
        </TabList>
        <TabPanel item="description">
          <StyledDescriptionHeader
            css={css`
              margin-bottom: ${p => p.theme.space.xs};
            `}
          >
            Description
          </StyledDescriptionHeader>
          <Paragraph size="small">
            <MD tag="span">
              The majority of the world speaks “minority” languages, and most of these “minority”
              languages don&apos;t have any speech technology. The Long Tail Language Competition
              aims to change this, allowing you to train models for this long tail.
            </MD>
          </Paragraph>
          <Paragraph size="small">
            <MD tag="span">
              OVH is generously providing compute resources to The Long Tail Language Competition,
              giving you free GPU time to train a speech recognition model for one (or more) of
              these long tail languages, while Coqui is providing code and data for you to train up
              such a model.
            </MD>
          </Paragraph>
          <StyledDescriptionHeader
            css={css`
              margin-top: ${p => p.theme.space.lg};
              margin-bottom: ${p => p.theme.space.xs};
            `}
          >
            Registering for GPU Time
          </StyledDescriptionHeader>
          <Paragraph size="small">
            <MD tag="span">
              To obtain OVH&apos;s generously donated free GPU time for the competition, you should
              navigate to OVH&apos;s{' '}
              <Anchor href="https://discord.com/invite/3kWCWfT6EB" target="_blank">
                Discord registration page
              </Anchor>
              , fill in the required info, and join the “coqui-ai-stt-challenge“ channel to obtain
              all the details.
            </MD>
          </Paragraph>
          <StyledDescriptionHeader
            css={css`
              margin-top: ${p => p.theme.space.lg};
              margin-bottom: ${p => p.theme.space.xs};
            `}
          >
            Entering a Competition
          </StyledDescriptionHeader>
          <Paragraph size="small">
            <MD tag="span">
              To enter a competition, navigate to the “Competitions“ tab on this page, search for
              the competition that interests you, then navigate to the competition&apos;s home page
              and register there.
            </MD>
          </Paragraph>
          <Paragraph size="small">
            <MD tag="span">
              The details of judging and how one competes in the competition are described on the
              competition&apos;s home page.
            </MD>
          </Paragraph>
          <StyledDescriptionHeader
            css={css`
              margin-top: ${p => p.theme.space.lg};
              margin-bottom: ${p => p.theme.space.xs};
            `}
          >
            Timeline
          </StyledDescriptionHeader>
          <UnorderedList>
            <UnorderedList.Item>
              <MD tag="span" isBold>
                Start
              </MD>
              <MD tag="span"> - November 10th, 2021 9:00 CET</MD>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <MD tag="span" isBold>
                Stop
              </MD>
              <MD tag="span"> - November 17th, 2021 9:00 CET</MD>
            </UnorderedList.Item>
          </UnorderedList>
        </TabPanel>
        <TabPanel item="competitions">
          <div style={{ overflowX: 'auto' }}>
            <GridRow
              justifyContent="start"
              css={css`
                margin-right: ${p => p.theme.space.xs};
                margin-left: ${p => p.theme.space.xs};
              `}
            >
              <GridCol sm={4}>
                <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              </GridCol>
              <GridCol sm={4} />
            </GridRow>
            <StyledTable isReadOnly>
              <Head>
                <HeaderRow>
                  <SortableCell
                    onClick={() => {
                      if (languageSort === 'asc') {
                        setLanguageSort('desc');
                      } else if (languageSort === 'desc') {
                        setLanguageSort(undefined);
                      } else {
                        setLanguageSort('asc');
                      }
                      setTaskSort(undefined);
                      setData(data);
                    }}
                    sort={languageSort}
                  >
                    Language
                  </SortableCell>
                  <SortableCell
                    onClick={() => {
                      if (taskSort === 'asc') {
                        setTaskSort('desc');
                      } else if (taskSort === 'desc') {
                        setTaskSort(undefined);
                      } else {
                        setTaskSort('asc');
                      }
                      setLanguageSort(undefined);
                      setData(data);
                    }}
                    sort={taskSort}
                  >
                    Task
                  </SortableCell>
                  <Cell width="40%">Competition Home Page</Cell>
                </HeaderRow>
              </Head>
              <Body>
                {currentPage === 1
                  ? sortData((searchQuery ? searchRowData : data).slice(), languageSort, taskSort)
                      .slice(currentPage - 1, pageSize)
                      .map(createRow)
                  : sortData((searchQuery ? searchRowData : data).slice(), languageSort, taskSort)
                      .slice(currentPage * pageSize - pageSize, currentPage * pageSize)
                      .map(createRow)}
              </Body>
            </StyledTable>
            <Pagination
              totalPages={Math.ceil((searchQuery ? searchRowData : data).length / pageSize)}
              currentPage={currentPage}
              onChange={setCurrentPage}
            />
          </div>
        </TabPanel>
      </Tabs>
    </MinWidthLayout>
  );
};
