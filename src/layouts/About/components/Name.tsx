/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import MaxWidthLayout from 'layouts/MaxWidth';
import { NameCallout } from './NameCallout';
import { mediaQuery, PALETTE } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as CoquiIcon } from '../../../data/images/general/coqui.svg';

export const Name: React.FC = () => {
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
              <NameCallout
                section="Our Name"
                paragraph1='We often have people ask us what&apos;s the story behind our company name and how to pronounce it. Coqui comes from the Spanish "coquí", and it&apos;s pronounced like "ko-kee". The coquí is a species of tree frog native to Puerto Rico, and is considered an unofficial symbol of the island. The coquí is also found in other tropical locations such as Florida, Hawaii, Colombia, the Dominican Republic, and the Virgin Islands.'
                paragraph2="We drew inspiration from the coquí because the frog is well-known for being small but having a loud, clear voice. These characteristics make the coquí nearly invisible, but easy to hear — just like the technology we are working on."
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
