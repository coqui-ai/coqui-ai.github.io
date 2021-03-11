/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import Img from 'gatsby-image';
import { css } from 'styled-components';
import { STTCallout } from './STTCallout';
import MaxWidthLayout from 'layouts/MaxWidth';
import { useStaticQuery, graphql } from 'gatsby';
import { Anchor } from '@zendeskgarden/react-buttons';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

export const STT: React.FC = () => {
  const sttImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/code/code-stt.png" }) {
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
              margin-top: ${p => p.theme.space.base * 20}px;
              margin-bottom: ${p => p.theme.space.base * 20}px;
            `}
          >
            <Img
              fluid={sttImage.file.childImageSharp.fluid}
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
                  margin-top: ${p => p.theme.space.base * 30}px;
                  margin-bottom: ${p => p.theme.space.base * 30}px;
                `}
              >
                <STTCallout
                  section="STT"
                  paragraph1="Coqui STT is an open source embedded (offline, on-device) speech-to-text engine which can run in real time on devices ranging from a Raspberry Pi 4 to high power GPU servers."
                  paragraph2="Coqui STT has APIs for numerous languages (Python, C/C++, Java, JavaScript, .NET...), is supported on many platforms (Linux, macOS, Windows, ARM...), and is available on GitHub."
                  css={css`
                    max-width: 700px;

                    ${p => mediaQuery('down', 'md', p.theme)} {
                      max-width: 774px;
                    }
                  `}
                />
                <Anchor href="https://github.com/coqui-ai/STT">
                  Browse <span>Coqui STT →</span>
                </Anchor>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};
