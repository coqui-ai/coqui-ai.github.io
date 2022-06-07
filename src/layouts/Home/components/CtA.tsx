/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import Img from 'gatsby-image';
import { css } from 'styled-components';
import { headerStyling } from './Styles';
import { TryNowButton } from './Buttons';
import { useStaticQuery, graphql } from 'gatsby';
import { LG } from '@zendeskgarden/react-typography';
import StandardWidthLayout from 'layouts/StandardWidth';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

export const CtA: React.FC = () => {
  const bannerImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/home/cta.png" }) {
          childImageSharp {
            fluid(maxWidth: 479) {
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
        margin-bottom: ${p => p.theme.space.base * 10}px;
        background-color: ${p => p.theme.palette.oatMilk};
      `}
    >
      <StandardWidthLayout>
        <Grid gutters={false}>
          <Row alignItems="center">
            <Col
              sm={12}
              md={6}
              orderSm={0}
              orderMd={1}
              css={css`
                ${p => mediaQuery('up', 'md', p.theme)} {
                  margin-top: ${p => p.theme.space.base * 35}px;
                }

                ${p => mediaQuery('down', 'md', p.theme)} {
                  margin-top: ${p => p.theme.space.base * 10}px;
                  padding: ${p => p.theme.space.md} ${p => p.theme.space.md} 0
                    ${p => p.theme.space.md};
                }
              `}
            >
              <div>
                <h1
                  css={css`
                    ${headerStyling}

                    ${p => mediaQuery('down', 'sm', p.theme)} {
                      text-align: center;
                    }
                  `}
                >
                  Coqui, Emotion Spoken
                </h1>
                <LG
                  tag="p"
                  css={css`
                    margin-bottom: ${p => p.theme.space.md};
                    max-width: 600px;

                    ${p => mediaQuery('down', 'sm', p.theme)} {
                      text-align: center;
                    }
                  `}
                >
                  Synthetic speech, human emotion.
                </LG>
                <div
                  css={css`
                    width: 330px;

                    ${p => mediaQuery('down', 'sm', p.theme)} {
                      width: 100%;
                      text-align: center;
                    }
                  `}
                >
                  <TryNowButton />
                </div>
              </div>
            </Col>
            <Col
              sm={12}
              md={6}
              orderSm={1}
              orderMd={0}
              css={css`
                ${p => mediaQuery('up', 'md', p.theme)} {
                  padding-right: ${p => p.theme.space.xxl};
                }
              `}
            >
              <Img
                fluid={bannerImage.file.childImageSharp.fluid}
                alt=""
                css={css`
                  ${p => mediaQuery('up', 'md', p.theme)} {
                    margin: ${p => p.theme.space.base * 20}px auto 0 0;
                  }

                  ${p => mediaQuery('down', 'md', p.theme)} {
                    margin: ${p => p.theme.space.base * 10}px auto 0 auto;
                  }
                  width: 100%;
                  max-width: 479px;
                `}
              />
            </Col>
          </Row>
        </Grid>
      </StandardWidthLayout>
    </div>
  );
};
