/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { graphql } from 'gatsby';
import SEO from 'components/SEO';
import RootLayout from 'layouts/Root';
import HomeLayout from 'layouts/Home';

const IndexPage: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize('UA-191579390-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <RootLayout hasSkipNav={false}>
      <SEO />
      <HomeLayout />
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
