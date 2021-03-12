/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import MaxWidthLayout from 'layouts/MaxWidth';
import { StoryCallout } from './StoryCallout';
import { mediaQuery, PALETTE } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as CoquiIcon } from '../../../data/images/general/coqui.svg';

export const Story: React.FC = () => {
  return (
    <MaxWidthLayout>
      <Grid gutters="lg">
        <Row>
          <Col
            css={css`
              margin-top: ${p => p.theme.space.base * 40}px;
              margin-bottom: ${p => p.theme.space.base * 40}px;
            `}
          >
            <Row
              justifyContent="center"
              css={css`
                margin-bottom: ${p => p.theme.space.base * 10}px;
              `}
            >
              <CoquiIcon
                css={css`
                  width: ${p => p.theme.space.base * 10}px;
                  height: ${p => p.theme.space.base * 10}px;
                  color: ${PALETTE.green[400]};
                `}
              />
            </Row>
            <Row
              justifyContent="center"
              css={css`
                ${p => mediaQuery('down', 'sm', p.theme)} {
                  padding-right: ${p => p.theme.space.lg};
                  padding-left: ${p => p.theme.space.lg};
                }
              `}
            >
              <StoryCallout
                section="Our Story"
                paragraph1="In 2016 while at Mozilla the members of Coqui noticed that speech technology was siloed in large corporations, leaving the open source world out in the cold. To remedy the situation we decided to do something about it!"
                paragraph2="Over the intervening years we built open sourced STT and TTS engines among other things. Also we kicked off projects open sourcing thousands of hours of training data. This work also gathered around it a vital, knowledgeable, and supportive community which accelerated its growth."
                paragraph3="However, in late 2020 Mozilla decided to no longer support this effort. As a response we created Coqui, an organisation dedicated to continued support of these open source efforts and the community gathered around them."
                css={css`
                  max-width: 900px;

                  ${p => mediaQuery('down', 'md', p.theme)} {
                    max-width: 994px;
                  }
                `}
              />
            </Row>
          </Col>
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};
