/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import Img from 'gatsby-image';
import { css } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { mediaQuery } from '@zendeskgarden/react-theming';

export const WaitingListCtAImage: React.FC = () => {
  const bannerImages = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "images/home/home-hero-advanced-editor.png" }) {
          childImageSharp {
            fluid(maxWidth: 2976) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }

        desktopImage: file(
          relativePath: { eq: "images/home/home-hero-audio-manager-opened-advanced-editor.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 5760) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  );

  const bannerImageSources = [
    bannerImages.mobileImage.childImageSharp.fluid,
    {
      ...bannerImages.desktopImage.childImageSharp.fluid,
      media: `(min-width: 825px)`
    }
  ];

  return (
    <Img
      fluid={bannerImageSources}
      css={css`
        margin: ${p => p.theme.space.base * 10}px auto ${p => p.theme.space.base * 10}px auto;

        ${p => mediaQuery('up', 'md', p.theme)} {
          border-radius: 20px;
          max-width: 5760px;
        }

        ${p => mediaQuery('down', 'md', p.theme)} {
          border: 1px solid #012b30;
          border-radius: 10px;
          max-width: 2976px;
        }
        width: 100%;
      `}
    />
  );
};
