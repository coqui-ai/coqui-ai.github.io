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
import { UnorderedList, Paragraph, LG } from '@zendeskgarden/react-typography';
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
  { index: 1, language: 'Urdu', task: 'Large Vocabulary', competitionID: '187' },
  { index: 2, language: 'Serbian', task: 'Large Vocabulary', competitionID: '186' },
  { index: 3, language: 'Romanian', task: 'Large Vocabulary', competitionID: '185' },
  { index: 4, language: 'Sakha', task: 'Large Vocabulary', competitionID: '184' },
  { index: 5, language: 'Swedish', task: 'Large Vocabulary', competitionID: '183' },
  { index: 6, language: 'Romontsch', task: 'Large Vocabulary', competitionID: '182' },
  { index: 7, language: 'Rumantsch', task: 'Large Vocabulary', competitionID: '181' },
  { index: 8, language: 'Luganda', task: 'Large Vocabulary', competitionID: '180' },
  { index: 9, language: 'Lithuanian', task: 'Large Vocabulary', competitionID: '179' },
  { index: 10, language: 'Mongolian', task: 'Large Vocabulary', competitionID: '178' },
  { index: 11, language: 'Maltese', task: 'Large Vocabulary', competitionID: '177' },
  { index: 12, language: 'Punjabi', task: 'Large Vocabulary', competitionID: '176' },
  { index: 13, language: 'Latvian', task: 'Large Vocabulary', competitionID: '175' },
  { index: 14, language: 'Kurmanji-Kurdish', task: 'Large Vocabulary', competitionID: '174' },
  { index: 15, language: 'Odia', task: 'Large Vocabulary', competitionID: '173' },
  { index: 16, language: 'Hungarian', task: 'Large Vocabulary', competitionID: '172' },
  { index: 17, language: 'Kyrgyz', task: 'Large Vocabulary', competitionID: '171' },
  { index: 18, language: 'Indonesian', task: 'Large Vocabulary', competitionID: '170' },
  { index: 19, language: 'Belarussian', task: 'Large Vocabulary', competitionID: '169' },
  { index: 20, language: 'Catalan', task: 'Large Vocabulary', competitionID: '168' },
  { index: 21, language: 'Georgian', task: 'Large Vocabulary', competitionID: '167' },
  { index: 22, language: 'Kazakh', task: 'Large Vocabulary', competitionID: '166' },
  { index: 23, language: 'Interlingua', task: 'Large Vocabulary', competitionID: '165' },
  { index: 24, language: 'Hindi', task: 'Large Vocabulary', competitionID: '164' },
  { index: 25, language: 'English', task: 'Large Vocabulary', competitionID: '163' },
  { index: 26, language: 'Galician', task: 'Large Vocabulary', competitionID: '162' },
  { index: 27, language: 'Upper', task: 'Large Vocabulary', competitionID: '161' },
  { index: 28, language: 'Armenian', task: 'Large Vocabulary', competitionID: '160' },
  { index: 29, language: 'Basque', task: 'Large Vocabulary', competitionID: '159' },
  { index: 30, language: 'Frisian', task: 'Large Vocabulary', competitionID: '158' },
  { index: 31, language: 'Guarani', task: 'Large Vocabulary', competitionID: '157' },
  { index: 32, language: 'Irish', task: 'Large Vocabulary', competitionID: '156' },
  { index: 33, language: 'Finnish', task: 'Large Vocabulary', competitionID: '155' },
  { index: 34, language: 'Bashkort', task: 'Large Vocabulary', competitionID: '154' },
  { index: 35, language: 'Estonian', task: 'Large Vocabulary', competitionID: '153' },
  { index: 36, language: 'Dhivehi', task: 'Large Vocabulary', competitionID: '152' },
  { index: 37, language: 'Greek', task: 'Large Vocabulary', competitionID: '151' },
  { index: 38, language: 'Arabic', task: 'Large Vocabulary', competitionID: '150' },
  { index: 39, language: 'Czech', task: 'Large Vocabulary', competitionID: '149' },
  { index: 40, language: 'Welsh', task: 'Large Vocabulary', competitionID: '148' },
  { index: 41, language: 'Chuvash', task: 'Large Vocabulary', competitionID: '147' },
  { index: 42, language: 'Breton', task: 'Large Vocabulary', competitionID: '146' },
  { index: 43, language: 'Hakha', task: 'Large Vocabulary', competitionID: '145' },
  { index: 44, language: 'Bulgarian', task: 'Large Vocabulary', competitionID: '144' },
  { index: 45, language: 'Basaa', task: 'Large Vocabulary', competitionID: '143' },
  { index: 46, language: 'Assamese', task: 'Large Vocabulary', competitionID: '142' },
  { index: 47, language: 'Abkhaz', task: 'Large Vocabulary', competitionID: '141' },
  { index: 48, language: 'Abkhaz', task: 'Constrained Vocabulary', competitionID: '117' },
  { index: 49, language: 'Arabic', task: 'Constrained Vocabulary', competitionID: '118' },
  { index: 50, language: 'Welsh', task: 'Constrained Vocabulary', competitionID: '121' },
  { index: 51, language: 'English', task: 'Constrained Vocabulary', competitionID: '137' },
  { index: 52, language: 'Portuguese', task: 'Constrained Vocabulary', competitionID: '133' },
  { index: 53, language: 'Swedish', task: 'Constrained Vocabulary', competitionID: '136' },
  { index: 54, language: 'Tatar', task: 'Constrained Vocabulary', competitionID: '140' },
  { index: 55, language: 'Turkish', task: 'Constrained Vocabulary', competitionID: '139' },
  { index: 56, language: 'Tamil', task: 'Constrained Vocabulary', competitionID: '138' },
  { index: 57, language: 'Russian', task: 'Constrained Vocabulary', competitionID: '135' },
  { index: 58, language: 'Polish', task: 'Constrained Vocabulary', competitionID: '132' },
  { index: 59, language: 'Odia', task: 'Constrained Vocabulary', competitionID: '131' },
  { index: 60, language: 'Dutch', task: 'Constrained Vocabulary', competitionID: '130' },
  { index: 61, language: 'Luganda', task: 'Constrained Vocabulary', competitionID: '129' },
  { index: 62, language: 'Kyrgyz', task: 'Constrained Vocabulary', competitionID: '128' },
  { index: 63, language: 'Georgian', task: 'Constrained Vocabulary', competitionID: '127' },
  { index: 64, language: 'Indonesian', task: 'Constrained Vocabulary', competitionID: '126' },
  { index: 65, language: 'Frisian', task: 'Constrained Vocabulary', competitionID: '125' },
  { index: 66, language: 'Basque', task: 'Constrained Vocabulary', competitionID: '124' },
  { index: 67, language: 'Catalan', task: 'Constrained Vocabulary', competitionID: '123' },
  { index: 68, language: 'Czech', task: 'Constrained Vocabulary', competitionID: '122' },
  { index: 69, language: 'Chuvash', task: 'Constrained Vocabulary', competitionID: '120' },
  { index: 70, language: 'Ukrainian', task: 'Large Vocabulary', competitionID: '200' },
  { index: 71, language: 'Tamil', task: 'Large Vocabulary', competitionID: '199' },
  { index: 72, language: 'Uyghur', task: 'Large Vocabulary', competitionID: '198' },
  { index: 73, language: 'Thai', task: 'Large Vocabulary', competitionID: '197' },
  { index: 74, language: 'Russian', task: 'Large Vocabulary', competitionID: '196' },
  { index: 75, language: 'Tatar', task: 'Large Vocabulary', competitionID: '195' },
  { index: 76, language: 'Dutch', task: 'Large Vocabulary', competitionID: '194' },
  { index: 77, language: 'Turkish', task: 'Large Vocabulary', competitionID: '193' },
  { index: 78, language: 'Portuguese', task: 'Large Vocabulary', competitionID: '192' },
  { index: 79, language: 'Polish', task: 'Large Vocabulary', competitionID: '191' },
  { index: 80, language: 'Slovak', task: 'Large Vocabulary', competitionID: '190' },
  { index: 81, language: 'Slovenian', task: 'Large Vocabulary', competitionID: '189' }
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
              margin-bottom: ${p => p.theme.space.sm};
            `}
          >
            Description
          </StyledDescriptionHeader>
          <Paragraph size="medium">
            <LG tag="span">
              The majority of the world speaks “minority” languages, and most of these “minority”
              languages don&apos;t have any speech technology. The Long Tail Language Competition
              aims to change this, allowing you to train models for this long tail.
            </LG>
          </Paragraph>
          <Paragraph size="medium">
            <LG tag="span">
              OVH is generously providing compute resources to The Long Tail Language Competition,
              giving you free GPU time to train a speech recognition model for one (or more) of
              these long tail languages, while Coqui is providing code and data for you to train up
              such a model.
            </LG>
          </Paragraph>
          <StyledDescriptionHeader
            css={css`
              margin-top: ${p => p.theme.space.lg};
              margin-bottom: ${p => p.theme.space.sm};
            `}
          >
            Registering for GPU Time
          </StyledDescriptionHeader>
          <Paragraph size="medium">
            <LG tag="span">
              To obtain OVH&apos;s generously donated free GPU time for the competition, you should
              navigate to OVH&apos;s{' '}
              <Anchor href="https://discord.com/invite/3kWCWfT6EB" target="_blank">
                Discord registration page
              </Anchor>
              , fill in the required info, and join the “coqui-ai-stt-challenge“ channel to obtain
              all the details.
            </LG>
          </Paragraph>
          <StyledDescriptionHeader
            css={css`
              margin-top: ${p => p.theme.space.lg};
              margin-bottom: ${p => p.theme.space.sm};
            `}
          >
            Entering a Competition
          </StyledDescriptionHeader>
          <Paragraph size="medium">
            <LG tag="span">
              To enter a competition, navigate to the “Competitions“ tab on this page, search for
              the competition that interests you, then navigate to the competition&apos;s home page
              and register there.
            </LG>
          </Paragraph>
          <Paragraph size="medium">
            <LG tag="span">
              The details of judging and how one competes in the competition are described on the
              competition&apos;s home page.
            </LG>
          </Paragraph>
          <StyledDescriptionHeader
            css={css`
              margin-top: ${p => p.theme.space.lg};
              margin-bottom: ${p => p.theme.space.sm};
            `}
          >
            Timeline
          </StyledDescriptionHeader>
          <UnorderedList>
            <UnorderedList.Item>
              <LG tag="span" isBold>
                Start
              </LG>
              <LG tag="span"> - November 10th, 2021 9:00 CET</LG>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <LG tag="span" isBold>
                Stop
              </LG>
              <LG tag="span"> - November 17th, 2021 9:00 CET</LG>
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
