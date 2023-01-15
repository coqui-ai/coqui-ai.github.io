/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor } from '@zendeskgarden/react-theming';
import { LG } from '@zendeskgarden/react-typography';
import React from 'react';
import { css } from 'styled-components';
import { headerStyling } from './Styles';
import { WhyCoquiInset } from './WhyCoquiInset';

export const WhyCoqui = () => {
  return (
    <div
      css={css`
        background-color: ${p => getColor('yellow', 600, p.theme)};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        padding-top: ${p => p.theme.space.xxl};
        padding-bottom: ${p => p.theme.space.xxl};
      `}
    >
      <div
        css={css`
          width: 100%;
          max-width: 1000px;
        `}
      >
        <p
          css={css`
            ${headerStyling}
            text-align: center;
          `}
        >
          Why Coqui?
          <span role="img" aria-label="frog">
            🐸
          </span>
        </p>
        <LG
          css={css`
            margin-top: 4px;
            text-align: center;
          `}
        >
          Discover how Coqui Studio can help you streamline your workflow
        </LG>
        <div
          css={css`
            display: flex;
            justify-content: space-around;
            padding: 0 40px;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 40px;
          `}
        >
          <WhyCoquiInset
            title="Pay for what you use"
            text="Get started with 30 free minutes, top up when you need to."
            to="/pricing"
          />
          <WhyCoquiInset
            title="Instant Voice Cloning"
            text="Clone any voice with 3 seconds of audio and start directing them."
            to="/pricing"
          />
          <WhyCoquiInset
            title="Dubbing"
            text="Take full control of your AI voices. Adjust pitch, loudness and more, for each sentence, word or character."
            to="/pricing"
          />
        </div>
      </div>
    </div>
  );
};
