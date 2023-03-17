import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import React, { FC, useState } from 'react';
import { css } from 'styled-components';
import { TryNowButton, SecondaryButton } from '../Buttons';
import { ReactComponent as UnmutedSpeakerIcon } from '@zendeskgarden/svg-icons/src/16/volume-unmuted-fill.svg';
import { ReactComponent as MutedSpeakerIcon } from '@zendeskgarden/svg-icons/src/16/volume-muted-fill.svg';
import VideoGameMp4 from '../../../../data/videos/use-cases/video-games/video-games.mp4';
import VideoGameWebM from '../../../../data/videos/use-cases/video-games/video-games.webm';
import {
  SyntheticVoicesButtonContainer,
  SyntheticVoicesContainer,
  SyntheticVoicesDetailsContainer,
  SyntheticVoicesDetailsDescription,
  SyntheticVoicesDetailsTitle,
  SyntheticVoicesDetailsTitleDescription,
  SyntheticVoicesVideoContainer
} from './styled';
import { StyledButton } from '../StyledButtons';

export const SyntheticVoices: FC = () => {
  const [mutedAttribute, setMutedAttribute] = useState({ muted: true });

  const toggleMuted = () => {
    setMutedAttribute(mutedAttribute.muted ? { muted: false } : { muted: true });
  };

  return (
    <SyntheticVoicesContainer id="synthetic-voices">
      <SyntheticVoicesDetailsContainer>
        <SyntheticVoicesDetailsTitle>SYNTHETIC VOICES</SyntheticVoicesDetailsTitle>
        <SyntheticVoicesDetailsTitleDescription>
          <span>Hybrid</span> human and AI voices.
        </SyntheticVoicesDetailsTitleDescription>
        <SyntheticVoicesDetailsDescription>
          Our solution combines the benefits of real voice with the ease of AI voice. Your content
          retains engagement, increases interest and keeps the human touch, without the requirement
          for lengthy recording sessions.
        </SyntheticVoicesDetailsDescription>
        <SyntheticVoicesButtonContainer>
          <TryNowButton />
          <SecondaryButton text="Got a question?" path="#faq" />
        </SyntheticVoicesButtonContainer>
      </SyntheticVoicesDetailsContainer>
      <SyntheticVoicesVideoContainer>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
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
                display: inline-block;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
              `}
            >
              <div
                css={css`
                  position: absolute;
                  bottom: 0;
                  right: 0;
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
                  {!mutedAttribute.muted && <UnmutedSpeakerIcon size={1.5} />}
                  {mutedAttribute.muted && <MutedSpeakerIcon size={1.5} />}
                </StyledButton>
              </div>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                autoPlay
                loop
                {...mutedAttribute}
                playsInline
                css={css`
                  max-width: 640px;
                  height: auto;
                  border-radius: 20px;
                  object-fit: cover;
                  ${p => mediaQuery('down', 'sm', p.theme)} {
                    height: 200px;
                    width: 100%;
                  }
                `}
              >
                <source src={VideoGameMp4} type="video/mp4" />
                <source src={VideoGameWebM} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </SyntheticVoicesVideoContainer>
    </SyntheticVoicesContainer>
  );
};
