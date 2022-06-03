/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { VideoFrame } from './VideoFrame';
import StandardWidthLayout from 'layouts/StandardWidth';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

export const Video: React.FC = () => {
  return (
    <StandardWidthLayout>
      <Grid gutters="lg">
        <Row
          alignItems="center"
          justifyContent="center"
          css={css`
            padding-bottom: ${p => p.theme.space.xxl};

            ${p => mediaQuery('up', 'md', p.theme)} {
              padding-top: ${p => p.theme.space.lg};
            }
          `}
        >
          <Col
            size={12}
            order={0}
            css={css`
              margin-right: auto;
              margin-bottom: ${p => p.theme.space.lg};
              margin-left: auto;
            `}
          >
            <div align="center">
              <VideoFrame />
            </div>
          </Col>
        </Row>
      </Grid>
    </StandardWidthLayout>
  );
};
