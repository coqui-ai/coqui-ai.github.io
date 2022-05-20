/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { createGlobalStyle, css } from 'styled-components';
import { SkipNav } from '@zendeskgarden/react-chrome';
import Footer from './components/Footer';
import Header, { headerBoxShadow, headerHeight } from './components/Header';

/**
 * Global styling
 */
import '@zendeskgarden/css-bedrock/dist/index.css';

/**
 * Ensure Gatsby wrapping nodes are full height
 */
const GlobalStyling = createGlobalStyle`
  * {
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  body a { color: #313940; }


  body a:focus, body a:hover{
    color: #313940;
  }
`;

interface IRootLayoutProps {
  hasSkipNav?: boolean;
  isSubscribing: boolean;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children, hasSkipNav, isSubscribing }) => {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <GlobalStyling />
      {hasSkipNav && (
        <SkipNav
          targetId="main-content"
          zIndex={2}
          css={css`
            top: ${p => headerHeight(p.theme) / 2}px;
            box-shadow: ${p => headerBoxShadow(p.theme)};
          `}
        >
          Skip to main content
        </SkipNav>
      )}
      <Header isSubscribing={isSubscribing} />
      <main
        css={`
          flex-grow: 1;
          flex-shrink: 1;
        `}
      >
        {children}
      </main>
      <Footer isSubscribing={isSubscribing} />
    </div>
  );
};

RootLayout.defaultProps = {
  hasSkipNav: true
};

export default RootLayout;
