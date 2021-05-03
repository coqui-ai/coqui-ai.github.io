/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { tagNameMap } from './TagNameMap';
import MinWidthLayout from 'layouts/MinWidth';
import { Anchor } from '@zendeskgarden/react-buttons';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';
import {
  Body,
  Cell,
  Head,
  HeaderCell,
  SortableCell,
  HeaderRow,
  Row,
  Table
} from '@zendeskgarden/react-tables';
import { ReactComponent as DownloadIcon } from '@zendeskgarden/svg-icons/src/16/download-stroke.svg';

const StyledTable = styled(Table)`
  margin-bottom: ${p => p.theme.space.md};
  min-width: 500px;
`;

const capitalize = s => {
  if (typeof s !== 'string') {
    return '';
  }

  return s.charAt(0).toUpperCase() + s.slice(1);
};

type Direction = 'asc' | 'desc' | undefined;

interface IRow {
  name: string;
  language: string;
  sttVersion: string;
  modelVersion: string;
  tagName: tagName;
}

const createRow = (row: IRow, index: number) => (
  <Row key={index} isStriped={index % 2 === 0}>
    <Cell>
      <Link to={`../${row.tagName}`}>{row.name}</Link>
    </Cell>
    <Cell>{row.language}</Cell>
    <Cell>
      <Anchor href={tagNameMap[row.tagName][1]}>{tagNameMap[row.tagName][0]}</Anchor>
    </Cell>
    <Cell>
      <Anchor href="https://github.com/coqui-ai/STT/releases/tag/v0.9.3">{row.sttVersion}</Anchor>
    </Cell>
    <Cell>{row.modelVersion}</Cell>
    <Cell>
      <Link to={`../${row.tagName}#download`}>
        <DownloadIcon />
      </Link>
    </Cell>
  </Row>
);

const sortData = (
  tableData: IRow[],
  modelCardSort: Direction,
  languageSort: Direction,
  creatorSort: Direction,
  sttEngineSort: Direction,
  modelVersionSort: Direction
) => {
  if (!modelCardSort && !languageSort && !creatorSort && !sttEngineSort && !modelVersionSort) {
    return tableData;
  }

  // Currently all engines are pinned to the same value "Coqui STT v0.9.3"
  if (sttEngineSort) {
    return tableData;
  }

  let field: 'name' | 'language' | 'sttVersion' | 'modelVersion' | 'tagName';
  let sortValue: Direction;

  if (modelCardSort) {
    field = 'name';
    sortValue = modelCardSort;
  } else if (languageSort) {
    field = 'language';
    sortValue = languageSort;
  } else if (creatorSort) {
    field = 'tagName';
    sortValue = creatorSort;
  } else {
    field = 'modelVersion';
    sortValue = modelVersionSort;
  }

  return tableData.sort((a, b) => {
    const aValue = creatorSort ? tagNameMap[a[field]][0] : a[field];
    const bValue = creatorSort ? tagNameMap[b[field]][0] : b[field];

    if (aValue > bValue) {
      return sortValue === 'asc' ? 1 : -1;
    } else if (aValue < bValue) {
      return sortValue === 'asc' ? -1 : 1;
    }

    return 0;
  });
};

