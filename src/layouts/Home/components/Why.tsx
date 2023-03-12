import { mediaQuery } from '@zendeskgarden/react-theming';
import { SummaryCard } from 'components/cards/SummaryCard';
import React, { FC } from 'react';
import { css } from 'styled-components';

export const Why: FC = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 10rem;
        background-color: #f9fafc;
        gap: 40px;
        ${p => mediaQuery('down', 'sm', p.theme)} {
          padding: 2rem;
        }
      `}
    >
      <p
        css={css`
          font-family: 'Manrope', sans-serif;
          color: #468d6a;
          font-size: 16px;
        `}
      >
        WHAT MAKES US UNIQUE
      </p>
      <h2
        css={css`
          font-size: 48px;
          line-height: 67.2px;
          ${p => mediaQuery('down', 'sm', p.theme)} {
            font-size: 48px;
            line-height: 32.2px;
            text-align: center;
          }
        `}
      >
        <span
          css={css`
            background: linear-gradient(89.27deg, #ed8f1c -1.56%, #468d6a 102.75%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          `}
        >
          Why Coqui
        </span>
        ?
      </h2>
      <p
        css={css`
          font-size: 16px;
          line-height: 32.4px;
          letter-spacing: 0.02em;
          text-align: center;
          color: #777777;
          max-width: 50rem;
        `}
      >
        Coqui Studio is feature-rich and has a user base that is growing every day. Here&apos;s why
        creatives and business owners all over the world are choosing our solution.
      </p>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 32px;
          align-self: flex-start;
        `}
      >
        <SummaryCard
          fill="#FED6A8"
          phrase="Pay for what you use"
          description="Only pay for the service you need. Save money and still get access to the best AI technology."
        />
        <SummaryCard
          fill="#EDF7FF"
          phrase="Speed up your production"
          description="Emulate your voice in just seconds and let AI do the hard work for you."
        />
        <SummaryCard
          fill="#FFFFFF"
          phrase="Realistic, directable AI voices"
          description="Easily tune the style of any voice, adjust pace and emotions - with any voice."
        />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 32px;
          align-self: flex-end;
        `}
      >
        <SummaryCard
          fill="#BDD9D7"
          phrase="Our inbuilt audio editor"
          description="Tinker and tailor as much as you need. Adjust pitch, loudness and more with ease."
        />
        <SummaryCard
          fill="#FFF7ED"
          phrase="As many takes as required"
          description="Use takes to experiment and save different performances, and choose your favourite."
        />
        <SummaryCard
          fill="#FFF0F1"
          phrase="All-in-one workstation"
          description="Direct your masterpiece, creating conversations with  multiple AI Voices in one easy-to-use tool."
        />
      </div>
    </div>
  );
};
