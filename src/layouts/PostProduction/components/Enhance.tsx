/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { SectionCallout } from './SectionCallout';
import MaxWidthLayout from 'layouts/MaxWidth';

export const Enhance: React.FC = () => {
  const patternsImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/post-production/enhance.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 880) {
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
        <Row alignItems="center" justifyContent="center">
          <Col
            sm={12}
            md={6}
            lg={6}
            order={0}
            css={css`
              margin-bottom: ${p => p.theme.space.lg};
            `}
          >
            <SectionCallout
              header="Enhance"
              description="Once you've cloned the voice of your talent, you can use it to work magic in post: punching-in script changes, modifying diction, replacinig brand names, tweaking accent... Anything!"
              css={css`
                ${p => mediaQuery('up', 'sm', p.theme)} {
                  margin-right: auto;
                  margin-left: auto;
                  max-width: 490px;
                }

                ${p => mediaQuery('down', 'sm', p.theme)} {
                  margin-right: 0;
                  margin-left: 0;
                  max-width: 100%;
                }
              `}
            />
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            order={1}
            css={css`
              ${p => mediaQuery('down', 'sm', p.theme)} {
                margin-bottom: ${p => p.theme.space.lg};
              }
            `}
          >
            <Img
              fluid={patternsImage.file.childImageSharp.fluid}
              imgStyle={{ width: 880, maxWidth: '100%', height: 559, maxHeight: '100%' }}
            />
          </Col>
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};