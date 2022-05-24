/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { headerStyling, textStyling } from './Styles';
import { LG, XXXL } from '@zendeskgarden/react-typography';
import { Well, Title, Paragraph } from '@zendeskgarden/react-notifications';

export const PricesFAQText: React.FC = () => {
  return (
    <Well isFloating>
      <Title
        css={css`
          ${headerStyling}
          margin-bottom: ${p => p.theme.space.lg};
        `}
      >
        <XXXL
          isBold
          css={css`
            ${headerStyling}
            margin-bottom: ${p => p.theme.space.lg};
            text-align: center;
          `}
        >
          Pricing FAQ
        </XXXL>
      </Title>
      <Paragraph>
        <LG
          css={css`
            ${textStyling}
            margin-bottom: ${p => p.theme.space.lg};
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices nisi quis dapibus
          suscipit. Donec consequat, mauris vitae blandit gravida, enim felis volutpat turpis, nec
          pellentesque massa ante non arcu. Maecenas lacus ipsum, faucibus a libero vel, fringilla
          elementum nunc. Vivamus vel volutpat lacus, sed finibus neque.
        </LG>
      </Paragraph>
      <Paragraph>
        <LG
          css={css`
            ${textStyling}
            margin-bottom: ${p => p.theme.space.lg};
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices nisi quis dapibus
          suscipit. Donec consequat, mauris vitae blandit gravida, enim felis volutpat turpis, nec
          pellentesque massa ante non arcu. Maecenas lacus ipsum, faucibus a libero vel, fringilla
          elementum nunc. Vivamus vel volutpat lacus, sed finibus neque.
        </LG>
      </Paragraph>
    </Well>
  );
};
