/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Paragraph, XXL } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';

export const StyledNameHeader = styled.div`
  text-transform: uppercase;
  line-height: ${p => p.theme.lineHeights.sm};
  letter-spacing: 0.5px;
  color: ${p => getColor('neutralHue', 600, p.theme)};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

export const NameCallout: React.FC<
  {
    section: string;
    paragraph1: string;
    paragraph2: string;
  } & HTMLAttributes<HTMLDivElement>
> = ({ section, paragraph1, paragraph2, children, ...props }) => (
  <div {...props}>
    <StyledNameHeader
      css={css`
        margin-bottom: ${p => p.theme.space.xs};
      `}
    >
      {section}
    </StyledNameHeader>
    <Paragraph>
      <XXL
        tag="span"
        css={css`
          color: ${p => getColor('grey', 700, p.theme)};
        `}
      >
        {paragraph1}
      </XXL>
    </Paragraph>
    <Paragraph>
      <XXL
        tag="span"
        css={css`
          color: ${p => getColor('grey', 700, p.theme)};
        `}
      >
        {paragraph2}
      </XXL>
    </Paragraph>
    {children}
  </div>
);
