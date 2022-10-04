/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { WaitingList } from './WaitingList';
import StandardWidthLayout from 'layouts/StandardWidth';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { WaitingListCtAImage } from './WaitingListCtAImage';

export const WaitingListCtA: React.FC = () => {
  return (
    <div>
      <StandardWidthLayout>
        <Grid
          gutters={false}
          css={css`
            ${p => mediaQuery('up', 'md', p.theme)} {
              margin: ${p => p.theme.space.base * 10}px 0 ${p => p.theme.space.base * 10}px 0;
            }
          `}
        >
          <Row alignItems="center">
            <Col>
              <WaitingList />
            </Col>
          </Row>
          <Row alignItems="center">
            <Col>
              <WaitingListCtAImage />
            </Col>
          </Row>
        </Grid>
      </StandardWidthLayout>
    </div>
  );
};
