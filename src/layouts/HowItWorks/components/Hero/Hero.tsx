import { mediaQuery } from '@zendeskgarden/react-theming';
import { MAX_WIDTH } from 'data/constants/constants';
import React, { FC } from 'react';
import { css } from 'styled-components';
import { SecondaryButton, TertiaryButton, TryNowButton } from '../../../Home/components/Buttons';
import heroImg from './hero.png';

export const Hero: FC = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        background: linear-gradient(207.81deg, #f5faff 54.98%, #fefffe 92.7%);
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          position: relative;
          padding: 5rem 10rem;
          max-width: ${MAX_WIDTH};
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
              Unlocking your potential with the power of{' '}
              <span
                css={css`
                  background: linear-gradient(89.27deg, #ed8f1c -1.56%, #468d6a 102.75%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  text-fill-color: transparent;
                `}
              >
                AI voice
              </span>
              .
            </h1>
            <p
              css={css`
                font-size: 22px;
                line-height: 180%;
              `}
            >
              Coqui Studio offers an extensive feature list that helps individuals, small teams and
              large organisations make their next video game, animation, or post-production project
              simpler, faster and more cost-effective - all thanks to generative AI.
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
              <TertiaryButton
                text="Try Coqui Studio for free"
                path={`${process.env.GATSBY_BACKEND_URL}/auth/signup`}
              />
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
            <img
              width={730}
              src={heroImg}
              alt="hero"
              css={css`
                max-width: none;
                ${p => mediaQuery('down', 'sm', p.theme)} {
                  width: 300px;
                }
              `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
