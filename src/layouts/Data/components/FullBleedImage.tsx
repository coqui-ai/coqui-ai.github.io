/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { css } from 'styled-components';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import FullBleedLayout from 'layouts/FullBleed';

export const FullBleedImage: React.FC = () => {
  const fullBleedImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/data/data-background.png" }) {
          childImageSharp {
            fluid(maxWidth: 2880) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  );

  return (
    <div>
      <FullBleedLayout>
        <Grid gutters={false}>
          <Row>
            <Col
              css={css`
                margin-top: ${p => p.theme.space.base * 30}px;
                margin-bottom: ${p => p.theme.space.base * 30}px;
              `}
            >
              <Img
                fluid={fullBleedImage.file.childImageSharp.fluid}
                fadeIn
                durationFadeIn={800}
                imgStyle={{ width: '100%' }}
              />
            </Col>
          </Row>
        </Grid>
      </FullBleedLayout>
    </div>
  );
};
