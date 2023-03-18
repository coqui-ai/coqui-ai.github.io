/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { track } from '@amplitude/analytics-browser';
import GogleAnalyticsCookieConsent from 'components/Cookies';
import SEO from 'components/SEO';
import { graphql } from 'gatsby';
import HomeLayout from 'layouts/Home';
import RootLayout from 'layouts/Root';
import React, { useEffect } from 'react';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';

const IndexPage: React.FC = () => {
  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  useEffect(() => {
    track('landing__index__open');
  }, []);

  return (
    <RootLayout hasSkipNav={false} showFooter={false}>
      <SEO />
      <HomeLayout />
      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default IndexPage;

/**
 * Global GraphQL Fragments
 */
export const SidebarPageFragment = graphql`
  fragment SidebarPageFragment on Query {
    mdx(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      id
      excerpt
      body
      tableOfContents(maxDepth: 3)
    }
  }
`;
