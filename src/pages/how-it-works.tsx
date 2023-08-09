/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import GogleAnalyticsCookieConsent from 'components/Cookies';
import SEO from 'components/SEO';
import { graphql } from 'gatsby';
import HowItWorksLayout from 'layouts/HowItWorks';
import RootLayout from 'layouts/Root';
import React from 'react';

const IndexPage: React.FC = () => {
  return (
    <RootLayout hasSkipNav={false} showFooter={false}>
      <SEO />
      <HowItWorksLayout />
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
