import { mediaQuery } from '@zendeskgarden/react-theming';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { css } from 'styled-components';

const User: React.FC<{
  user: string;
  images: any;
  minWidth?: string;
  maxWidth?: string;
}> = ({ user, images }) => {
  const image = images.find((edge: any) => edge.node.fluid.src.includes(user));

  return (
    <Img
      fluid={image.node.fluid}
      alt="{user}"
      css={css`
        display: block;
        margin-right: auto;
        margin-left: auto;
        width: 100px;
        min-width: 50px;
        height: auto;
        ${p => mediaQuery('down', 'md', p.theme)} {
          width: 60px;
        }
        img {
          height: auto !important;
        }
      `}
    />
  );
};

export const CitedBy = () => {
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
        padding-bottom: 3rem;
        align-items: center;
      `}
    >
      <div
        css={css`
          flex-direction: column;
          justify-content: center;
          align-items: center;
          ${p => mediaQuery('down', 'lg', p.theme)} {
            display: flex;
          }
          ${p => mediaQuery('up', 'lg', p.theme)} {
            display: none;
          }
        `}
      >
        <p
          css={css`
            font-size: 22px;
            color: #468d6a ${p => mediaQuery('down', 'sm', p.theme)} {
              font-size: 16px;
            }
            color: #468d6a;
            min-width: fit-content;
          `}
        >
          Code is used by
        </p>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            gap: 2rem;
            padding: 0 30px;
            padding: 2rem 1rem;
            width: 100%;
          `}
        >
          <User user="google" images={data.allImageSharp.edges} />
          <User user="facebook" images={data.allImageSharp.edges} />
          <User user="spotify" images={data.allImageSharp.edges} />
          <User user="t2" images={data.allImageSharp.edges} />
          <User user="microsoft" images={data.allImageSharp.edges} />
          <User user="apple" images={data.allImageSharp.edges} />
        </div>
      </div>
      <div
        css={css`
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          gap: 5rem;
          padding: 0 30px;
          padding: 5rem 10rem 5rem 10rem;
          ${p => mediaQuery('down', 'lg', p.theme)} {
            display: none;
          }
          ${p => mediaQuery('down', 'xl', p.theme)} {
            gap: 3rem;
          }
          max-width: 90%;
          ${p => mediaQuery('up', 'lg', p.theme)} {
            display: flex;
          }
        `}
      >
        <p
          css={css`
            font-size: 22px;
            color: #468d6a ${p => mediaQuery('down', 'sm', p.theme)} {
              font-size: 16px;
            }
            color: #468d6a;
            min-width: fit-content;
          `}
        >
          Code is used by
        </p>
        <User user="google" images={data.allImageSharp.edges} />
        <User user="facebook" images={data.allImageSharp.edges} />
        <User user="spotify" images={data.allImageSharp.edges} />
        <User user="t2" images={data.allImageSharp.edges} />
        <User user="microsoft" images={data.allImageSharp.edges} />
        <User user="apple" images={data.allImageSharp.edges} />
      </div>
      {/* <div
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
      </div> */}
    </div>
  );
};
