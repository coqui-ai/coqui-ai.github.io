/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { titleStyling } from './Styles';
import { VideoFrame } from './VideoFrame';
import MaxWidthLayout from 'layouts/MaxWidth';
import { XXXL } from '@zendeskgarden/react-typography';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

export const Video: React.FC = () => {
  return (
    <MaxWidthLayout>
      <Grid
        gutters="lg"
        css={css`
          margin-top: ${p => p.theme.space.xxl};
          margin-bottom: ${p => p.theme.space.xxl};
        `}
      >
        <Row alignItems="center" justifyContent="center">
          <Col
            size={12}
            order={0}
            css={css`
              margin-bottom: ${p => p.theme.space.lg};
            `}
          >
            <XXXL
              isBold
              css={css`
                text-align: center;
                ${titleStyling}
              `}
            >
              Prestidigitation Possibilities
            </XXXL>
          </Col>
        </Row>
        <Row alignItems="center" justifyContent="center">
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
    </MaxWidthLayout>
  );
};
