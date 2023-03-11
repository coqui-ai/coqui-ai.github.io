import { Button } from '@zendeskgarden/react-buttons';
import { getColor } from '@zendeskgarden/react-theming';
import React, { FC } from 'react';
import { css } from 'styled-components';
import { TryNowButton } from './Buttons';
import { StyledNavigationLink } from './StyledNavigationLink';

export const Hero: FC = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        height: 780px;
        position: relative;
        background: linear-gradient(207.81deg, #f5faff 54.98%, #fefffe 92.7%);
        padding: 1rem 10rem;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
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
            `}
          >
            Helping professionals and developers save{' '}
            <span
              css={css`
                background: linear-gradient(89.27deg, #ed8f1c -1.56%, #468d6a 102.75%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
              `}
            >
              hours
            </span>
            .
          </h1>
          <p
            css={css`
              font-size: 18px;
            `}
          >
            Say hello to Coqui Studio. A web application that provides realistic, emotive
            text-to-speech thanks to advanced AI technologies.
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
            <TryNowButton />
            <StyledNavigationLink to="/">
              <Button
                css={css`
                  border: 2px solid ${p => getColor('yellow', 600, p.theme)};
                  background-color: transparent;
                  color: #000;
                  border-radius: 30px;
                  font-weight: 400;
                  padding: 18px 24px;
                `}
              >
                See what we can do
              </Button>
            </StyledNavigationLink>
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
          <img height="640" src="https://dummyimage.com/640x640/fff/aaa" alt="placeholder" />
        </div>
      </div>
    </div>
  );
};
