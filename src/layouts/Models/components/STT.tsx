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
        file(relativePath: { eq: "images/models/models-stt.png" }) {
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
          <Col sm={12} lg={9}>
            <Row justifyContent="start">
              <Col
                sm={12}
                lg={8}
                alignSelf="center"
                css={css`
                  margin-top: ${p => p.theme.space.base * 30}px;
                  margin-bottom: ${p => p.theme.space.base * 30}px;
                `}
              >
                <STTCallout
                  section="STT"
                  paragraph1="Alongside the Coqui STT code Coqui is has also released many high quality models, some of which approach human levels of accuracy."
                  paragraph2="The models are for a number of languages (e.g. American English or Mainland Mandarin), support a number of platforms (e.g. Raspberry Pi 4 or GPU servers), and are available on GitHub."
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
          <Col
            sm={12}
            lg={3}
            css={css`
              margin-top: ${p => p.theme.space.base * 15}px;
              margin-bottom: ${p => p.theme.space.base * 20}px;
            `}
          >
            <Img
              fluid={sttImage.file.childImageSharp.fluid}
              alt=""
              imgStyle={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </Col>
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};
