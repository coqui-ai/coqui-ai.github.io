import React, { FC } from 'react';
import { PrimaryButton } from '../Buttons';
import {
  SavingTimeContainer,
  SavingTimeBox,
  SavingTimeTitle,
  SavingTimeDescription
} from './styled';
import btnIcon from './arrow-up-right.png';
import voice from './voice.png';
import { css } from 'styled-components';

export const SavingTime: FC = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
      `}
    >
      <SavingTimeContainer>
        <SavingTimeBox>
          <SavingTimeTitle>Ready to start saving time?</SavingTimeTitle>
          <SavingTimeDescription>
            Try Coqui Studio with 30 minutes of free synthesis time. No credit card or commitment
            required.
          </SavingTimeDescription>
          <PrimaryButton
            text="Try Coqui Studio for free"
            path={`${process.env.GATSBY_BACKEND_URL}/auth/signup`}
            iconSrc={btnIcon}
          />
          <img
            css={css`
              position: absolute;
              bottom: 0;
              width: 100%;
              z-index: 1;
            `}
            src={voice}
            alt="voice wave"
          />
        </SavingTimeBox>
      </SavingTimeContainer>
    </div>
  );
};
