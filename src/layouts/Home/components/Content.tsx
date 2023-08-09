import { mediaQuery } from '@zendeskgarden/react-theming';
import { MAX_WIDTH } from 'data/constants/constants';
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
          padding: 2rem;
          margin-top: 16px;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex: 1;
          max-width: ${MAX_WIDTH};
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            flex: 1;
            gap: 24px;
            max-width: ${MAX_WIDTH};
            background-color: #03363d;
            border-radius: 20px;
            padding: 5rem 10rem;
            ${p => mediaQuery('down', 'sm', p.theme)} {
              padding: 2rem;
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
                font-size: 32px;
                line-height: 37.2px;
                text-align: center;
              }
            `}
          >
            Instead of paying and waiting for expensive voice actors or narrators, we give audio /
            sound professionals, narrative directors, game producers, and content owners back their
            time and money.
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
            Powered by generative AI for voice, Coqui Studio can be used for storytelling,
            podcasting, AI Voice for games, audio books, dubbing and just about anything you can
            think of. Either instantly clone your own voice or choose from our selection of emotive,
            fully directable AI voices.
          </p>
        </div>
      </div>
    </div>
  );
};
