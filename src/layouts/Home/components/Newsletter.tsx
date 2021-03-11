/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getLineHeight, mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { LG } from '@zendeskgarden/react-typography';
import FullBleedLayout from 'layouts/FullBleed';
import { NewsletterForm } from './NewsletterForm';

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

export const Newsletter: React.FC = () => {
  const bannerImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/home/home-hero-logo.png" }) {
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
        background-color: ${p => p.theme.palette.oatMilk};

        ${p => mediaQuery('up', 'md', p.theme)} {
          height: 85vh;
        }
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
                  ${p => mediaQuery('up', 'md', p.theme)} {
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
                imgStyle={{ width: 540, maxWidth: '100%', height: 540, maxHeight: '100%' }}
              />
            </Col>
            <Col
              md={6}
              css={css`
                margin-top: ${p => p.theme.space.base * 35}px;
                margin-bottom: ${p => p.theme.space.base * 35}px;

                ${p => mediaQuery('down', 'sm', p.theme)} {
                  padding-top: ${p => p.theme.space.lg};
                  padding-bottom: 0;
                }
              `}
            >
              <div>
                <h1
                  css={css`
                    ${headerStyling}
                  `}
                >
                  Coqui, Freeing Speech
                </h1>
                <LG
                  tag="p"
                  css={css`
                    margin-bottom: ${p => p.theme.space.md};
                    max-width: 600px;
                  `}
                >
                  Coqui, a startup providing speech tech for everyone{' '}
                  <span role="img" aria-label="frog">
                    🐸
                  </span>{' '}
                  <br />
                  Sign up with your email address to receive the Coqui newsletter.
                </LG>
                <div
                  css={css`
                    width: 330px;

                    ${p => mediaQuery('down', 'xs', p.theme)} {
                      width: 100%;
                    }
                  `}
                >
                  <NewsletterForm url="https://coqui.us1.list-manage.com/subscribe/post?u=6faea2f1f19c814566173ffb0&amp;id=f9b303df7f" />
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </FullBleedLayout>
    </div>
  );
};
