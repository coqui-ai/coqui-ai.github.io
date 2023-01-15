/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { mediaQuery } from '@zendeskgarden/react-theming';
import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import { css } from 'styled-components';

const FeatureEllipse = ({}) => {
  return (
    <div
      css={css`
        min-width: 24px;
        max-width: 24px;

        ${p => mediaQuery('down', 'sm', p.theme)} {
          min-width: 15px;
          max-width: 15px;
        }
      `}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#ED8F1C" fillOpacity="0.2" />
        <circle cx="12" cy="12" r="5" fill="#ED8F1C" />
      </svg>
    </div>
  );
};

const FeatureDescription = ({
  title,
  description
}: {
  title: ReactNode;
  description: ReactNode;
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 15px;

        ${p => mediaQuery('down', 'sm', p.theme)} {
          gap: 9px;
        }
      `}
    >
      <div
        css={css`
          font-weight: 700;
          font-size: 24px;
          line-height: 29px;

          ${p => mediaQuery('down', 'sm', p.theme)} {
            font-size: 16px;
          }
        `}
      >
        {title}
      </div>
      <div
        css={css`
          font-size: 16px;

          ${p => mediaQuery('down', 'sm', p.theme)} {
            font-size: 14px;
          }
        `}
      >
        {description}
      </div>
    </div>
  );
};

const ComingSoonBadge = ({}) => {
  return (
    <span
      css={css`
        text-transform: uppercase;
        font-size: 10px;
        font-weight: 700;
        color: #fff;
        background: linear-gradient(272.21deg, #ed8f1c 40.76%, #ffae4b 98.64%);
        border-radius: 5.6px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 7px;
        margin-left: 12px;
        white-space: nowrap;

        ${p => mediaQuery('down', 'sm', p.theme)} {
          font-size: 7px;
          padding: 5px;
          line-height: 8px;
          margin-left: 6px;
        }
      `}
    >
      Coming Soon
    </span>
  );
};

const ImageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div
      css={css`
        max-height: 1px;

        ${p => mediaQuery('down', 'md', p.theme)} {
          max-height: unset;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    >
      {children}
    </div>
  );
};

const FeatureSection = ({
  children,
  background,
  reverse = false
}: {
  children: ReactNode[];
  background: string;
  reverse?: boolean;
}) => {
  return (
    <div
      css={css`
        border: double 1px transparent;
        border-radius: 20px;
        background-image: linear-gradient(#fdf4e8, #fdf4e8),
          linear-gradient(
            317.99deg,
            #ed8f1c -0.06%,
            rgba(237, 143, 28, 0.430987) 54.71%,
            #ed8f1c 97.08%
          );
        background-origin: border-box;
        background-clip: content-box, border-box;
        max-width: 1400px;
      `}
    >
      <div
        css={css`
          border-radius: 20px;
          background-image: ${background};

          display: flex;
          justify-content: space-around;
          padding: 84px 36px;
          gap: 60px;

          ${reverse && 'flex-direction: row-reverse;'}

          ${p => mediaQuery('down', 'md', p.theme)} {
            flex-direction: column;
            justify-content: start;
            align-items: center;
            gap: 0px;
            padding: 44px 16px;
          }

          & > div {
            width: 50%;

            ${p => mediaQuery('down', 'md', p.theme)} {
              width: 100%;
            }
          }
        `}
      >
        {children[0]}
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            gap: 24px;

            & > div {
              display: flex;
              align-items: center;
              gap: 40px;

              ${p => mediaQuery('down', 'md', p.theme)} {
                gap: 24px;
              }
            }
          `}
        >
          <div>
            <FeatureEllipse />
            {children[1]}
          </div>
          <div css="border-top: 1px solid rgba(0, 0, 0, 0.1);" />
          <div>
            <FeatureEllipse />
            {children[2]}
          </div>
          <div css="border-top: 1px solid rgba(0, 0, 0, 0.1);" />
          <div>
            <FeatureEllipse />
            {children[3]}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Features = ({}) => {
  const featureImages = useStaticQuery(
    graphql`
      query {
        group1: file(relativePath: { eq: "images/home/group1-screenshot.png" }) {
          childImageSharp {
            fixed(quality: 100, width: 844) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        group2: file(relativePath: { eq: "images/home/group2-screenshot.png" }) {
          childImageSharp {
            fixed(quality: 100, width: 1310) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        group3: file(relativePath: { eq: "images/home/group3-screenshot.png" }) {
          childImageSharp {
            fixed(quality: 100, width: 1112) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  );

  return (
    <div
      id="features"
      css={css`
        background: #fdf4e8;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 85px;
        padding: 120px 88px 73px 88px;

        & > div {
          width: 100%;
          border-radius: 20px;
        }

        ${p => mediaQuery('down', 'md', p.theme)} {
          gap: 54px;
          padding: 120px 41px 51px 41px;
        }
      `}
    >
      <FeatureSection background="linear-gradient(96.66deg, rgba(247, 229, 203, 0.5) 42.31%, rgba(253, 244, 232, 0.5) 98.24%)">
        <ImageContainer>
          <img
            src={featureImages.group1.childImageSharp.fixed.src}
            css={css`
              overflow: visible;
              margin-top: -145px;
              width: 100%;
              max-width: 422px;

              ${p => mediaQuery('down', 'md', p.theme)} {
                margin-top: -90px;
              }
            `}
          />
        </ImageContainer>
        <FeatureDescription
          title="Voice Cloning"
          description="Clone any voice from 3 seconds of audio and add to your collection."
        />
        <FeatureDescription
          title="Generative AI Voices"
          description="Design your dream voice instead of choosing from a list."
        />
        <FeatureDescription
          title={
            <span css="max-width: 280px;">
              Generative <span css="color: #ed8f1c;">AI Emotions</span> and{' '}
              <span css="color: #468d6a;">Voice Control</span>
            </span>
          }
          description="Easily tune style of any voice, adjust pace and emotions."
        />
      </FeatureSection>
      <FeatureSection
        reverse
        background="linear-gradient(87.99deg, rgba(255, 252, 247, 0.5) 23.51%, rgba(255, 255, 255, 0.5) 90.25%)"
      >
        <ImageContainer>
          <img
            src={featureImages.group2.childImageSharp.fixed.src}
            css={css`
              overflow: visible;
              object-fit: cover;
              object-positin: left center;
              margin-left: -40px;
              max-width: 654px;

              ${p => mediaQuery('down', 'md', p.theme)} {
                position: relative;
                margin-top: -60px;
                margin-left: -50px;
                height: unset;
                width: 160%;
              }
            `}
          />
        </ImageContainer>
        <FeatureDescription
          title="Advanced Editor"
          description="Take full control of your AI voices. Adjust pitch, loudness and more, for each sentence, word or character."
        />
        <FeatureDescription
          title="Multiple Takes"
          description="Don't limit yourself to one creative alternative! Use takes to experiment and save different performances, deciding later which is the one."
        />
        <FeatureDescription
          title="Timeline Editor"
          description="Direct your scenes casted by many AI Voices with extensive performances, and hear them all together."
        />
      </FeatureSection>
      <FeatureSection background="linear-gradient(96.66deg, rgba(247, 229, 203, 0.5) 42.31%, rgba(253, 244, 232, 0.5) 98.24%)">
        <ImageContainer>
          <img
            src={featureImages.group3.childImageSharp.fixed.src}
            css={css`
              overflow: visible;
              margin-left: -213px;
              max-width: 556px;

              ${p => mediaQuery('down', 'md', p.theme)} {
                margin-top: -60px;
                margin-left: -50px;
                width: 140%;
              }
            `}
          />
        </ImageContainer>
        <FeatureDescription
          title="Project Management"
          description="Organize and keep control of your work in projects."
        />
        <FeatureDescription
          title={
            <span css="display: flex; align-items: center;">
              Script Imports <ComingSoonBadge />
            </span>
          }
          description="Import your scripts into Coqui Studio start voicing it in seconds."
        />
        <FeatureDescription
          title={
            <span css="display: flex; align-items: center; white-space: nowrap;">
              Team Collaboration <ComingSoonBadge />
            </span>
          }
          description="Collaborate with colleagues, directing and casting characters as a team."
        />
      </FeatureSection>
    </div>
  );
};
