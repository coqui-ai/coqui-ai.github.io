import { mediaQuery } from '@zendeskgarden/react-theming';
import React, { FC } from 'react';
import { css } from 'styled-components';
import { PrimaryButton, SecondaryButton } from '../Buttons';
import { AboutUsTimeline } from './AboutUsTimeline/AboutUsTimeline';
import {
  AboutUsButtonContainer,
  AboutUsButtonContainerMobile,
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
          <PrimaryButton
            text="Discover Coqui Studio"
            path="/"
            css={css`
              ${p => mediaQuery('up', 'sm', p.theme)} {
                display: flex;
              }
              ${p => mediaQuery('down', 'sm', p.theme)} {
                display: none;
              }
            `}
          />
          <SecondaryButton
            text="Talk to our team"
            path="/"
            css={css`
              ${p => mediaQuery('up', 'sm', p.theme)} {
                display: flex;
              }
              ${p => mediaQuery('down', 'sm', p.theme)} {
                display: none;
              }
            `}
          />
        </AboutUsButtonContainer>
        <AboutUsButtonContainerMobile>
          <PrimaryButton
            text="Discover Coqui Studio"
            path="/"
            fullWidth
            css={css`
              ${p => mediaQuery('up', 'sm', p.theme)} {
                display: none;
              }
              ${p => mediaQuery('down', 'sm', p.theme)} {
                display: flex;
              }
            `}
          />
          <SecondaryButton
            text="Talk to our team"
            path="/"
            fullWidth
            css={css`
              ${p => mediaQuery('up', 'sm', p.theme)} {
                display: none;
              }
              ${p => mediaQuery('down', 'sm', p.theme)} {
                display: flex;
              }
            `}
          />
        </AboutUsButtonContainerMobile>
      </AboutUsDetailsContainer>
      <AboutUsTimeline />
    </AboutUsContainer>
  );
};
