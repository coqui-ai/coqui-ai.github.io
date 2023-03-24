import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import React, { FC, useState } from 'react';
import { css } from 'styled-components';
import { PrimaryButton, SecondaryButton, TryNowButton } from './Buttons';
import { StyledButton } from './StyledButtons';
import { ReactComponent as UnmutedSpeakerIcon } from '@zendeskgarden/svg-icons/src/16/volume-unmuted-fill.svg';
import { ReactComponent as MutedSpeakerIcon } from '@zendeskgarden/svg-icons/src/16/volume-muted-fill.svg';
import VideoGameMp4 from '../../../data/videos/use-cases/video-games/video-games.mp4';
import VideoGameWebM from '../../../data/videos/use-cases/video-games/video-games.webm';
import { MAX_WIDTH } from 'data/constants/constants';

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
          max-width: ${MAX_WIDTH};
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 20px;
            ${p => mediaQuery('up', 'lg', p.theme)} {
              flex: 1;
            }
          `}
        >
          <h1
            css={css`
              font-size: 75px;
              line-height: 88px;
              ${p => mediaQuery('down', 'xl', p.theme)} {
                font-size: 40px;
                line-height: 48px;
              }
              ${p => mediaQuery('up', 'xl', p.theme)} {
                font-size: 50px;
                line-height: 50px;
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
                position: relative;
                overflow: hidden;
                width: 100%;
                padding-top: 56.25%;
              `}
            >
              {/* <div
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
              eslint-disable-next-line jsx-a11y/media-has-caption
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
              </video> */}
              <iframe
                css={css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  right: 0;
                  width: 100%;
                  height: 100%;
                `}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dayEzxEccTY?loop=1"
                title="Coqui youtube entry video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
