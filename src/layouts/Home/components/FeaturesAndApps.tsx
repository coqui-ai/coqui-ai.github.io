import { Button } from '@zendeskgarden/react-buttons';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { SummaryCard } from 'components/cards/SummaryCard';
import React, { FC } from 'react';
import { css } from 'styled-components';
import { StyledNavigationLink } from './StyledNavigationLink';
import voiceoverImage from '../assets/voiceover_img.png';
import audioImage from '../assets/audio_img.png';
import gamingImage from '../assets/gaming_img.png';
import podcastImage from '../assets/podcast_img.png';

export const FeaturesAndApps: FC = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 10rem;
        ${p => mediaQuery('down', 'sm', p.theme)} {
          padding: 2rem 1rem 1rem;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
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
          <p
            css={css`
              font-family: 'Manrope', sans-serif;
              color: #468d6a;
              font-size: 16px;
              ${p => mediaQuery('down', 'sm', p.theme)} {
                text-align: center;
              }
            `}
          >
            FEATURES AND APPLICATIONS
          </p>
          <h2
            css={css`
              font-size: 48px;
              line-height: 67.2px;
              ${p => mediaQuery('down', 'sm', p.theme)} {
                font-size: 48px;
                line-height: 67.2px;
                text-align: center;
              }
            `}
          >
            Coqui Studio will{' '}
            <span
              css={css`
                background: linear-gradient(89.27deg, #ed8f1c -1.56%, #468d6a 102.75%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
              `}
            >
              transform
            </span>{' '}
            the way you work, entertain and communicate.
          </h2>
          <p
            css={css`
              font-size: 16px;
              color: #000;
              font-weight: 400;
              line-height: 32.4px;
            `}
          >
            Coqui Studio is suitable for beginners or audio professionals and can quickly deliver
            high-quality voiceovers for just about anything.
          </p>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              gap: 16px;
              align-items: center;
              padding-top: 20px;
              ${p => mediaQuery('down', 'sm', p.theme)} {
                justify-content: center;
                width: 100%;
              }
            `}
          >
            <StyledNavigationLink
              to="/"
              css={css`
                ${p => mediaQuery('down', 'sm', p.theme)} {
                  width: 100%;
                }
              `}
            >
              <Button
                css={css`
                  border-width: 0;
                  background-color: ${p => getColor('yellow', 600, p.theme)};
                  color: #fff;
                  border-radius: 30px;
                  font-weight: 600;
                  padding: 18px 24px;
                  ${p => mediaQuery('down', 'sm', p.theme)} {
                    width: 100%;
                  }
                `}
              >
                Discover every feature
              </Button>
            </StyledNavigationLink>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            flex: 1;
            gap: 32px;
            height: 100%;
            ${p => mediaQuery('down', 'sm', p.theme)} {
              padding-bottom: 1rem;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              flex: 1;
              gap: 40px;
              align-self: flex-start;
              transform: translateY(-30px);
              ${p => mediaQuery('down', 'sm', p.theme)} {
                transform: translateY(0);
              }
            `}
          >
            <SummaryCard
              border="#03363D"
              imageSrc={voiceoverImage}
              phrase="Video voiceovers"
              description="Professional sounding voiceover without the need to hire costly actors."
            />
            <SummaryCard
              border="#D93F4C"
              imageSrc={audioImage}
              phrase="Audio descriptions for movies/TV"
              description="Making your content more accessible with audio descriptions and grow your audience."
            />
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: center;
              flex: 1;
              gap: 40px;
              align-self: flex-end;
              transform: translateY(30px);
              ${p => mediaQuery('down', 'sm', p.theme)} {
                transform: translateY(0);
              }
            `}
          >
            <SummaryCard
              border="#337FBD"
              imageSrc={gamingImage}
              phrase="Gaming"
              description="Providing spoken instructions, dialogue, and other audio content for video games."
            />
            <SummaryCard
              border="#ED8F1C"
              imageSrc={podcastImage}
              phrase="Podcast advertisements"
              description="Create AI speech ads for your podcast, increasing revenue and saving time."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
