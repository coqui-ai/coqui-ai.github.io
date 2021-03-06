/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';

export const DesktopSidebar: React.FC = () => {
  return (
    <nav
      aria-label="Primary"
      css={css`
        background-color: ${p => p.theme.palette.white};
        padding: ${p => p.theme.space.lg} ${p => p.theme.space.md} ${p => p.theme.space.lg} 0;
        min-width: 220px;

        @media (max-width: 1440px) {
          padding: ${p => p.theme.space.lg} ${p => p.theme.space.md};
        }

        ${p => mediaQuery('down', 'md', p.theme)} {
          display: none;
        }
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 50%;
          bottom: 0;
          left: 0;
          z-index: -1;
          background-color: ${p => p.theme.palette.white};

          ${p => mediaQuery('down', 'md', p.theme)} {
            display: none;
          }
        `}
      />
    </nav>
  );
};
