/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { Paragraph, XXL } from '@zendeskgarden/react-typography';

export const StyledTTSHeader = styled.div`
  text-transform: uppercase;
  line-height: ${p => p.theme.lineHeights.sm};
  letter-spacing: 0.5px;
  color: ${p => getColor('neutralHue', 600, p.theme)};
  font-size: ${p => p.theme.fontSizes.xxl};
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

export const TTSCallout: React.FC<
  {
    section: string;
    paragraph1: string;
    paragraph2: string;
  } & HTMLAttributes<HTMLDivElement>
> = ({ section, paragraph1, paragraph2, children, ...props }) => (
  <div {...props}>
    <StyledTTSHeader
      css={css`
        margin-bottom: ${p => p.theme.space.xs};
      `}
    >
      {section}
    </StyledTTSHeader>
    <XXL
      tag="p"
      css={css`
        color: ${p => getColor('grey', 700, p.theme)};
      `}
    >
      <Paragraph>{paragraph1}</Paragraph>
      <Paragraph>{paragraph2}</Paragraph>
    </XXL>
    {children}
  </div>
);
