/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import SEO from 'components/SEO';
import RootLayout from 'layouts/Root';
import HomeLayout from 'layouts/Home';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import GogleAnalyticsCookieConsent from 'components/Cookies';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';

const IndexPage: React.FC = () => {
  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  const location = useLocation();
  const parsedParameters = queryString.parse(location.search);
  const isSubscribing = parsedParameters.subscription === 'true';

  return (
    <RootLayout hasSkipNav={false} isSubscribing={isSubscribing}>
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
