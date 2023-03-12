import React, { FC } from 'react';
import { css } from 'styled-components';
import { TryNowButton, SecondaryButton } from '../Buttons';
import {
  SyntheticVoicesButtonContainer,
  SyntheticVoicesContainer,
  SyntheticVoicesDetailsContainer,
  SyntheticVoicesDetailsDescription,
  SyntheticVoicesDetailsTitle,
  SyntheticVoicesDetailsTitleDescription,
  SyntheticVoicesVideoContainer
} from './styled';

export const SyntheticVoices: FC = () => {
  return (
    <SyntheticVoicesContainer>
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
          <SecondaryButton text="Got a question?" path="/" />
        </SyntheticVoicesButtonContainer>
      </SyntheticVoicesDetailsContainer>
      <SyntheticVoicesVideoContainer>
        <img
          height="550"
          src="https://dummyimage.com/550x600/fff/aaa"
          alt="placeholder"
          css={css`
            border-radius: 20px;
          `}
        />
      </SyntheticVoicesVideoContainer>
    </SyntheticVoicesContainer>
  );
};
