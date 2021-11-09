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

const rawRowData = {
  1: { index: 1, language: 'Urdu', task: 'Large Vocabulary', competitionID: '187' },
  2: { index: 2, language: 'Serbian', task: 'Large Vocabulary', competitionID: '186' },
  3: { index: 3, language: 'Romanian', task: 'Large Vocabulary', competitionID: '185' },
  4: { index: 4, language: 'Sakha', task: 'Large Vocabulary', competitionID: '184' },
  5: { index: 5, language: 'Swedish', task: 'Large Vocabulary', competitionID: '183' },
  6: { index: 6, language: 'Romontsch', task: 'Large Vocabulary', competitionID: '182' },
  7: { index: 7, language: 'Rumantsch', task: 'Large Vocabulary', competitionID: '181' },
  8: { index: 8, language: 'Luganda', task: 'Large Vocabulary', competitionID: '180' },
  9: { index: 9, language: 'Lithuanian', task: 'Large Vocabulary', competitionID: '179' },
  10: { index: 10, language: 'Mongolian', task: 'Large Vocabulary', competitionID: '178' },
  11: { index: 11, language: 'Maltese', task: 'Large Vocabulary', competitionID: '177' },
  12: { index: 12, language: 'Punjabi', task: 'Large Vocabulary', competitionID: '176' },
  13: { index: 13, language: 'Latvian', task: 'Large Vocabulary', competitionID: '175' },
  14: { index: 14, language: 'Kurmanji-Kurdish', task: 'Large Vocabulary', competitionID: '174' },
  15: { index: 15, language: 'Odia', task: 'Large Vocabulary', competitionID: '173' },
  16: { index: 16, language: 'Hungarian', task: 'Large Vocabulary', competitionID: '172' },
  17: { index: 17, language: 'Kyrgyz', task: 'Large Vocabulary', competitionID: '171' },
  18: { index: 18, language: 'Indonesian', task: 'Large Vocabulary', competitionID: '170' },
  19: { index: 19, language: 'Belarussian', task: 'Large Vocabulary', competitionID: '169' },
  20: { index: 20, language: 'Catalan', task: 'Large Vocabulary', competitionID: '168' },
  21: { index: 21, language: 'Georgian', task: 'Large Vocabulary', competitionID: '167' },
  22: { index: 22, language: 'Kazakh', task: 'Large Vocabulary', competitionID: '166' },
  23: { index: 23, language: 'Interlingua', task: 'Large Vocabulary', competitionID: '165' },
  24: { index: 24, language: 'Hindi', task: 'Large Vocabulary', competitionID: '164' },
  25: { index: 25, language: 'English', task: 'Large Vocabulary', competitionID: '163' },
  26: { index: 26, language: 'Galician', task: 'Large Vocabulary', competitionID: '162' },
  27: { index: 27, language: 'Upper', task: 'Large Vocabulary', competitionID: '161' },
  28: { index: 28, language: 'Armenian', task: 'Large Vocabulary', competitionID: '160' },
  29: { index: 29, language: 'Basque', task: 'Large Vocabulary', competitionID: '159' },
  30: { index: 30, language: 'Frisian', task: 'Large Vocabulary', competitionID: '158' },
  31: { index: 31, language: 'Guarani', task: 'Large Vocabulary', competitionID: '157' },
  32: { index: 32, language: 'Irish', task: 'Large Vocabulary', competitionID: '156' },
  33: { index: 33, language: 'Finnish', task: 'Large Vocabulary', competitionID: '155' },
  34: { index: 34, language: 'Bashkort', task: 'Large Vocabulary', competitionID: '154' },
  35: { index: 35, language: 'Estonian', task: 'Large Vocabulary', competitionID: '153' },
  36: { index: 36, language: 'Dhivehi', task: 'Large Vocabulary', competitionID: '152' },
  37: { index: 37, language: 'Greek', task: 'Large Vocabulary', competitionID: '151' },
  38: { index: 38, language: 'Arabic', task: 'Large Vocabulary', competitionID: '150' },
  39: { index: 39, language: 'Czech', task: 'Large Vocabulary', competitionID: '149' },
  40: { index: 40, language: 'Welsh', task: 'Large Vocabulary', competitionID: '148' },
  41: { index: 41, language: 'Chuvash', task: 'Large Vocabulary', competitionID: '147' },
  42: { index: 42, language: 'Breton', task: 'Large Vocabulary', competitionID: '146' },
  43: { index: 43, language: 'Hakha', task: 'Large Vocabulary', competitionID: '145' },
  44: { index: 44, language: 'Bulgarian', task: 'Large Vocabulary', competitionID: '144' },
  45: { index: 45, language: 'Basaa', task: 'Large Vocabulary', competitionID: '143' },
  46: { index: 46, language: 'Assamese', task: 'Large Vocabulary', competitionID: '142' },
  47: { index: 47, language: 'Abkhaz', task: 'Large Vocabulary', competitionID: '141' },
  48: { index: 48, language: 'Abkhaz', task: 'Constrained Vocabulary', competitionID: '117' },
  49: { index: 49, language: 'Arabic', task: 'Constrained Vocabulary', competitionID: '118' },
  50: { index: 50, language: 'Welsh', task: 'Constrained Vocabulary', competitionID: '121' },
  51: { index: 51, language: 'English', task: 'Constrained Vocabulary', competitionID: '137' },
  52: { index: 52, language: 'Portuguese', task: 'Constrained Vocabulary', competitionID: '133' },
  53: { index: 53, language: 'Swedish', task: 'Constrained Vocabulary', competitionID: '136' },
  54: { index: 54, language: 'Tatar', task: 'Constrained Vocabulary', competitionID: '140' },
  55: { index: 55, language: 'Turkish', task: 'Constrained Vocabulary', competitionID: '139' },
  56: { index: 56, language: 'Tamil', task: 'Constrained Vocabulary', competitionID: '138' },
  57: { index: 57, language: 'Russian', task: 'Constrained Vocabulary', competitionID: '135' },
  58: { index: 58, language: 'Polish', task: 'Constrained Vocabulary', competitionID: '132' },
  59: { index: 59, language: 'Odia', task: 'Constrained Vocabulary', competitionID: '131' },
  60: { index: 60, language: 'Dutch', task: 'Constrained Vocabulary', competitionID: '130' },
  61: { index: 61, language: 'Luganda', task: 'Constrained Vocabulary', competitionID: '129' },
  62: { index: 62, language: 'Kyrgyz', task: 'Constrained Vocabulary', competitionID: '128' },
  63: { index: 63, language: 'Georgian', task: 'Constrained Vocabulary', competitionID: '127' },
  64: { index: 64, language: 'Indonesian', task: 'Constrained Vocabulary', competitionID: '126' },
  65: { index: 65, language: 'Frisian', task: 'Constrained Vocabulary', competitionID: '125' },
  66: { index: 66, language: 'Basque', task: 'Constrained Vocabulary', competitionID: '124' },
  67: { index: 67, language: 'Catalan', task: 'Constrained Vocabulary', competitionID: '123' },
  68: { index: 68, language: 'Czech', task: 'Constrained Vocabulary', competitionID: '122' },
  69: { index: 69, language: 'Chuvash', task: 'Constrained Vocabulary', competitionID: '120' },
  70: { index: 70, language: 'Ukrainian', task: 'Large Vocabulary', competitionID: '200' },
  71: { index: 71, language: 'Tamil', task: 'Large Vocabulary', competitionID: '199' },
  72: { index: 72, language: 'Uyghur', task: 'Large Vocabulary', competitionID: '198' },
  73: { index: 73, language: 'Thai', task: 'Large Vocabulary', competitionID: '197' },
  74: { index: 74, language: 'Russian', task: 'Large Vocabulary', competitionID: '196' },
  75: { index: 75, language: 'Tatar', task: 'Large Vocabulary', competitionID: '195' },
  76: { index: 76, language: 'Dutch', task: 'Large Vocabulary', competitionID: '194' },
  77: { index: 77, language: 'Turkish', task: 'Large Vocabulary', competitionID: '193' },
  78: { index: 78, language: 'Portuguese', task: 'Large Vocabulary', competitionID: '192' },
  79: { index: 79, language: 'Polish', task: 'Large Vocabulary', competitionID: '191' },
  80: { index: 80, language: 'Slovak', task: 'Large Vocabulary', competitionID: '190' },
  81: { index: 81, language: 'Slovenian', task: 'Large Vocabulary', competitionID: '189' }
};

