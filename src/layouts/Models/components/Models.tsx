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
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';
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

export const Models: React.FC = () => {
  const pageSize = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState('stt');

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
                  <HeaderCell width="20%">Model Card</HeaderCell>
                  <HeaderCell>Language</HeaderCell>
                  <HeaderCell>Creator</HeaderCell>
                  <HeaderCell>STT Engine</HeaderCell>
                  <HeaderCell>Model Version</HeaderCell>
                  <HeaderCell width="10%">Download</HeaderCell>
                </HeaderRow>
              </Head>
              <Body>
                {currentPage === 1
                  ? rowData.slice(currentPage - 1, pageSize).map(createRow)
                  : rowData
                      .slice(currentPage * pageSize - pageSize, currentPage * pageSize)
                      .map(createRow)}
              </Body>
            </StyledTable>
            <Pagination
              totalPages={Math.ceil(rowData.length / pageSize)}
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
