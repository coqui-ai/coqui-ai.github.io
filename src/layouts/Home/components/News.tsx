/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { XXL } from '@zendeskgarden/react-typography';
import { Link } from 'layouts/Root/components/StyledNavigationLink';
import FullBleedLayout from 'layouts/FullBleed';

const StyledSectionHeader = styled(XXL).attrs({ tag: 'h2', isBold: true })`
  margin-bottom: ${p => p.theme.space.md};
`;

export const News: React.FC = () => {
  const { allGardenNews } = useStaticQuery(
    graphql`
      query {
        allGardenNews {
          edges {
            node {
              title
              author
              author_url
              url
            }
          }
        }
      }
    `
  );

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <FullBleedLayout>
        <Grid gutters="lg">
          <Row>
            <Col
              css={css`
                padding-top: ${p => p.theme.space.xxl};
                padding-bottom: ${p => p.theme.space.xxl};
              `}
            >
              <StyledSectionHeader>News and Articles</StyledSectionHeader>
              <Row>
                {allGardenNews.edges.map((edge: any, index: number) => {
                  return (
                    <Col
                      key={`${edge.node.url}-${index}`}
                      sm={4}
                      css={css`
                        margin-bottom: ${p => p.theme.space.lg};
                      `}
                    >
                      <Link
                        to={edge.node.url}
                        css={css`
                          color: ${p => p.theme.colors.foreground};
                          font-weight: ${p => p.theme.fontWeights.semibold};
                        `}
                      >
                        {edge.node.title}
                      </Link>
                      <p
                        css={css`
                          color: ${p => getColor('grey', 700, p.theme)};
                        `}
                      >
                        By <Link to={edge.node.author_url}>{edge.node.author}</Link>
                      </p>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Grid>
      </FullBleedLayout>
    </div>
  );
};
