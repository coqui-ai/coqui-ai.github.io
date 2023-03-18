/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { init } from '@amplitude/analytics-browser';
import * as Sentry from '@sentry/browser';
import { SkipNav } from '@zendeskgarden/react-chrome';
import React, { ReactNode } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import Footer from './components/Footer';
import Header, { headerBoxShadow, headerHeight } from './components/Header';

(function _configureEnvForSentry() {
  if (typeof window === 'undefined') return;
  if (!process.env.GATSBY_SOURCE_VERSION) return;

  window.configureEnv = ({ environment }) => {
    Sentry.init({
      enabled: true,
      release: process.env.GATSBY_SOURCE_VERSION,
      dsn: 'https://3c21c89714b94f3e829c94aa54df95a2@o1314061.ingest.sentry.io/4504553731325952',
      environment
    });
  };

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '/configureEnv.js';

  document.head.appendChild(script);
})();

(function _configureAmplitude() {
  if (!process.env.GATSBY_AMPLITUDE_PROJECT_KEY) return;
  init(process.env.GATSBY_AMPLITUDE_PROJECT_KEY);
})();

/**
 * Global styling
 */
import '@zendeskgarden/css-bedrock/dist/index.css';

/**
 * Ensure Gatsby wrapping nodes are full height
 */
const GlobalStyling = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');
    @font-face {
      font-family: 'SF Pro Display';
      src: url('SFProDisplay-Regular.woff2') format('woff2'),
          url('SFProDisplay-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
  * {
    -ms-overflow-style: -ms-autohiding-scrollbar;
    font-family: 'SF Pro Display', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body a { color: #313940; }

  body a:focus, body a:hover {
    color: #313940;
  }
`;

const Main = styled.main`
  flex-grow: 1;
  flex-shrink: 1;
`;

const GrayedMain = styled(Main)`
  background-color: #e9ebed;
`;

const RootLayout = ({
  children,
  hasSkipNav,
  showVoiceSearch,
  showFooter = true,
  grayedBackground
}: {
  children: ReactNode;
  hasSkipNav: boolean;
  showVoiceSearch: boolean;
  showFooter: boolean;
  grayedBackground: boolean;
}) => {
  const MainType = grayedBackground ? GrayedMain : Main;

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
      <Header showVoiceSearch={showVoiceSearch} />

      <MainType>{children}</MainType>
      {showFooter && <Footer />}
    </div>
  );
};

RootLayout.defaultProps = {
  hasSkipNav: true,
  showVoiceSearch: false,
  grayedBackground: false
};

export default RootLayout;
