/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';

export const MobileSidebar: React.FC = () => {
  return (
    <nav
      aria-label="Primary"
      css={css`
        position: fixed;
        top: ${p => p.theme.space.base * 20}px;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: ${p => p.theme.palette.white};
        padding: ${p => p.theme.space.lg} ${p => p.theme.space.xxl};
        overflow: scroll;

        ${p => mediaQuery('down', 'sm', p.theme)} {
          top: ${p => p.theme.space.base * 15}px;
        }

        ${p => mediaQuery('up', 'lg', p.theme)} {
          display: none;
        }
      `}
    >
      &nbsp;
    </nav>
  );
};
