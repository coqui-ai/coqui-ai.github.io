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
    <div
      id="about-us"
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: center;
      `}
    >
      <AboutUsContainer>
        <AboutUsDetailsContainer>
          <AboutUsDetailsTitle>ABOUT US</AboutUsDetailsTitle>
          <AboutUsDetailsTitleDescription>
            Over <span>10 years of experience</span> in AI voices.
          </AboutUsDetailsTitleDescription>
          <AboutUsDetailsDescription>
            Formerly from Mozilla, our founders are established leaders and researchers on speech
            technology and machine learning. Based in Berlin and founded in 2021, we started out
            investing resources in STT (speech-to-text) and TTS (text-to-speech) engines that have
            been used by hundreds of thousands across the world.
            <br />
            <br />
            Now, we&apos;ve expanded our mission to help out audio, animation, post-production and
            video game professionals in the creative space. We wanted to make “Generative AI for
            Speech” accessible without the need for code. That&apos;s Coqui Studio.
            <br />
            <br />
            Our team continues to grow, based across 5 continents with a rich background of
            experience and advanced skill sets in machine learning and deep learning, as well as
            product, UX/UI and software development.
            <br />
            <br />
            In case you&apos;re wondering, the name Coqui came from the Puerto Rican frog. We drew
            inspiration from the coquí because the frog is well-known for being small but having a
            loud, clear voice.
          </AboutUsDetailsDescription>
          <AboutUsButtonContainer>
            <PrimaryButton
              text="Discover Coqui Studio"
              path="/how-it-works"
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
              path="#contact"
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
              path="/how-it-works"
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
              path="#contact"
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
    </div>
  );
};
