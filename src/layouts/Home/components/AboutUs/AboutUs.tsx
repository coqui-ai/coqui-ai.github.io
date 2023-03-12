import React, { FC } from 'react';
import { PrimaryButton, SecondaryButton } from '../Buttons';
import { AboutUsTimeline } from './AboutUsTimeline/AboutUsTimeline';
import {
  AboutUsButtonContainer,
  AboutUsContainer,
  AboutUsDetailsContainer,
  AboutUsDetailsDescription,
  AboutUsDetailsTitle,
  AboutUsDetailsTitleDescription
} from './styled';

export const AboutUs: FC = () => {
  return (
    <AboutUsContainer>
      <AboutUsDetailsContainer>
        <AboutUsDetailsTitle>ABOUT US</AboutUsDetailsTitle>
        <AboutUsDetailsTitleDescription>
          Over <span>10 years of experience</span> in AI voices.
        </AboutUsDetailsTitleDescription>
        <AboutUsDetailsDescription>
          Started in 2016, our team wanted to bring AI voice technology to the market, with the
          support of a huge online, open-source community.We built open-sourced STT and TTS engines
          that have since been used by hundreds of thousands of people, as well as open-sourcing
          thousands of hours of speech training data. We’re an organisation dedicated to the
          continued support of these open-source efforts and the community gathered around them.
        </AboutUsDetailsDescription>
        <AboutUsDetailsDescription>The best is yet to come.</AboutUsDetailsDescription>
        <AboutUsButtonContainer>
          <PrimaryButton text="Discover Coqui Studio" path="/" />
          <SecondaryButton text="Talk to our team" path="/" />
        </AboutUsButtonContainer>
      </AboutUsDetailsContainer>
      <AboutUsTimeline />
    </AboutUsContainer>
  );
};
