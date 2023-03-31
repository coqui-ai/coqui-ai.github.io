/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor } from '@zendeskgarden/react-theming';
import { ReactComponent as MutedIcon } from '@zendeskgarden/svg-icons/src/16/volume-muted-stroke.svg';
import { ReactComponent as SpeakerIcon } from '@zendeskgarden/svg-icons/src/16/volume-unmuted-stroke.svg';
import React, { ReactNode, useState } from 'react';
import { css } from 'styled-components';
import CoquiExplainerMp4 from '../../../data/videos/homepage/coqui_explainer.mp4';
import CoquiExplainerWebM from '../../../data/videos/homepage/coqui_explainer.webm';
import { StyledButton } from './StyledButtons';

const VolumeIcon = ({ muted, children, ...rest }: { muted: boolean; children: ReactNode }) => {
  if (muted) {
    return <SpeakerIcon {...rest}>{children}</SpeakerIcon>;
  }
  return <MutedIcon {...rest}>{children}</MutedIcon>;
};

export const VideoFrame = () => {
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
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
        `}
      >
        <div
          muted={mutedAttribute.muted}
          css={css`
            position: absolute;
            top: 10%;
            left: ${p => (p.muted ? '100px' : '45px')};
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
            <VolumeIcon
              muted={mutedAttribute.muted}
              size={1.5}
              css={css`
                margin-right: ${p => (p.muted ? p.theme.space.xs : '0')};
              `}
            />
            {mutedAttribute.muted && 'Play with sound'}
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
            border-radius: 10px;
          `}
        >
          <source src={CoquiExplainerMp4} type="video/mp4" />
          <source src={CoquiExplainerWebM} type="video/webm" />
        </video>
      </div>
    </div>
  );
};
