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
        background: linear-gradient(207.81deg, #f5faff 54.98%, #fefffe 92.7%);
        padding: 5rem 10rem;
        height: calc(100vh - 77px);
        ${p => mediaQuery('down', 'md', p.theme)} {
          padding: 5rem 4rem;
        }
        ${p => mediaQuery('down', 'sm', p.theme)} {
          height: calc(100vh - 60px);
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
              display: flex;
              flex-direction: column;
            `}
          >
            <span>A new&nbsp;way to&nbsp;do voice&nbsp;overs.</span>
            <span
              css={css`
                background: linear-gradient(89.27deg, #ed8f1c -1.56%, #468d6a 102.75%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
              `}
            >
              A better way.
            </span>
          </h1>
          <p
            css={css`
              font-size: 18px;
              line-height: 9px;
            `}
          >
            <Link to="blog/tts/open_xtts">XTTS</Link>: local, on-premise, realistic, emotive{' '}
            <span css="white-space: nowrap;">text-to-speech</span> through generative AI.
          </p>
          <p
            css={css`
              font-size: 18px;
              line-height: 9px;
            `}
          >
            Interested in a commercial license? Read the <Link to="faq">FAQ</Link>.
          </p>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              gap: 16px;
              align-items: center;
              padding-top: 20px;
            `}
          >
            <ClientSide>
              <PrimaryButton
                text="Try now for free"
                path="https://huggingface.co/spaces/coqui/xtts"
              />
            </ClientSide>
            <SecondaryButton text="Purchase a commercial license" path="https://t.co/F2OsCp00iI" />
            <SecondaryButton
              text="Install locally"
              path="https://tts.readthedocs.io/en/latest/installation.html"
            />
          </div>
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
            `}
          >
            <div
              css={css`
                position: relative;
                overflow: hidden;
                width: 100%;
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
