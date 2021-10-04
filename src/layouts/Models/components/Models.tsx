/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import SearchForm from './SearchForm';
import { useLocation } from '@reach/router';
import MinWidthLayout from 'layouts/MinWidth';
import { Anchor } from '@zendeskgarden/react-buttons';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';
import { Row as GridRow, Col as GridCol } from '@zendeskgarden/react-grid';
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
import { useFlexSearch } from 'react-use-flexsearch';

const StyledTable = styled(Table)`
  margin-bottom: ${p => p.theme.space.md};
  min-width: 500px;
`;

type Direction = 'asc' | 'desc' | undefined;

interface IRow {
  name: string;
  language: string;
  creator: string;
  creatorURL: string;
  sttVersion: string;
  modelVersion: string;
  tagName: string;
}

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

  // Currently all engines are pinned to the same value "Coqui STT v1.0.0"
  if (sttEngineSort) {
    return tableData;
  }

  let field: 'name' | 'language' | 'sttVersion' | 'modelVersion' | 'creator';
  let sortValue: Direction;

  if (modelCardSort) {
    field = 'name';
    sortValue = modelCardSort;
  } else if (languageSort) {
    field = 'language';
    sortValue = languageSort;
  } else if (creatorSort) {
    field = 'creator';
    sortValue = creatorSort;
  } else {
    field = 'modelVersion';
    sortValue = modelVersionSort;
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

export const Models: React.FC = () => {
  const pageSize = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState('stt');

  const [modelCardSort, setModelCardSort] = useState<Direction>();
  const [languageSort, setLanguageSort] = useState<Direction>();
  const [creatorSort, setCreatorSort] = useState<Direction>();
  const [sttEngineSort, setSTTEngineSort] = useState<Direction>();
  const [modelVersionSort, setModelVersionSort] = useState<Direction>();

  const location = useLocation();
  const parsedParameters = queryString.parse(location.search);
  const [searchQuery, setSearchQuery] = useState(parsedParameters.s || '');

  const isDownloading = parsedParameters.callback_url === undefined;
  const mode = isDownloading ? 'Download' : 'Install';

  const rawRowData = useStaticQuery(
    graphql`
      query MyQuery {
        localSearchSTtModels {
          index
          store
        }
      }
    `
  );

  const searchRowData: IRow[] = useFlexSearch(
    searchQuery,
    rawRowData.localSearchSTtModels.index,
    rawRowData.localSearchSTtModels.store
  );

  const rowData: IRow[] = Object.keys(rawRowData.localSearchSTtModels.store).map(
    key => rawRowData.localSearchSTtModels.store[key]
  );
  const [data, setData] = useState(rowData);

  const createRow = (row: IRow, index: number) => {
    const encodedName = encodeURIComponent(row.name);
    const modelPageLink = (() => {
      let url = `../${row.tagName}`;

      if (parsedParameters.callback_url) {
        url = `${url}?callback_url=${parsedParameters.callback_url}&name=${encodedName}`;
        if (parsedParameters.prefer_tflite) {
          url = `${url}&prefer_tflite=${parsedParameters.prefer_tflite}`;
        }
      }

      return url;
    })();

    return (
      <Row key={index} isStriped={index % 2 === 0}>
        <Cell>
          <Link to={modelPageLink}>{row.name}</Link>
        </Cell>
        <Cell>{row.language}</Cell>
        <Cell>
          <Anchor href={row.creatorURL}>{row.creator}</Anchor>
        </Cell>
        <Cell>
          <Anchor href="https://github.com/coqui-ai/STT/releases/tag/v1.0.0">
            {row.sttVersion}
          </Anchor>
        </Cell>
        <Cell>{row.modelVersion}</Cell>
        <Cell>
          <Link to={`${modelPageLink}#download`}>
            <DownloadIcon />
          </Link>
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
                  <HeaderCell width="10%">{mode}</HeaderCell>
                </HeaderRow>
              </Head>
              <Body>
                {currentPage === 1
                  ? sortData(
                      (searchQuery ? searchRowData : data).slice(),
                      modelCardSort,
                      languageSort,
                      creatorSort,
                      sttEngineSort,
                      modelVersionSort
                    )
                      .slice(currentPage - 1, pageSize)
                      .map(createRow)
                  : sortData(
                      (searchQuery ? searchRowData : data).slice(),
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
              totalPages={Math.ceil((searchQuery ? searchRowData : data).length / pageSize)}
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
