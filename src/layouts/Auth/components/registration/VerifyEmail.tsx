/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Paragraph } from '@zendeskgarden/react-typography';
import { CenterWell } from 'layouts/Root/components/Styled';
import { SmsTracking } from 'iconsax-react';
import { css } from 'styled-components';

export const VerifyEmail: React.FC = () => (
  <CenterWell title="Complete your profile!">
    <SmsTracking
      size="80"
      color="#FF8A65"
      variant="Outline"
      css={css`
        display: block;
        margin: 69px auto 30px auto;
      `}
    />
    <Paragraph>
      Please check your email
      <br /> address to verify your account
      <br /> and complete your sign up
    </Paragraph>
  </CenterWell>
);
