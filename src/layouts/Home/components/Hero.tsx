/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { mediaQuery } from '@zendeskgarden/react-theming';
import React from 'react';
import { Link } from 'gatsby';
import { css } from 'styled-components';
import ClientSide from 'utils/ClientSide';
import { PrimaryButton, SecondaryButton } from './Buttons';
import { VideoFrame } from './VideoFrame';

export const Hero = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        position: relative;
        padding: 5rem 10rem;
        ${p => mediaQuery('down', 'md', p.theme)} {
          padding: 5rem 4rem;
        }
        ${p => mediaQuery('down', 'sm', p.theme)} {
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap-reverse;
          justify-content: space-between;
          align-items: center;
          gap: 5rem;
          max-width: 1920px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            flex: 1;
            gap: 20px;
          `}
        >
          <h1
            css={css`
              font-size: 80px;
              font-weight: 600px;
              line-height: 88px;
              @media (max-width: 1091px) {
                font-size: 60px;
                line-height: 68px;
              }
              ${p => mediaQuery('down', 'sm', p.theme)} {
                font-size: 40px;
                line-height: 48px;
              }
              ${p => mediaQuery('down', 'xs', p.theme)} {
                font-size: 20px;
                line-height: 28px;
              }
              display: flex;
              flex-direction: column;
            `}
          >
            <span>Coqui&nbsp;is</span>
            <span
              css={css`
                background: linear-gradient(89.27deg, #ed8f1c -1.56%, #468d6a 102.75%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
              `}
            >
              shutting&nbsp;down.
            </span>
          </h1>
          <p
            css={css`
              font-size: 18px;
              ${p => mediaQuery('down', 'sm', p.theme)} {
                font-size: 14px;
              }
            `}
          >
            Thank you for all your support!{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </p>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              max-width: 925px;
              gap: 20px;
              padding-top: 20px;
              ${p => mediaQuery('down', 'xs', p.theme)} {
                flex-wrap: wrap;
                justify-content: center;
              }
            `}
          />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
            min-width: 350px;
          `}
        >
          <div
            css={css`
              width: 100%;
              height: 100%;
              ${p => mediaQuery('down', 'md', p.theme)} {
                width: 90%;
              }
              ${p => mediaQuery('down', 'sm', p.theme)} {
                width: 80%;
              }
            `}
          >
            <div
              css={css`
                position: relative;
                overflow: hidden;
                padding-top: 56.25%;
              `}
            >
              <VideoFrame />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
