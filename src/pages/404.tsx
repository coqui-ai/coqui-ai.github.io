/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import { css } from 'styled-components';
import SEO from 'components/SEO';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import RootLayout from 'layouts/Root';
import MaxWidthLayout from 'layouts/MaxWidth';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { XL, LG } from '@zendeskgarden/react-typography';
import { StyledH1 } from 'components/MarkdownProvider/components/Typography';
import GogleAnalyticsCookieConsent from 'components/Cookies';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';

const NotFoundPage: React.FC = () => {
  const notFoundImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/general/general-error-404.png" }) {
          childImageSharp {
            fixed(width: 350, height: 350) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  );

  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  return (
    <RootLayout>
      <SEO title="Not found" />
      <MaxWidthLayout>
        <Grid
          css={css`
            margin-top: 180px;
            margin-bottom: 288px;

            ${p => mediaQuery('down', 'xs', p.theme)} {
              margin-top: 60px;
              margin-bottom: 200px;
            }
          `}
        >
          <Row justifyContent="center">
            <Col sm="auto">
              <Img
                fixed={notFoundImage.file.childImageSharp.fixed}
                alt=""
                css={css`
                  ${p => mediaQuery('down', 'xs', p.theme)} {
                    /* stylelint-disable declaration-no-important */
                    width: 112px !important;
                    height: 112px !important;
                  }
                `}
                imgStyle={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </Col>
            <Col sm={5}>
              <div
                css={css`
                  margin-left: ${p => p.theme.space.base * 12}px;

                  ${p => mediaQuery('down', 'xs', p.theme)} {
                    margin-left: 0;
                  }
                `}
              >
                <LG
                  css={css`
                    margin-top: ${p => p.theme.space.md};
                    margin-bottom: ${p => p.theme.space.xs};
                    text-transform: uppercase;
                    color: ${p => getColor('neutralHue', 600, p.theme)};
                    font-size: ${p => p.theme.space.base * 4}px;

                    ${p => mediaQuery('down', 'xs', p.theme)} {
                      font-size: ${p => p.theme.fontSizes.sm};
                    }
                  `}
                >
                  404 page not found
                </LG>
                <StyledH1
                  css={css`
                    ${p => mediaQuery('down', 'xs', p.theme)} {
                      margin-bottom: ${p => p.theme.space.xs};
                      line-height: ${p => p.theme.lineHeights.xxl};
                      font-size: ${p => p.theme.fontSizes.xxl};
                      font-weight: ${p => p.theme.fontWeights.semibold};
                    }
                  `}
                >
                  Move along
                </StyledH1>
                <XL
                  css={css`
                    color: ${p => getColor('neutralHue', 600, p.theme)};

                    ${p => mediaQuery('down', 'xs', p.theme)} {
                      line-height: ${p => p.theme.lineHeights.md};
                      font-size: ${p => p.theme.fontSizes.md};
                    }
                  `}
                >
                  This is no place for a frog. Head back to the homepage for more Coqui.
                </XL>
              </div>
            </Col>
          </Row>
        </Grid>
      </MaxWidthLayout>
      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default NotFoundPage;
