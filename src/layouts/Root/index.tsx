/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { SkipNav } from '@zendeskgarden/react-chrome';
import { useCachedProfile, ProfileContext } from '../../../utils/auth';
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

const RootLayout: React.FC<IRootLayoutProps> = ({ children, hasSkipNav, isSubscribing, showVoiceSearch, grayedBackground }) => {
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

        <MainType>
          {children}
        </MainType>
        <Footer isSubscribing={isSubscribing} />
      </div>
    </ProfileContext.Provider>
  );
};

RootLayout.defaultProps = {
  hasSkipNav: true,
  showVoiceSearch: false,
  grayedBackground: false,
};

export default RootLayout;
