/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { css } from 'styled-components';
import { headerStyling, textStyling } from './Styles';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { XXL, XL } from '@zendeskgarden/react-typography';

export const SectionCallout: React.FC<
  {
    section: string;
    header: string;
    description: string;
  } & HTMLAttributes<HTMLDivElement>
> = ({ header, description, children, ...props }) => (
  <div {...props}>
    <XXL
      isBold
      tag="h2"
      css={css`
        ${headerStyling}
        margin-bottom: ${p => p.theme.space.xs};

        ${p => mediaQuery('down', 'sm', p.theme)} {
          text-align: center;
        }
      `}
    >
      {header}
    </XXL>
    <XL
      tag="p"
      css={css`
        ${textStyling}

        ${p => mediaQuery('down', 'sm', p.theme)} {
          margin-right: auto;
          margin-left: auto;
          width: 80%;
        }
      `}
    >
      {description}
    </XL>
    {children}
  </div>
);
