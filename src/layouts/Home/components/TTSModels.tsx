/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { headerStyling } from './Styles';
import { TryNowButton } from './Buttons';
import { TTSModelDemo } from './TTSModelDemo';
import { LG } from '@zendeskgarden/react-typography';
import StandardWidthLayout from 'layouts/StandardWidth';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

export const TTSModels: React.FC = () => {
  return (
    <StandardWidthLayout>
      <Grid gutters={false}>
        <Row alignItems="center">
          <Col
            css={css`
              ${headerStyling}
              text-align: center;
            `}
          >
            Our TTS Models
          </Col>
        </Row>
        <Row
          alignItems="center"
          css={css`
            margin-bottom: ${p => p.theme.space.md};
          `}
        >
          <Col
            css={css`
              ${headerStyling}
              text-align: center;
            `}
          >
            <LG
              css={css`
                text-align: center;
              `}
            >
              Check out our amazing TTS Models
            </LG>
          </Col>
        </Row>
        <Row
          alignItems="center"
          css={css`
            margin-bottom: ${p => p.theme.space.xxl};
          `}
        >
          <Col
            css={css`
              ${headerStyling}
              text-align: center;
            `}
          >
            <TryNowButton />
          </Col>
        </Row>
        <Row
          alignItems="center"
          css={css`
            margin-bottom: ${p => p.theme.space.md};
          `}
        >
          <Col size={1} />
          <Col size={10}>
            <TTSModelDemo />
          </Col>
          <Col size={1} />
        </Row>
      </Grid>
    </StandardWidthLayout>
  );
};
