/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getLineHeight, mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { LG } from '@zendeskgarden/react-typography';
import FullBleedLayout from 'layouts/FullBleed';

const headerStyling = (p: ThemeProps<DefaultTheme>) => {
  const fontSize = `${p.theme.space.base * 12}px`;

  return css`
    margin-bottom: ${p.theme.space.md};
    line-height: ${getLineHeight(`${p.theme.space.base * 14}px`, fontSize)};
    font-size: ${fontSize};
    font-weight: ${p.theme.fontWeights.bold};

    ${mediaQuery('down', 'sm', p.theme)} {
      line-height: ${p.theme.lineHeights.xxxl};
      font-size: ${p.theme.fontSizes.xxxl};
    }
  `;
};

export const OVH: React.FC = () => {
  const bannerImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/home/home-hero-longtail-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 540) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  );

  return (
    <div
      css={css`
        margin-bottom: ${p => p.theme.space.base * 20}px;
        background-color: ${p => p.theme.palette.oatMilk};
      `}
    >
      <FullBleedLayout>
        <Grid gutters={false}>
          <Row alignItems="center">
            <Col
              md={6}
              order={1}
              orderMd={0}
              css={css`
                padding-right: ${p => p.theme.space.xxl};
                padding-left: 0;
              `}
            >
              <Img
                fluid={bannerImage.file.childImageSharp.fluid}
                alt=""
                css={css`
                  ${p => mediaQuery('up', 'sm', p.theme)} {
                    margin: ${p => p.theme.space.base * 40}px auto ${p => p.theme.space.base * 30}px
                      0;
                  }

                  ${p => mediaQuery('down', 'sm', p.theme)} {
                    margin: ${p => p.theme.space.base * 10}px auto ${p => p.theme.space.base * 10}px
                      0;
                  }
                  width: 100%;
                  max-width: 540px;
                `}
                imgStyle={{ width: 540, maxWidth: '100%', height: 640, maxHeight: '100%' }}
              />
            </Col>
            <Col
              md={6}
              css={css`
                margin-top: ${p => p.theme.space.base * 35}px;

                ${p => mediaQuery('up', 'md', p.theme)} {
                  margin-bottom: ${p => p.theme.space.base * 35}px;
                }

                ${p => mediaQuery('down', 'md', p.theme)} {
                  padding: ${p => p.theme.space.lg} ${p => p.theme.space.lg} 0
                    ${p => p.theme.space.lg};
                }
              `}
            >
              <div>
                <h1
                  css={css`
                    ${headerStyling}
                  `}
                >
                  Long Tail Language Competition
                </h1>
                <LG
                  tag="p"
                  css={css`
                    margin-bottom: ${p => p.theme.space.md};
                    max-width: 600px;
                  `}
                >
                  The majority of the world speaks “minority” languages.
                  <br />
                  Join Coqui+OVH in giving these languages a voice.
                  <br />
                  Enter the competition{' '}
                  <Link to="/ovh">
                    here{' '}
                    <span role="img" aria-label="target">
                      🎯
                    </span>
                  </Link>
                  <br />
                </LG>
              </div>
            </Col>
          </Row>
        </Grid>
      </FullBleedLayout>
    </div>
  );
};
