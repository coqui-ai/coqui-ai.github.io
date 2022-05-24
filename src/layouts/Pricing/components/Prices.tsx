/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Pro } from './Pro';
import { Creator } from './Creator';
import { css } from 'styled-components';
import { Enterprise } from './Enterprise';
import MaxWidthLayout from 'layouts/MaxWidth';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

export const Prices: React.FC = () => {
  return (
    <MaxWidthLayout>
      <Grid gutters="lg">
        <Row alignItems="center" justifyContent="center">
          <Col
            sm={12}
            md={12}
            lg={4}
            orderSm={1}
            orderMd={1}
            orderLg={0}
            css={css`
              margin-top: ${p => p.theme.space.xxl};
              margin-bottom: ${p => p.theme.space.xxl};
            `}
          >
            <Creator />
          </Col>
          <Col
            sm={12}
            md={12}
            lg={4}
            orderSm={0}
            orderMd={0}
            orderLg={1}
            css={css`
              margin-top: ${p => p.theme.space.xxl};
              margin-bottom: ${p => p.theme.space.xxl};
            `}
          >
            <Pro />
          </Col>
          <Col
            sm={12}
            md={12}
            lg={4}
            orderSm={2}
            orderMd={2}
            orderLg={2}
            css={css`
              margin-top: ${p => p.theme.space.xxl};
              margin-bottom: ${p => p.theme.space.xxl};
            `}
          >
            <Enterprise />
          </Col>
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};
