/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { mediaQuery } from '@zendeskgarden/react-theming';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { css } from 'styled-components';

const User: React.FC<{
  user: string;
  images: any;
}> = ({ user, images }) => {
  const image = images.find(edge => edge.node.fluid.src.includes(user));

  return (
    <Img
      fluid={image.node.fluid}
      alt="{user}"
      css={css`
        display: block;
        margin-right: auto;
        margin-left: auto;
        width: 100px;

        ${p => mediaQuery('down', 'md', p.theme)} {
          width: 60px;
        }
      `}
    />
  );
};

export const Users = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allImageSharp(filter: { fluid: { src: { regex: "/users-*/" } } }) {
          edges {
            node {
              id
              fluid(maxWidth: 300, duotone: { shadow: "#6f6f6f", highlight: "#888176" }) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    `
  );

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 0 30px;
        height: 100%;
      `}
    >
      <h1
        css={css`
          font-size: 21px;
          line-height: 25px;
          font-weight: 700;

          ${p => mediaQuery('down', 'sm', p.theme)} {
            font-size: 16px;
          }
        `}
      >
        Coqui&apos;s <span css="color: #468D6A;">code</span> used by
      </h1>
      <div
        css={css`
          display: grid;
          grid-template-areas: 'a a a b b b';
          gap: 50px;

          ${p => mediaQuery('down', 'sm', p.theme)} {
            grid-template-areas:
              'a a a'
              'b b b';
            row-gap: 15px;
            column-gap: 30px;
          }
        `}
      >
        <User user="spotify" images={data.allImageSharp.edges} />
        <User user="t2" images={data.allImageSharp.edges} />
        <User user="microsoft" images={data.allImageSharp.edges} />
        <User user="google" images={data.allImageSharp.edges} />
        <User user="apple" images={data.allImageSharp.edges} />
        <User user="facebook" images={data.allImageSharp.edges} />
      </div>
    </div>
  );
};
