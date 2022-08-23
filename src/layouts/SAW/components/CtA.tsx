/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { headerStyling } from './Styles';
import { TryNowButton } from './Buttons';
import { LG } from '@zendeskgarden/react-typography';
import StandardWidthLayout from 'layouts/StandardWidth';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';

export const CtA: React.FC = () => {
  return (
    <div
      css={css`
        margin-bottom: ${p => p.theme.space.base * 10}px;
      `}
    >
      <StandardWidthLayout>
        <Grid gutters={false}>
          <Row alignItems="center">
            <Col
              textAlign="center"
              css={css`
                ${p => mediaQuery('up', 'md', p.theme)} {
                  margin-top: ${p => p.theme.space.base * 35}px;
                }

                ${p => mediaQuery('down', 'md', p.theme)} {
                  margin-top: ${p => p.theme.space.base * 10}px;
                  padding: ${p => p.theme.space.md} ${p => p.theme.space.md} 0
                    ${p => p.theme.space.md};
                }
              `}
            >
              <div>
                <LG
                  tag="p"
                  css={css`
                    width: 100%;
                    text-align: center;
                    color: ${p => getColor('green', 400, p.theme)};
                  `}
                >
                  Coqui&apos;s Speech Audio Workstation
                </LG>
                <h1
                  css={css`
                    ${headerStyling}

                    ${p => mediaQuery('down', 'sm', p.theme)} {
                      text-align: center;
                    }
                  `}
                >
                  Emotion on Call
                </h1>
                <LG
                  tag="p"
                  css={css`
                    margin-bottom: ${p => p.theme.space.md};
                    width: 100%;
                    text-align: center;
                  `}
                >
                  Cast, Direct, and Deploy AI Voice Actors - without the Heartache
                </LG>
                <div
                  css={css`
                    width: 100%;
                    text-align: center;
                  `}
                >
                  <TryNowButton />
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </StandardWidthLayout>
    </div>
  );
};
