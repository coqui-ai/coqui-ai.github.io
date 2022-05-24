/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import MaxWidthLayout from 'layouts/MaxWidth';
import { PricesFAQText } from './PricesFAQText';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

export const PricesFAQ: React.FC = () => {
  return (
    <MaxWidthLayout>
      <Grid gutters="lg">
        <Row alignItems="center" justifyContent="center">
          <Col
            css={css`
              margin-top: ${p => p.theme.space.xxl};
              margin-bottom: ${p => p.theme.space.xxl};
            `}
          >
            <PricesFAQText />
          </Col>
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};
