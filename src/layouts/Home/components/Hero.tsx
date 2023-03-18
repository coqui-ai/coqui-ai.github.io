import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import React, { FC, useState } from 'react';
import { css } from 'styled-components';
import { PrimaryButton, SecondaryButton, TryNowButton } from './Buttons';
import { StyledButton } from './StyledButtons';
import { ReactComponent as UnmutedSpeakerIcon } from '@zendeskgarden/svg-icons/src/16/volume-unmuted-fill.svg';
import { ReactComponent as MutedSpeakerIcon } from '@zendeskgarden/svg-icons/src/16/volume-muted-fill.svg';
import VideoGameMp4 from '../../../data/videos/use-cases/video-games/video-games.mp4';
import VideoGameWebM from '../../../data/videos/use-cases/video-games/video-games.webm';

export const Hero: FC = () => {
  const [mutedAttribute, setMutedAttribute] = useState({ muted: true });

  const toggleMuted = () => {
    setMutedAttribute(mutedAttribute.muted ? { muted: false } : { muted: true });
  };
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        position: relative;
        background: linear-gradient(207.81deg, #f5faff 54.98%, #fefffe 92.7%);
        padding: 5rem 10rem;
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
              ${p => mediaQuery('down', 'sm', p.theme)} {
                font-size: 40px;
                line-height: 48px;
              }
            `}
          >
            Helping creatives and game developers save{' '}
            <span
              css={css`
                background: linear-gradient(89.27deg, #ed8f1c -1.56%, #468d6a 102.75%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
              `}
            >
              weeks
            </span>
            .
          </h1>
          <p
            css={css`
              font-size: 18px;
              line-height: 32.4px;
            `}
          >
            Say hello to Coqui Studio. The web application that provides realistic, emotive
            text-to-speech thanks to advanced Generative AI technologies.
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
            <PrimaryButton
              text="Start now for free"
              path={`${process.env.GATSBY_BACKEND_URL}/auth/signup`}
            />
            <SecondaryButton text="See what we can do" path="/how-it-works" />
          </div>
        </div>
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
      </div>
    </div>
  );
};
