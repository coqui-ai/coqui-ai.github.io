/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { headerStyling } from './Styles';
import MaxWidthLayout from 'layouts/MaxWidth';
import { XXXL } from '@zendeskgarden/react-typography';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

export const Title: React.FC = () => {
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
            css={css`
              ${p => mediaQuery('up', 'md', p.theme)} {
                margin-top: ${p => p.theme.space.xxl};
                margin-bottom: ${p => p.theme.space.xxl};
              }

              ${p => mediaQuery('down', 'md', p.theme)} {
                margin-top: ${p => p.theme.space.md};
                margin-bottom: ${p => p.theme.space.md};
              }
            `}
          >
            <XXXL
              isBold
              css={css`
                ${headerStyling}
                text-align: center;
              `}
            >
              Select Your Plan!
            </XXXL>
          </Col>
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};
