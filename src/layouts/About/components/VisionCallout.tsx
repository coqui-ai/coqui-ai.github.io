/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Anchor } from '@zendeskgarden/react-buttons';
import { getColor } from '@zendeskgarden/react-theming';
import { Paragraph, XXL } from '@zendeskgarden/react-typography';

export const StyledVisionHeader = styled.div`
  text-transform: uppercase;
  line-height: ${p => p.theme.lineHeights.sm};
  letter-spacing: 0.5px;
  color: ${p => getColor('neutralHue', 600, p.theme)};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

export const VisionCallout: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div {...props}>
    <StyledVisionHeader
      css={css`
        margin-bottom: ${p => p.theme.space.xs};
      `}
    >
      Vision
    </StyledVisionHeader>
    <Paragraph>
      <XXL
        tag="span"
        css={css`
          color: ${p => getColor('grey', 700, p.theme)};
        `}
      >
        Coqui is dedicated to open speech technology and to serving as the hub where speech
        researchers, developers, and practitioners congregate.
      </XXL>
    </Paragraph>
    <Paragraph>
      <XXL
        tag="span"
        css={css`
          color: ${p => getColor('grey', 700, p.theme)};
        `}
      >
        Our projects include deep learning based{' '}
        <Anchor href="https://github.com/coqui-ai/STT">STT</Anchor> and{' '}
        <Anchor href="https://github.com/coqui-ai/TTS">TTS</Anchor> engines, a{' '}
        <Anchor href="https://github.com/coqui-ai/snakepit">job scheduler</Anchor> and there is more
        to come.
      </XXL>
    </Paragraph>
    {children}
  </div>
);