const sortData = (
  tableData: IRow[],
  languageSort: Direction,
  taskSort: Direction,
  competitionIDSort: Direction
) => {
  if (!languageSort && !taskSort && !competitionIDSort) {
    return tableData;
  }

  let field: 'language' | 'task' | 'competitionID';
  let sortValue: Direction;

  if (languageSort) {
    field = 'language';
    sortValue = languageSort;
  } else if (taskSort) {
    field = 'task';
    sortValue = taskSort;
  } else {
    field = 'competitionID';
    sortValue = competitionIDSort;
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
  const [competitionIDSort, setCompetitionIDSort] = useState<Direction>();

  const location = useLocation();
  const parsedParameters = queryString.parse(location.search);
  const [searchQuery, setSearchQuery] = useState(parsedParameters.s || '');

  const searchRowData: IRow[] = Object.keys(rawRowData).map(key => {
    return rawRowData[key];
  });

  const rowData: IRow[] = Object.keys(rawRowData).map(key => {
    return rawRowData[key];
  });

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
                {false && <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
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
                      setCompetitionIDSort(undefined);
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
                      setCompetitionIDSort(undefined);
                      setData(data);
                    }}
                    sort={taskSort}
                  >
                    Task
                  </SortableCell>
                  <SortableCell
                    onClick={() => {
                      if (competitionIDSort === 'asc') {
                        setCompetitionIDSort('desc');
                      } else if (competitionIDSort === 'desc') {
                        setCompetitionIDSort(undefined);
                      } else {
                        setCompetitionIDSort('asc');
                      }
                      setLanguageSort(undefined);
                      setTaskSort(undefined);
                      setData(data);
                    }}
                    sort={competitionIDSort}
                  >
                    Competition Home Page
                  </SortableCell>
                </HeaderRow>
              </Head>
              <Body>
                {currentPage === 1
                  ? sortData(
                      (searchQuery ? searchRowData : data).slice(),
                      languageSort,
                      taskSort,
                      competitionIDSort
                    )
                      .slice(currentPage - 1, pageSize)
                      .map(createRow)
                  : sortData(
                      (searchQuery ? searchRowData : data).slice(),
                      languageSort,
                      taskSort,
                      competitionIDSort
                    )
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
