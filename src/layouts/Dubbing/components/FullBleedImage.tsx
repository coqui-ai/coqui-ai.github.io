/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { titleStyling, subtitleStyling } from './Styles';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import FullBleedLayout from 'layouts/FullBleed';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { XL, XXXL } from '@zendeskgarden/react-typography';

export const HeaderText = styled.div`
  position: relative;
`;

export const StyledVideoGamesTitle = styled.div`
  position: absolute;
  top: 17%;
  left: 3%;
`;

export const FullBleedImage: React.FC = () => {
  const fullBleedImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/dubbing/dubbing.jpg" }) {
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
                ${p => mediaQuery('up', 'md', p.theme)} {
                  margin-bottom: ${p => p.theme.space.base * 15}px;
                }

                ${p => mediaQuery('down', 'md', p.theme)} {
                  margin-bottom: ${p => p.theme.space.base * 5}px;
                }
              `}
            >
              <HeaderText>
                <Img
                  fluid={fullBleedImage.file.childImageSharp.fluid}
                  fadeIn
                  durationFadeIn={800}
                  imgStyle={{ width: '100%' }}
                />
                <StyledVideoGamesTitle>
                  <XXXL
                    isBold
                    css={css`
                      color: ${p => p.theme.palette.white};
                      ${titleStyling}
                    `}
                  >
                    Different Language, <br /> Same Voice
                  </XXXL>
                  <XL
                    isBold
                    css={css`
                      color: ${p => p.theme.palette.white};
                      ${subtitleStyling}
                    `}
                  >
                    (Clone a Voice into Any Language)
                  </XL>
                </StyledVideoGamesTitle>
              </HeaderText>
            </Col>
          </Row>
        </Grid>
      </FullBleedLayout>
    </div>
  );
};
