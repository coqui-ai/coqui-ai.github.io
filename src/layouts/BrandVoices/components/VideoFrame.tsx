/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { css } from 'styled-components';
import { StyledButton } from './StyledButtons';
import { getColor } from '@zendeskgarden/react-theming';
import BrandVoicesMp4 from '../../../data/videos/use-cases/brand-voices/brand-voices.mp4';
import BrandVoicesWebM from '../../../data/videos/use-cases/brand-voices/brand-voices.webm';
import { ReactComponent as SpeakerIcon } from '@zendeskgarden/svg-icons/src/16/volume-unmuted-stroke.svg';

export const VideoFrame: React.FC = () => {
  const [mutedAttribute, setMutedAttribute] = useState({ muted: true });

  const toggleMuted = () => {
    setMutedAttribute(mutedAttribute.muted ? { muted: false } : { muted: true });
  };

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <div
        css={css`
          display: inline-block;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        `}
      >
        <div
          css={css`
            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
          `}
        >
          <StyledButton
            onClick={() => toggleMuted()}
            css={css`
              border-width: 0;
              background-color: ${p => getColor('yellow', 600, p.theme)};
              color: #fff;
            `}
          >
            <SpeakerIcon
              size={1.5}
              css={css`
                margin-right: ${p => p.theme.space.xs};
              `}
            />
            {mutedAttribute.muted ? 'Play with sound' : 'Play w/out sound'}
          </StyledButton>
        </div>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          autoPlay
          loop
          {...mutedAttribute}
          playsInline
          css={css`
            max-width: 100%;
            height: auto;
          `}
        >
          <source src={BrandVoicesMp4} type="video/mp4" />
          <source src={BrandVoicesWebM} type="video/webm" />
        </video>
      </div>
    </div>
  );
};
