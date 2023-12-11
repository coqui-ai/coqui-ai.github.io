/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { mediaQuery } from '@zendeskgarden/react-theming';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { css } from 'styled-components';
import { TryNowButton } from './Buttons';

export const GetStartedCtA = ({}) => {
  const waveImage = useStaticQuery(
    graphql`
      query {
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
        background: left -30% / cover no-repeat url('${waveImage.wave.childImageSharp.fixed.src}'),
          ${p => p.theme.palette.oatMilk};
        display: flex;
        justify-content: center;
        padding: 38px 248px 44px 248px;

        ${p => mediaQuery('down', 'md', p.theme)} {
          background: -80px 300px / 150% no-repeat
              url('${waveImage.wave.childImageSharp.fixed.src}'),
            ${p => p.theme.palette.oatMilk};

          padding: 34px 20px;
        }
      `}
    >
      <div
        css={css`
          border: 1px solid #ed8f1c;
          border-radius: 7px;
          padding: 41px 140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(to right, rgba(247, 229, 203, 0.6), rgb(252, 241, 227, 0.6));

          ${p => mediaQuery('down', 'md', p.theme)} {
            padding: 34px 20px;
          }
        `}
      >
        <h1 css="font-size: 43.2px; line-height: 106.12%; font-weight: 700; text-align: center;">
          Ready to get started?
        </h1>
        <p css="margin-top: 12px; font-size: 18px;">
          Try <span css="font-weight: 700;">XTTS</span> now. Non-commercial usage is free, and
          commercial licensing starts at $365/year.
        </p>
        <TryNowButton css="margin-top: 32px;" />
      </div>
    </div>
  );
};
