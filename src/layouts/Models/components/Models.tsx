/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery } from 'gatsby';
import MinWidthLayout from 'layouts/MinWidth';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';

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

const tagNameMap = {
  'ukrainian/robinhad/v0.4': ['Yurii Paniv', 'https://github.com/robinhad/'],
  'welsh/techiaith/v21.03': ['Dewi Bryn Jones', 'https://github.com/dewibrynjones/'],
  'catalan/ccoreilly/v0.14.0': ["Ciaran O'Reilly", 'https://github.com/ccoreilly'],
  'german/AASHISHAG/v0.9.0': ['Aashish Agarwal', 'https://github.com/AASHISHAG'],
  'kinyarwanda/digital-umuganda/v0.0.1': ['Digital Umuganda', 'https://digitalumuganda.com/'],
  'spanish/jaco-assistant/v0.0.1': ['Jaco-Assistant', 'https://gitlab.com/Jaco-Assistant'],
  'french/commonvoice-fr/v0.6': [
    'commonvoice-fr',
    'https://github.com/common-voice/commonvoice-fr'
  ],
  'french/jaco-assistant/v0.0.1': ['Jaco-Assistant', 'https://gitlab.com/Jaco-Assistant'],
  'german/jaco-assistant/v0.0.1': ['Jaco-Assistant', 'https://gitlab.com/Jaco-Assistant'],
  'italian/jaco-assistant/v0.0.1': ['Jaco-Assistant', 'https://gitlab.com/Jaco-Assistant'],
  'polish/jaco-assistant/v0.0.1': ['Jaco-Assistant', 'https://gitlab.com/Jaco-Assistant'],
  'komi/itml/v0.0.1': ['ITML', 'https://itml.cl.indiana.edu/'],
  'chuvash/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'basque/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'luganda/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'breton/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'dhivehi/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'greek/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'estonian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'finnish/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'frisian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'georgian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'hakha-chin/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'hungarian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'indonesian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'irish/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'kyrgyz/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'latvian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'lithuanian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'maltese/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'mongolian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'odia/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'portuguese/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'slovenian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'sakha/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'romanian/itml/v0.1.0': ['ITML', 'https://itml.cl.indiana.edu/'],
  'czech/comodoro/v0.1.0': ['Vojtěch Drábek', 'https://github.com/comodoro'],
  'english/coqui/v0.9.3': ['Coqui', 'https://coqui.ai/']
};

const createRow = (row: IRow, index: number) => (
  <Row key={index}>
    <Cell>{row.name}</Cell>
    <Cell>{row.language}</Cell>
    <Cell>
      <Anchor href={tagNameMap[row.tagName][1]}>{tagNameMap[row.tagName][0]}</Anchor>
    </Cell>
    <Cell>
      <Anchor href="https://github.com/coqui-ai/STT/releases/tag/v0.9.3">{row.sttVersion}</Anchor>
    </Cell>
    <Cell>{row.modelVersion}</Cell>
    <Cell>
      <Link to={`../${row.tagName}`}>{row.language} card</Link>
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
                  <HeaderCell width="20%">Full Name</HeaderCell>
                  <HeaderCell>Language</HeaderCell>
                  <HeaderCell>Creator</HeaderCell>
                  <HeaderCell>STT Engine</HeaderCell>
                  <HeaderCell>Model Version</HeaderCell>
                  <HeaderCell>Model Card</HeaderCell>
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
        <TabPanel item="tts">
          The sugar maple is one of America’s most-loved trees. In fact, more states have claimed it
          as their state tree than any other single species—for New York, West Virginia, Wisconsin,
          and Vermont, the maple tree stands alone.
        </TabPanel>
      </Tabs>
    </MinWidthLayout>
  );
};
