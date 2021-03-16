/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import navs from '../nav/blog';
import SEO from 'components/SEO';
import RootLayout from 'layouts/Root';
import BlogLayout from 'layouts/Blog';
import { graphql, useStaticQuery } from 'gatsby';
import GogleAnalyticsCookieConsent from 'components/Cookies';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';

const IndexPage: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allImageSharp(filter: { fluid: { src: { regex: "/splash-screen/" } } }) {
          edges {
            node {
              id
              fluid(maxWidth: 350, traceSVG: { background: "#F6F4F4", color: "#228F67" }) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    `
  );

  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  return (
    <RootLayout hasSkipNav={false}>
      <SEO />
      <BlogLayout navs={navs} images={data.allImageSharp.edges} />
      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default IndexPage;
