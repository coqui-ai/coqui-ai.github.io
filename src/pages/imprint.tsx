/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import SEO from 'components/SEO';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import RootLayout from 'layouts/Root';
import MaxWidthLayout from 'layouts/MaxWidth';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { MD, LG } from '@zendeskgarden/react-typography';
import { StyledH3 } from 'components/MarkdownProvider/components/Typography';
import { Link } from '../layouts/Root/components/StyledNavigationLink';
import GogleAnalyticsCookieConsent from 'components/Cookies';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';

const StyledLink = styled(Link)`
  margin-right: ${p => p.theme.space.lg};
  color: ${p => getColor('neutralHue', 600, p.theme)};

  &:hover,
  &:focus {
    color: inherit;
  }
`;

const ImprintPage: React.FC = () => {
  const imprintImage = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/general/general-imprint.png" }) {
          childImageSharp {
            fixed(width: 270, height: 270) {
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
      <SEO title="Imprint " />
      <MaxWidthLayout>
        <Grid
          css={css`
            margin-top: 180px;
            margin-bottom: 180px;

            ${p => mediaQuery('down', 'xs', p.theme)} {
              margin-top: 60px;
              margin-bottom: 200px;
            }
          `}
        >
          <Row justifyContent="center">
            <Col sm="auto">
              <Img
                fixed={imprintImage.file.childImageSharp.fixed}
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
                <StyledH3
                  css={css`
                    ${p => mediaQuery('down', 'xs', p.theme)} {
                      margin-bottom: ${p => p.theme.space.xs};
                      line-height: ${p => p.theme.lineHeights.xxl};
                      font-size: ${p => p.theme.fontSizes.xxl};
                      font-weight: ${p => p.theme.fontWeights.semibold};
                    }
                  `}
                >
                  Imprint/Impressum
                </StyledH3>
                <MD
                  css={css`
                    color: ${p => getColor('neutralHue', 600, p.theme)};

                    ${p => mediaQuery('down', 'xs', p.theme)} {
                      line-height: ${p => p.theme.lineHeights.md};
                      font-size: ${p => p.theme.fontSizes.md};
                    }
                  `}
                >
                  <div>Disclosures in accordance with § 5 TMG</div>
                  <div>Allgemeine Informationspflichten gemäß § 5 TMG</div>
                </MD>
                <LG
                  isBold
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
                  Address/Adresse
                </LG>
                <MD
                  css={css`
                    color: ${p => getColor('neutralHue', 600, p.theme)};

                    ${p => mediaQuery('down', 'xs', p.theme)} {
                      line-height: ${p => p.theme.lineHeights.md};
                      font-size: ${p => p.theme.fontSizes.md};
                    }
                  `}
                >
                  <address>
                    Coqui GmbH <br />
                    Tile-Wardenberg-Straße 6 <br />
                    10555 Berlin <br />
                    Germany
                  </address>
                </MD>
                <LG
                  isBold
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
                  Contact/Kontakt
                </LG>
                <MD
                  css={css`
                    color: ${p => getColor('neutralHue', 600, p.theme)};

                    ${p => mediaQuery('down', 'xs', p.theme)} {
                      line-height: ${p => p.theme.lineHeights.md};
                      font-size: ${p => p.theme.fontSizes.md};
                    }
                  `}
                >
                  <StyledLink to="mailto:info@coqui.ai">info@coqui.ai</StyledLink>
                </MD>
                <LG
                  isBold
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
                  Managing Director/Vertretungsberechtigter
                </LG>
                <MD
                  css={css`
                    color: ${p => getColor('neutralHue', 600, p.theme)};

                    ${p => mediaQuery('down', 'xs', p.theme)} {
                      line-height: ${p => p.theme.lineHeights.md};
                      font-size: ${p => p.theme.fontSizes.md};
                    }
                  `}
                >
                  Kelly Davis
                </MD>
                <LG
                  isBold
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
                  Registry Court/Registergericht
                </LG>
                <MD
                  css={css`
                    color: ${p => getColor('neutralHue', 600, p.theme)};

                    ${p => mediaQuery('down', 'xs', p.theme)} {
                      line-height: ${p => p.theme.lineHeights.md};
                      font-size: ${p => p.theme.fontSizes.md};
                    }
                  `}
                >
                  Amtsgericht Charlottenburg Berlin
                </MD>
                <LG
                  isBold
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
                  Register Number/Registernummer
                </LG>
                <MD
                  css={css`
                    color: ${p => getColor('neutralHue', 600, p.theme)};

                    ${p => mediaQuery('down', 'xs', p.theme)} {
                      line-height: ${p => p.theme.lineHeights.md};
                      font-size: ${p => p.theme.fontSizes.md};
                    }
                  `}
                >
                  HRB 226777 B
                </MD>
                <LG
                  isBold
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
                  VAT Number/Umsatzsteueridentifikationsnummer
                </LG>
                <MD
                  css={css`
                    color: ${p => getColor('neutralHue', 600, p.theme)};

                    ${p => mediaQuery('down', 'xs', p.theme)} {
                      line-height: ${p => p.theme.lineHeights.md};
                      font-size: ${p => p.theme.fontSizes.md};
                    }
                  `}
                >
                  30/253/51465
                </MD>
              </div>
            </Col>
          </Row>
        </Grid>
      </MaxWidthLayout>
      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default ImprintPage;
