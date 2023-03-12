import { mediaQuery } from '@zendeskgarden/react-theming';
import React, { FC } from 'react';
import { css } from 'styled-components';

export const Content: FC = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10rem;
        ${p => mediaQuery('down', 'sm', p.theme)} {
          padding: 1rem;
          margin-top: 16px;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 24px;
          background-color: #03363d;
          border-radius: 20px;
          padding: 5rem 10rem;
          ${p => mediaQuery('down', 'sm', p.theme)} {
            padding: 1rem;
          }
        `}
      >
        <h2
          css={css`
            font-size: 48px;
            line-height: 67.2px;
            text-align: center;
            background: linear-gradient(89.27deg, #ed8f1c -1.56%, #468d6a 102.75%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            ${p => mediaQuery('down', 'sm', p.theme)} {
              font-size: 24px;
              line-height: 37.2px;
            }
          `}
        >
          Instead of paying and waiting for expensive voice actors or narrators, we give creatives
          and business owners back their time and money.
        </h2>
        <p
          css={css`
            font-size: 16px;
            color: #f9f9f9;
            text-align: center;
            font-weight: 400;
            line-height: 32.4px;
          `}
        >
          Coqui Studio can be used for storytelling, podcasting, AI Voice for games, audio books,
          dubbing and just about anything you can think of. Either instantly clone your own voice or
          choose from our selection of emotive, fully directable AI voices.
        </p>
      </div>
    </div>
  );
};
