/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';

interface IRow {
  contentType: string;
  downloadCount: number;
  downloadUrl: string;
  name: string;
  size: number;
  url: string;
}

const formatBytes = (bytes: number) => {
  if (bytes === 0) {
    return '0 Bytes';
  }

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(1))} ${sizes[i]}`;
};

const createRow = (row: IRow, index: number) => (
  <Row key={index}>
    <Cell>
      <Anchor href={row.downloadUrl}>{row.name}</Anchor>
    </Cell>
    <Cell style={{ textAlign: 'right' }}>{formatBytes(row.size)}</Cell>
  </Row>
);

const removeDuplicates = (row: IRow) => {
  return row.contentType !== 'text/markdown';
};

const ModelAssets: React.FC<Record<string, unknown>> = ({ data }) => {
  return (
    <Table isReadOnly>
      <Head>
        <HeaderRow>
          <HeaderCell>Asset</HeaderCell>
          <HeaderCell style={{ textAlign: 'right' }}>Size</HeaderCell>
        </HeaderRow>
      </Head>
      <Body>{data.pathContext.releaseAssets.nodes.filter(removeDuplicates).map(createRow)}</Body>
    </Table>
  );
};

export default ModelAssets;
