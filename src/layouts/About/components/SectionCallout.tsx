/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { XXXL } from '@zendeskgarden/react-typography';

export const StyledSectionHeader = styled.div`
  text-transform: uppercase;
  line-height: ${p => p.theme.lineHeights.sm};
  letter-spacing: 0.5px;
  color: ${p => getColor('neutralHue', 600, p.theme)};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

export const SectionCallout: React.FC<
  {
    section: string;
    description: string;
  } & HTMLAttributes<HTMLDivElement>
> = ({ section, description, children, ...props }) => (
  <div {...props}>
    <StyledSectionHeader
      css={css`
        margin-bottom: ${p => p.theme.space.xs};
        color: ${p => p.theme.palette.white};
      `}
    >
      {section}
    </StyledSectionHeader>
    <XXXL
      tag="p"
      css={css`
        color: ${p => p.theme.palette.white};
      `}
    >
      {description}
    </XXXL>
    {children}
  </div>
);
