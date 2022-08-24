/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { FeaturesVideoFrame } from './FeaturesVideoFrame';
import StandardWidthLayout from 'layouts/StandardWidth';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

export const FeaturesVideo: React.FC<{
  mp4File: string;
  webmFile: string;
  startTime: number;
  stopTime: number;
}> = ({ mp4File, webmFile, startTime, stopTime }) => {
  return (
    <StandardWidthLayout>
      <Grid gutters={false}>
        <Row
          css={css`
            padding-bottom: ${p => p.theme.space.xxl};

            ${p => mediaQuery('up', 'md', p.theme)} {
              padding-top: ${p => p.theme.space.lg};
            }
          `}
        >
          <Col
            css={css`
              margin-bottom: ${p => p.theme.space.lg};
            `}
          >
            <FeaturesVideoFrame
              mp4File={mp4File}
              webmFile={webmFile}
              startTime={startTime}
              stopTime={stopTime}
            />
          </Col>
        </Row>
      </Grid>
    </StandardWidthLayout>
  );
};
