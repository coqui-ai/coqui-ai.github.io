/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import Img from 'gatsby-image';
import { css } from 'styled-components';
import { DataCallout } from './DataCallout';
import FullBleedLayout from 'layouts/FullBleed';
import { useStaticQuery, graphql } from 'gatsby';
import { Anchor } from '@zendeskgarden/react-buttons';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

export const Data: React.FC = () => {
  const dataImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/data/data.png" }) {
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
    <FullBleedLayout>
      <Grid gutters={false}>
        <Row>
          <Col sm={12} lg={9}>
            <Row justifyContent="end">
              <Col
                sm={12}
                lg={8}
                alignSelf="center"
                css={css`
                  margin-top: ${p => p.theme.space.base * 30}px;
                `}
              >
                <DataCallout
                  section="Data"
                  paragraph1="Coqui has also done work in creating open data sets. In particular they were key to the development of Common Voice, a CC0 open data set for STT."
                  paragraph2="In addition to working on Common Voice Coqui has also worked on the development of The People's Speech, another open data set for STT."
                  css={css`
                    max-width: 700px;

                    ${p => mediaQuery('down', 'md', p.theme)} {
                      max-width: 774px;
                    }
                  `}
                />
                <Anchor href="https://commonvoice.mozilla.org/en">
                  Browse <span>Common Voice →</span>
                </Anchor>{' '}
                <br />
                <Anchor href="https://mlcommons.org/en/peoples-speech/">
                  Browse <span>People’s Speech →</span>
                </Anchor>
              </Col>
            </Row>
          </Col>
          <Col
            sm={12}
            lg={3}
            css={css`
              margin-top: ${p => p.theme.space.base * 15}px;
            `}
          >
            <Img
              fluid={dataImage.file.childImageSharp.fluid}
              alt=""
              imgStyle={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </Col>
        </Row>
      </Grid>
    </FullBleedLayout>
  );
};
