/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import MaxWidthLayout from 'layouts/MaxWidth';
import { MottoCallout } from './MottoCallout';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { mediaQuery, PALETTE } from '@zendeskgarden/react-theming';

export const Motto: React.FC = () => {
  return (
    <div
      css={css`
        background-color: ${PALETTE.grey[700]};
      `}
    >
      <MaxWidthLayout>
        <Grid gutters="lg">
          <Row>
            <Col
              sm={12}
              lg={8}
              css={css`
                margin-top: ${p => p.theme.space.base * 40}px;
                margin-bottom: ${p => p.theme.space.base * 40}px;
              `}
            >
              <MottoCallout
                description="Coqui is opening data in order to free speech technology"
                css={css`
                  max-width: 500px;

                  ${p => mediaQuery('down', 'md', p.theme)} {
                    max-width: 553px;
                  }
                `}
              />
            </Col>
          </Row>
        </Grid>
      </MaxWidthLayout>
    </div>
  );
};
