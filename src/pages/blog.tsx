/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import navs from '../nav/blog';
import SEO from 'components/SEO';
import RootLayout from 'layouts/Root';
import BlogLayout from 'layouts/Blog';
import { graphql, useStaticQuery } from 'gatsby';

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
    ReactGA.initialize('UA-191579390-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <RootLayout hasSkipNav={false}>
      <SEO />
      <BlogLayout navs={navs} images={data.allImageSharp.edges} />
    </RootLayout>
  );
};

export default IndexPage;
