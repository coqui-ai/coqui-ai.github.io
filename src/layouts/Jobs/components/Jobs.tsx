/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import MinWidthLayout from 'layouts/MinWidth';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';

interface IRow {
  index: number;
  title: string;
  url: url;
  location: string;
  group: string;
}

const rowData: IRow[] = [
  {
    index: 1,
    title: 'Senior, Developer Community Manager',
    url: '../job/senior-developer-community-manager',
    location: 'Berlin, Germany OR Remote',
    group: 'Community'
  },
  {
    index: 2,
    title: 'Senior, Developer Community Manager',
    url: '../job/senior-developer-community-manager',
    location: 'Berlin, Germany OR Remote',
    group: 'Community'
  },
  {
    index: 3,
    title: 'Head of Product',
    url: '../job/head-of-product',
    location: 'Berlin, Germany OR Remote',
    group: 'Product'
  },
  {
    index: 4,
    title: 'Senior MLOps Training Pipeline Engineer',
    url: '../job/senior-mlops-training-pipeline-engineer',
    location: 'Berlin, Germany OR Remote',
    group: 'MLOps'
  },
  {
    index: 5,
    title: 'Senior MLOps Deployment Engineer',
    url: '../job/senior-mlops-deployment-engineer',
    location: 'Berlin, Germany OR Remote',
    group: 'MLOps'
  },
  {
    index: 6,
    title: 'Senior MLOps Provisioning Engineer',
    url: '../job/senior-mlops-provisioning-engineer',
    location: 'Berlin, Germany OR Remote',
    group: 'MLOps'
  },
  {
    index: 7,
    title: 'Senior STT Deep Learning Engineer',
    url: '../job/senior-stt-deep-learning-engineer',
    location: 'Berlin, Germany OR Remote',
    group: 'Deep Learning'
  },
  {
    index: 8,
    title: 'Senior STT Deep Learning Engineer',
    url: '../job/senior-stt-deep-learning-engineer',
    location: 'Berlin, Germany OR Remote',
    group: 'Deep Learning'
  },
  {
    index: 9,
    title: 'Senior TTS Deep Learning Engineer',
    url: '../job/senior-tts-deep-learning-engineer',
    location: 'Berlin, Germany OR Remote',
    group: 'Deep Learning'
  },
  {
    index: 10,
    title: 'Senior TTS Deep Learning Engineer',
    url: '../job/senior-tts-deep-learning-engineer',
    location: 'Berlin, Germany OR Remote',
    group: 'Deep Learning'
  },
  {
    index: 11,
    title: 'Senior Full Stack Engineer',
    url: '../job/senior-full-stack-engineer',
    location: 'Berlin, Germany OR Remote',
    group: 'Engineering'
  },
  {
    index: 12,
    title: 'Senior Full Stack Engineer',
    url: '../job/senior-full-stack-engineer',
    location: 'Berlin, Germany OR Remote',
    group: 'Engineering'
  },
  {
    index: 13,
    title: 'Senior Full Stack Engineer',
    url: '../job/senior-full-stack-engineer',
    location: 'Berlin, Germany OR Remote',
    group: 'Engineering'
  }
];

export const StyledJobsHeader = styled.div`
  text-transform: uppercase;
  line-height: ${p => p.theme.lineHeights.sm};
  letter-spacing: 0.5px;
  color: ${p => getColor('neutralHue', 600, p.theme)};
  font-size: ${p => p.theme.fontSizes.xxl};
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

export const Jobs: React.FC = () => {
  return (
    <MinWidthLayout>
      <StyledJobsHeader
        css={css`
          margin-bottom: ${p => p.theme.space.xl};
        `}
      >
        Open Positions
      </StyledJobsHeader>
      <Table
        size="large"
        style={{ minWidth: 500 }}
        css={css`
          ${p => mediaQuery('up', 'md', p.theme)} {
            margin-bottom: ${p => p.theme.space.base * 40}px;
          }

          ${p => mediaQuery('down', 'md', p.theme)} {
            margin-bottom: 0;
          }
        `}
      >
        <Head>
          <HeaderRow>
            <HeaderCell>Job Title</HeaderCell>
            <HeaderCell>Location</HeaderCell>
            <HeaderCell>Team</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          {rowData.map(data => (
            <Row key={data.index} isStriped={data.index % 2 === 0}>
              <Cell>
                <Link to={data.url}>{data.title}</Link>
              </Cell>
              <Cell>{data.location}</Cell>
              <Cell>{data.group}</Cell>
            </Row>
          ))}
        </Body>
      </Table>
    </MinWidthLayout>
  );
};
