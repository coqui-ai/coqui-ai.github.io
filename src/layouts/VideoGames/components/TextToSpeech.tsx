/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import MaxWidthLayout from 'layouts/MaxWidth';
import { headerStyling, textStyling } from './Styles';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Paragraph, XL, XXXL } from '@zendeskgarden/react-typography';

export const TextToSpeech: React.FC = () => {
  return (
    <MaxWidthLayout>
      <Grid
        gutters="lg"
        css={css`
          margin-bottom: ${p => p.theme.space.md};
        `}
      >
        <Row alignItems="center" justifyContent="center">
          <Col
            sm={12}
            md={4}
            lg={4}
            order={0}
            css={css`
              ${p => mediaQuery('up', 'md', p.theme)} {
                margin-bottom: ${p => p.theme.space.xxl};
              }

              ${p => mediaQuery('down', 'md', p.theme)} {
                margin-bottom: ${p => p.theme.space.md};
              }
            `}
          >
            <XXXL
              isBold
              css={css`
                ${headerStyling}

                ${p => mediaQuery('down', 'sm', p.theme)} {
                  text-align: center;
                }
              `}
            >
              Text-to-Speech
            </XXXL>
          </Col>
          <Col
            sm={12}
            md={8}
            lg={8}
            order={1}
            css={css`
              ${p => mediaQuery('up', 'md', p.theme)} {
                margin-bottom: ${p => p.theme.space.xxl};
              }

              ${p => mediaQuery('down', 'md', p.theme)} {
                margin-bottom: ${p => p.theme.space.lg};
              }
            `}
          >
            <Paragraph>
              <XL
                tag="span"
                css={css`
                  ${textStyling}

                  ${p => mediaQuery('down', 'sm', p.theme)} {
                    margin-right: auto;
                    margin-left: auto;
                    width: 80%;
                  }
                `}
              >
                With text-to-speech, experience the immediacy of script-to-performance. Cast from a
                wide selection of high-quality, directable, emotive voices or clone a voice to suit
                your needs. With Coqui text-to-speech production times go from months to minutes.
              </XL>
            </Paragraph>
          </Col>
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};
