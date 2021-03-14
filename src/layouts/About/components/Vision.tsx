/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import MaxWidthLayout from 'layouts/MaxWidth';
import { VisionCallout } from './VisionCallout';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

export const Vision: React.FC = () => {
  return (
    <MaxWidthLayout>
      <Grid gutters="lg">
        <Row justifyContent="end">
          <Col
            sm={12}
            lg={8}
            css={css`
              margin-top: ${p => p.theme.space.base * 30}px;
              margin-bottom: ${p => p.theme.space.base * 30}px;
            `}
          >
            <VisionCallout
              section="Vision"
              paragraph1="Coqui is a startup dedicated to open speech technology and to serving as the hub where speech researchers, developers, and practitioners congregate."
              paragraph2="Our projects include deep learning based STT and TTS engines, an aligner, a job scheduler and much more."
              css={css`
                max-width: 800px;

                ${p => mediaQuery('down', 'md', p.theme)} {
                  max-width: 884px;
                }
              `}
            />
          </Col>
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};
