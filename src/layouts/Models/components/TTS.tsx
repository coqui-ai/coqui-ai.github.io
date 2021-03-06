/**
 * Copyright Zendesk, Inc.
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
        file(relativePath: { eq: "images/models/models-tts.png" }) {
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
          <Col
            sm={12}
            lg={4}
            css={css`
              margin-top: ${p => p.theme.space.base * 40}px;
              margin-bottom: ${p => p.theme.space.base * 40}px;
            `}
          >
            <Img
              fluid={ttsImage.file.childImageSharp.fluid}
              alt=""
              imgStyle={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </Col>
          <Col sm={12} lg={8}>
            <Row justifyContent="end">
              <Col
                sm={12}
                lg={8}
                css={css`
                  margin-top: ${p => p.theme.space.base * 40}px;
                  margin-bottom: ${p => p.theme.space.base * 40}px;
                `}
              >
                <TTSCallout
                  section="TTS"
                  paragraph1="With the Coqui STT code we at Coqui have also released many high quality models, some of which rival human levels of realism."
                  paragraph2="The models support a number of languages (e.g. American English, Spanish) along with a number of platforms (e.g. Raspberry Pi 4 or GPU servers) and the models are on GitHub."
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
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};
