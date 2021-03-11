/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import Img from 'gatsby-image';
import { css } from 'styled-components';
import { TTSCallout } from './TTSCallout';
import MaxWidthLayout from 'layouts/MaxWidth';
import { useStaticQuery, graphql } from 'gatsby';
import { Anchor } from '@zendeskgarden/react-buttons';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

export const TTS: React.FC = () => {
  const ttsImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/code/code-tts.png" }) {
          childImageSharp {
            fluid(maxWidth: 625) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  );

  return (
    <MaxWidthLayout>
      <Grid gutters="lg">
        <Row>
          <Col sm={12} lg={6}>
            <Row justifyContent="start">
              <Col
                sm={12}
                lg={8}
                css={css`
                  margin-top: ${p => p.theme.space.base * 30}px;
                  margin-bottom: ${p => p.theme.space.base * 30}px;
                `}
              >
                <TTSCallout
                  section="TTS"
                  paragraph1="Coqui TTS is an open source embedded (offline, on-device) text-to-speech engine. It can run in real time on anything from a Raspberry Pi 4 to a high-end GPU server."
                  paragraph2="Coqui TTS currently has an API for Python and is supported on many platforms (Linux, macOS, Windows...), and it is available on GitHub."
                  css={css`
                    max-width: 700px;

                    ${p => mediaQuery('down', 'md', p.theme)} {
                      max-width: 774px;
                    }
                  `}
                />
                <Anchor href="https://github.com/coqui-ai/TTS">
                  Browse <span>Coqui TTS →</span>
                </Anchor>
              </Col>
            </Row>
          </Col>
          <Col
            sm={12}
            lg={6}
            css={css`
              margin-top: ${p => p.theme.space.base * 20}px;
              margin-bottom: ${p => p.theme.space.base * 20}px;
            `}
          >
            <Img
              fluid={ttsImage.file.childImageSharp.fluid}
              alt=""
              imgStyle={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </Col>
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};
