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
import { getColor, getLineHeight, mediaQuery } from '@zendeskgarden/react-theming';
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

export const YourTTS: React.FC = () => {
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
        margin-bottom: ${p => p.theme.space.base * 10}px;
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
	      <iframe src="https://ghbtns.com/github-btn.html?user=coqui_ai&repo=TTS&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
	      <a class="twitter-share-button"
	      	 href="https://demo.coqui.ai"
	      	 data-size="large"
	      	 data-text="I just cloned myself and spoke a foreign language with 🐸 Coqui Text-to-Speech"
	      	 data-url="https://demo.coqui.ai"
	      	 data-hashtags="SpeechTech,OpenSource"
	      	 data-via="coqui_ai"
	      	 data-related="">
	      	 Tweet
	      </a>
                <h1
                  css={css`
                    ${headerStyling}
                  `}
                >
                  Speaking in Tongues
                </h1>
                <LG
                  tag="p"
                  css={css`
                    margin-bottom: ${p => p.theme.space.md};
                    max-width: 600px;
                  `}
                >
                  Curious as to what you&apos;d sound like speaking a foreign language? <br />
                  Find out with YourTTS{' '}
                  <span role="img" aria-label="frog">
                    🐸
                  </span>
                  , Coqui&apos;s new TTS model!
                </LG>
                <iframe
                  src="https://demo.coqui.ai/"
                  height="490"
                  width="100%"
                  title="YourTTS Demo"
                  allow="microphone https://demo.coqui.ai"
                  css={css`
                    margin-bottom: ${p => p.theme.space.md};
                    border: 1px solid ${p => getColor('grey', 400, p.theme)};
                    border-style: solid;
                    border-radius: 5px;
                    max-width: 600px;
                  `}
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </FullBleedLayout>
    </div>
  );
};