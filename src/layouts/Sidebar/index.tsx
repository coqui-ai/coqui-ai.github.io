/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import MaxWidthLayout from 'layouts/MaxWidth';
import { MobileSidebar } from './components/MobileSidebar';
import { DesktopSidebar } from './components/DesktopSidebar';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledMobileNavButton = styled.button`
  display: none;
  position: fixed;
  right: ${p => p.theme.space.md};
  bottom: ${p => p.theme.space.md};
  align-items: center;
  justify-content: center;
  z-index: 1;
  border: ${p => p.theme.borders.sm} ${p => rgba(p.theme.palette.white as string, 0.2)};
  border-radius: 100px;
  background-color: ${p => getColor('kale', 800, p.theme)};
  padding: ${p => p.theme.space.xs};
  color: ${p => p.theme.colors.background};

  &:focus {
    outline: none;
  }

  & > svg {
    width: ${p => p.theme.iconSizes.lg};
    height: ${p => p.theme.iconSizes.lg};
  }

  ${p => mediaQuery('down', 'md', p.theme)} {
    display: flex;
  }
`;

export const SidebarLayout: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMobileSidebarExpanded, setIsMobileSidebarExpanded] = useState(false);

  return (
    <div
      css={`
        position: relative;
      `}
    >
      <MaxWidthLayout>
        <div
          css={css`
            display: flex;
            /* IE11 requires a specific min-height to fill height */
            min-height: calc(100vh - 204px);
          `}
        >
          <DesktopSidebar />
          <div
            css={css`
              flex-grow: 1;
              background-color: ${p => p.theme.colors.background};
              padding: ${p => p.theme.space.lg} ${p => p.theme.space.md};
              max-width: 100vw;

              ${p => mediaQuery('down', 'md', p.theme)} {
                padding: ${p => p.theme.space.lg} ${p => p.theme.space.sm};
              }
            `}
          >
            <div
              css={css`
                margin-right: auto;
                margin-left: auto;
                max-width: ${p => p.theme.breakpoints.lg};
              `}
              // DocSearch main content ID
              id="main-content"
            >
              {children}
            </div>
          </div>
          {isMobileSidebarExpanded && <MobileSidebar />}
        </div>
      </MaxWidthLayout>
    </div>
  );
};
