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
import { Modal, Body, Close } from '@zendeskgarden/react-modals';
import BrandVoicesMp4 from '../../../data/videos/use-cases/brand-voices/brand-voices.mp4';
import BrandVoicesWebM from '../../../data/videos/use-cases/brand-voices/brand-voices.webm';
import { ReactComponent as SpeakerIcon } from '@zendeskgarden/svg-icons/src/16/volume-unmuted-stroke.svg';

export const VideoFrame: React.FC = () => {
  const [visible, setVisible] = useState(false);

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
            onClick={() => setVisible(true)}
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
            Play with sound
          </StyledButton>
          {visible && (
            <Modal
              isLarge
              onClose={() => setVisible(false)}
              css={css`
                background-color: #0001;
                width: 90%;
                height: 90%;
              `}
            >
              <Body>
                <iframe
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                  allow="autoplay"
                  src="https://streaming.n-tv.de/proxy/abr/2022/04/DVP_RTL_synthetische_Stimmen_-_lange_Ver_220413150742.ism/.mp4?filter=(trackName==%22video-web6%22||trackName==%22audio-web6%22)"
                  title="Brand Voices"
                />
              </Body>
              <Close aria-label="Close" />
            </Modal>
          )}
        </div>
        <video autoPlay loop muted playsInline>
          <source src={BrandVoicesMp4} type="video/mp4" />
          <source src={BrandVoicesWebM} type="video/webm" />
        </video>
      </div>
    </div>
  );
};
