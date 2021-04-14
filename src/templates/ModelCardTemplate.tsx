/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import gfm from 'remark-gfm';
import SEO from 'components/SEO';
import RootLayout from 'layouts/Root';
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { SidebarLayout } from 'layouts/Sidebar';
import { Anchor } from '@zendeskgarden/react-buttons';
import GogleAnalyticsCookieConsent from 'components/Cookies';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';
import { MODEL_CARD_COMPONENTS } from '../components/MarkdownProvider/components/Markdown';
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
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(1))} ${sizes[i]}`;
};

const removeDuplicates = (row: IRow) => {
  return row.contentType !== 'text/markdown';
};

const createRow = (row: IRow, index: number) => (
  <Row key={index}>
    <Cell>
      <Anchor href={row.downloadUrl}>{row.name}</Anchor>
    </Cell>
    <Cell style={{ textAlign: 'right' }}>{formatBytes(row.size)}</Cell>
  </Row>
);

const ModelCardLayoutTemplate: React.FC = data => {
  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  return (
    <RootLayout>
      <SEO
        title={`${data.pathContext.name} / Model`}
        description={`Model ${data.pathContext.name}`}
      />
      <SidebarLayout>
        <ReactMarkdown
          renderers={{
            ...MODEL_CARD_COMPONENTS
          }}
          plugins={[gfm]}
        >
          {data.pathContext.description}
        </ReactMarkdown>
        <Table isReadOnly>
          <Head>
            <HeaderRow>
              <HeaderCell>Asset</HeaderCell>
              <HeaderCell style={{ textAlign: 'right' }}>Size</HeaderCell>
            </HeaderRow>
          </Head>
          <Body>
            {data.pathContext.releaseAssets.nodes.filter(removeDuplicates).map(createRow)}
          </Body>
        </Table>
      </SidebarLayout>
      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default ModelCardLayoutTemplate;

export const pageQuery = graphql`
  query ModelCardBySlug {
    allGithubData {
      nodes {
        data {
          repository {
            releases {
              nodes {
                description
                name
                tagName
                releaseAssets {
                  nodes {
                    contentType
                    downloadUrl
                    name
                    size
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;