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
import GitHubButton from 'react-github-btn';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  VKShareButton,
  VKIcon,
  WeiboShareButton,
  WeiboIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';

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
                <GitHubButton
                  href="https://github.com/coqui-ai/TTS"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star coqui-ai/TTS on GitHub"
                >
                  Star
                </GitHubButton>
                <TwitterShareButton
                  url="https://coqui.ai"
                  title="Clone your voice and speak a foreign language with Coqui 🐸💬"
                  via="coqui_ai"
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton
                  url="https://coqui.ai"
                  title="Clone your voice and speak a foreign language with Coqui 🐸💬"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <TelegramShareButton
                  url="https://coqui.ai"
                  title="Clone your voice and speak a foreign language with Coqui 🐸💬"
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                <RedditShareButton
                  url="https://coqui.ai"
                  title="Clone your voice and speak a foreign language with Coqui 🐸💬"
                >
                  <RedditIcon size={32} round />
                </RedditShareButton>
                <FacebookShareButton
                  url="https://coqui.ai"
                  quote="Clone your voice and speak a foreign language with Coqui 🐸💬"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <LinkedinShareButton
                  url="https://coqui.ai"
                  title="Clone your voice and speak a foreign language with Coqui 🐸💬"
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <VKShareButton
                  url="https://coqui.ai"
                  title="Clone your voice and speak a foreign language with Coqui 🐸💬"
                >
                  <VKIcon size={32} round />
                </VKShareButton>
                <ViberShareButton
                  url="https://coqui.ai"
                  title="Clone your voice and speak a foreign language with Coqui 🐸💬"
                >
                  <ViberIcon size={32} round />
                </ViberShareButton>
                <WeiboShareButton
                  url="https://coqui.ai"
                  title="Clone your voice and speak a foreign language with Coqui 🐸💬"
                >
                  <WeiboIcon size={32} round />
                </WeiboShareButton>
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
