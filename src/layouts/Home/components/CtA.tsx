/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { mediaQuery } from '@zendeskgarden/react-theming';
import { LG } from '@zendeskgarden/react-typography';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { css } from 'styled-components';
import { TryNowButton } from './Buttons';
import { headerStyling } from './Styles';
import { Users } from './Users';

const ScrollDownArrowIcon = () => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ minWidth: '12px', minHeight: '12px', maxWidth: '12px', maxHeight: '12px' }}
    >
      <circle cx="6" cy="6.1001" r="6" fill="#5EAE91" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.21999 7.7765L7.62523 6.37126C7.7103 6.28619 7.85112 6.28619 7.93619 6.37126C8.02127 6.45634 8.02127 6.59715 7.93619 6.68223L6.15548 8.46294C6.11148 8.50694 6.05574 8.52748 6 8.52748C5.94426 8.52748 5.88852 8.50694 5.84452 8.46294L4.06381 6.68223C3.97873 6.59715 3.97873 6.45634 4.06381 6.37126C4.14888 6.28619 4.2897 6.28619 4.37477 6.37126L5.77995 7.77644V3.32012C5.77995 3.19984 5.87969 3.1001 5.99997 3.1001C6.12025 3.1001 6.21999 3.19984 6.21999 3.32012V7.7765Z"
        fill="white"
      />
    </svg>
  );
};

export const CtA: React.FC = () => {
  const homeImages = useStaticQuery(
    graphql`
      query {
        frog: file(relativePath: { eq: "images/home/cta.png" }) {
          childImageSharp {
            fluid(maxWidth: 416) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        wave: file(relativePath: { eq: "images/home/background-wave.png" }) {
          childImageSharp {
            fixed(width: 1339) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  );

  return (
    <div
      css={css`
        background: left 20% / contain no-repeat url('${homeImages.wave.childImageSharp.fixed.src}'),
          ${p => p.theme.palette.oatMilk};
        display: flex;
        justify-content: center;
        max-height: 880px;
        position: relative;

        ${p => mediaQuery('down', 'md', p.theme)} {
          background: -80px 300px / 150% no-repeat
              url('${homeImages.wave.childImageSharp.fixed.src}'),
            ${p => p.theme.palette.oatMilk};
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <Img
          fluid={homeImages.frog.childImageSharp.fluid}
          alt=""
          css={css`
            width: 100%;
            max-width: 416px;
            border-radius: 0 0 215.42px 215.42px;

            ${p => mediaQuery('down', 'sm', p.theme)} {
              width: 90%;
            }
          `}
        />
        <h1
          css={css`
            ${headerStyling}

            margin-top: 40px;
            max-width: 300px;
            text-align: center;
          `}
        >
          AI Voices you can direct
        </h1>
        <LG
          tag="p"
          css={css`
            margin-bottom: ${p => p.theme.space.md};
            max-width: 490px;
            margin-top: 28px;
            text-align: center;
          `}
        >
          Direct emotive, generative AI voices for video games, post-production, dubbing and much
          more…
        </LG>
        <TryNowButton css="margin-top: 20px; overflow: visible;" />
        <div css="margin-top: 70px; margin-bottom: 125px; display: flex; gap: 4px; align-items: center; font-size: 12px;">
          Scroll down for more <ScrollDownArrowIcon />
        </div>
        <div
          css={`
            position: absolute;
            bottom: -60px;
            height: 120px;
            min-width: 65%;
            max-width: 80%;
            background: #d8ccbb;
            border: 1.5px solid #fff;
            border-radius: 7px;
          `}
        >
          <Users />
        </div>
      </div>
    </div>
  );
};
