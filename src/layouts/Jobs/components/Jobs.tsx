/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { Link } from 'gatsby';
import MinWidthLayout from 'layouts/MinWidth';
import React from 'react';
import styled, { css } from 'styled-components';

interface IRow {
  title: string;
  url: url;
  location: string;
  group: string;
}

const rowData: IRow[] = [
  {
    title: 'Renaissance Sales Representative',
    url: '../job/renaissance-sales-representative',
    location: 'Berlin, Germany OR Remote',
    group: 'Sales'
  },
  {
    title: 'Senior Full Stack Engineer',
    url: '../job/senior-full-stack-engineer',
    location: 'Worldwide Remote',
    group: 'Engineering'
  },
  {
    title: 'Principal Full Stack Engineer',
    url: '../job/principal-full-stack-engineer',
    location: 'Worldwide Remote',
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
          {rowData.map((data, index) => (
            <Row key={index + 1} isStriped={(index + 1) % 2 === 0}>
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