export const Models: React.FC = () => {
  const pageSize = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState('stt');

  const [modelCardSort, setModelCardSort] = useState<Direction>();
  const [languageSort, setLanguageSort] = useState<Direction>();
  const [creatorSort, setCreatorSort] = useState<Direction>();
  const [sttEngineSort, setSTTEngineSort] = useState<Direction>();
  const [modelVersionSort, setModelVersionSort] = useState<Direction>();

  const rawRowData = useStaticQuery(
    graphql`
      query MyQuery {
        allGithubData {
          nodes {
            data {
              repository {
                releases {
                  nodes {
                    name
                    tagName
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const rowData: IRow[] = rawRowData.allGithubData.nodes[0].data.repository.releases.nodes.map(
    row => ({
      name: `${row.name}`,
      language: `${capitalize(row.tagName.split('/')[0])}`,
      sttVersion: 'Coqui STT v0.9.3',
      modelVersion: `${row.tagName.split('/')[2]}`,
      tagName: `${row.tagName}`
    })
  );

  const [data, setData] = useState(rowData);

  return (
    <MinWidthLayout>
      <Tabs
        selectedItem={selectedTab}
        onChange={setSelectedTab}
        css={css`
          padding-top: ${p => p.theme.space.xl};
          padding-bottom: ${p => p.theme.space.xl};
        `}
      >
        <TabList>
          <Tab item="stt">STT Models</Tab>
          <Tab item="tts" disabled>
            TTS Models (Coming Soon)
          </Tab>
        </TabList>
        <TabPanel item="stt">
          <div style={{ overflowX: 'auto' }}>
            <StyledTable isReadOnly>
              <Head>
                <HeaderRow>
                  <SortableCell
                    width="20%"
                    onClick={() => {
                      if (modelCardSort === 'asc') {
                        setModelCardSort('desc');
                      } else if (modelCardSort === 'desc') {
                        setModelCardSort(undefined);
                      } else {
                        setModelCardSort('asc');
                      }
                      setLanguageSort(undefined);
                      setCreatorSort(undefined);
                      setSTTEngineSort(undefined);
                      setModelVersionSort(undefined);
                      setData(data);
                    }}
                    sort={modelCardSort}
                  >
                    Model Card
                  </SortableCell>
                  <SortableCell
                    onClick={() => {
                      if (languageSort === 'asc') {
                        setLanguageSort('desc');
                      } else if (languageSort === 'desc') {
                        setLanguageSort(undefined);
                      } else {
                        setLanguageSort('asc');
                      }
                      setModelCardSort(undefined);
                      setCreatorSort(undefined);
                      setSTTEngineSort(undefined);
                      setModelVersionSort(undefined);
                      setData(data);
                    }}
                    sort={languageSort}
                  >
                    Language
                  </SortableCell>
                  <SortableCell
                    onClick={() => {
                      if (creatorSort === 'asc') {
                        setCreatorSort('desc');
                      } else if (creatorSort === 'desc') {
                        setCreatorSort(undefined);
                      } else {
                        setCreatorSort('asc');
                      }
                      setModelCardSort(undefined);
                      setLanguageSort(undefined);
                      setSTTEngineSort(undefined);
                      setModelVersionSort(undefined);
                      setData(data);
                    }}
                    sort={creatorSort}
                  >
                    Creator
                  </SortableCell>
                  <SortableCell
                    onClick={() => {
                      if (sttEngineSort === 'asc') {
                        setSTTEngineSort('desc');
                      } else if (sttEngineSort === 'desc') {
                        setSTTEngineSort(undefined);
                      } else {
                        setSTTEngineSort('asc');
                      }
                      setModelCardSort(undefined);
                      setLanguageSort(undefined);
                      setCreatorSort(undefined);
                      setModelVersionSort(undefined);
                      setData(data);
                    }}
                    sort={sttEngineSort}
                  >
                    STT Engine
                  </SortableCell>
                  <SortableCell
                    onClick={() => {
                      if (modelVersionSort === 'asc') {
                        setModelVersionSort('desc');
                      } else if (modelVersionSort === 'desc') {
                        setModelVersionSort(undefined);
                      } else {
                        setModelVersionSort('asc');
                      }
                      setModelCardSort(undefined);
                      setLanguageSort(undefined);
                      setCreatorSort(undefined);
                      setSTTEngineSort(undefined);
                      setData(data);
                    }}
                    sort={modelVersionSort}
                  >
                    Model Version
                  </SortableCell>
                  <HeaderCell width="10%">Download</HeaderCell>
                </HeaderRow>
              </Head>
              <Body>
                {currentPage === 1
                  ? sortData(
                      data.slice(),
                      modelCardSort,
                      languageSort,
                      creatorSort,
                      sttEngineSort,
                      modelVersionSort
                    )
                      .slice(currentPage - 1, pageSize)
                      .map(createRow)
                  : sortData(
                      data.slice(),
                      modelCardSort,
                      languageSort,
                      creatorSort,
                      sttEngineSort,
                      modelVersionSort
                    )
                      .slice(currentPage * pageSize - pageSize, currentPage * pageSize)
                      .map(createRow)}
              </Body>
            </StyledTable>
            <Pagination
              totalPages={Math.ceil(data.length / pageSize)}
              currentPage={currentPage}
              onChange={setCurrentPage}
            />
          </div>
        </TabPanel>
        <TabPanel item="tts">TS Models (Coming Soon)</TabPanel>
      </Tabs>
    </MinWidthLayout>
  );
};
