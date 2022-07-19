/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import * as Sentry from '@sentry/browser';
import styled, { createGlobalStyle, css } from 'styled-components';
import { SkipNav } from '@zendeskgarden/react-chrome';
import { useCachedProfile, ProfileContext } from 'utils/auth';
import Footer from './components/Footer';
import Header, { headerBoxShadow, headerHeight } from './components/Header';

(function _configureEnvForSentry() {
  if (typeof window === 'undefined') return;
  if (!process.env.GATSBY_SOURCE_VERSION) return;

  window.configureEnv = ({ environment }) => {
    Sentry.init({
      enabled: true,
      release: process.env.GATSBY_SOURCE_VERSION,
      dsn: 'https://2d4b56fdd9f447ccae309eb3d7dcad42@o1314061.ingest.sentry.io/6564921',
      environment
    });
  };

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '/configureEnv.js';

  document.head.appendChild(script);
})();

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

interface IRootLayoutProps {
  hasSkipNav?: boolean;
  showVoiceSearch?: boolean;
  grayedBackground?: boolean;
  isSubscribing: boolean;
}

const RootLayout: React.FC<IRootLayoutProps> = ({
  children,
  hasSkipNav,
  isSubscribing,
  showVoiceSearch,
  grayedBackground
}) => {
  const MainType = grayedBackground ? GrayedMain : Main;
  const profile = useCachedProfile();

  return (
    <ProfileContext.Provider value={profile}>
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
        <Header isSubscribing={isSubscribing} showVoiceSearch={showVoiceSearch} />

        <MainType>{children}</MainType>
        <Footer isSubscribing={isSubscribing} />
      </div>
    </ProfileContext.Provider>
  );
};

RootLayout.defaultProps = {
  hasSkipNav: true,
  showVoiceSearch: false,
  grayedBackground: false
};

export default RootLayout;
