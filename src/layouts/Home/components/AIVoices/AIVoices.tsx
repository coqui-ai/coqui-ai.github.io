/* eslint-disable react-hooks/exhaustive-deps */
import { mediaQuery } from '@zendeskgarden/react-theming';
import { useStaticQuery, graphql } from 'gatsby';
import { AvatarType } from 'layouts/Home/types/avatar';
import React, { FC, useEffect, useState } from 'react';
import { css } from 'styled-components';
import { PrimaryButton } from '../Buttons';
import { AIVoiceCard } from './AIVoiceCard/AIVoiceCard';
import { avatarData } from './avatarData';

enum AvatarsEnum {
  BrendaStern = 'BrendaStern',
  CraigGutsy = 'CraigGutsy',
  EthanHeedful = 'EthanHeedful',
  GracieWise = 'GracieWise',
  TammyGrit = 'TammyGrit'
}

type ImageType = {
  height: number;
  src: string;
  srcSet: string;
  width: number;
};

type ImageSharpType = {
  fixed: ImageType;
};

type AvatarImageData = {
  childImageSharp: ImageSharpType;
};

type AvatarImageType = {
  [key: string]: AvatarImageData;
};

export const AIVoices: FC = () => {
  const [avatars, setAvatars] = useState<AvatarType[]>([]);

  const avatarImages: AvatarImageType = useStaticQuery(
    graphql`
      query {
        BrendaStern: file(relativePath: { eq: "images/ai-voices/BrendaStern.png" }) {
          childImageSharp {
            fixed(width: 80) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        CraigGutsy: file(relativePath: { eq: "images/ai-voices/CraigGutsy.png" }) {
          childImageSharp {
            fixed(width: 80) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        EthanHeedful: file(relativePath: { eq: "images/ai-voices/EthanHeedful.png" }) {
          childImageSharp {
            fixed(width: 80) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        GracieWise: file(relativePath: { eq: "images/ai-voices/GracieWise.png" }) {
          childImageSharp {
            fixed(width: 80) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        TammyGrit: file(relativePath: { eq: "images/ai-voices/TammyGrit.png" }) {
          childImageSharp {
            fixed(width: 80) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  );

  const mapAvatars: () => void = () => {
    const mappedAvatarsWithImage: AvatarType[] = avatarData.map(a => {
      a.imageSrc = avatarImages[a.id].childImageSharp.fixed.src;
      return a;
    });
    setAvatars(mappedAvatarsWithImage);
  };

  useEffect(() => {
    if (avatarImages) mapAvatars();

    return () => {
      setAvatars([]);
    };
  }, [avatarImages]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 10rem;
        gap: 30px;
        ${p => mediaQuery('down', 'sm', p.theme)} {
          padding: 1rem;
        }
      `}
    >
      <p
        css={css`
          font-family: 'Manrope', sans-serif;
          color: #468d6a;
          font-size: 16px;
        `}
      >
        AI-GENERATED VOICE
      </p>
      <h2
        css={css`
          font-size: 48px;
          line-height: 67.2px;
          ${p => mediaQuery('down', 'sm', p.theme)} {
            font-size: 24px;
            line-height: 67.2px;
          }
        `}
      >
        Your{' '}
        <span
          css={css`
            background: linear-gradient(89.27deg, #ed8f1c -1.56%, #468d6a 102.75%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          `}
        >
          voice
        </span>{' '}
        or ours.
      </h2>
      <p
        css={css`
          font-size: 16px;
          line-height: 32.4px;
          letter-spacing: 0.02em;
          text-align: center;
          color: #777777;
          max-width: 50rem;
        `}
      >
        Clone your voice in seconds or use our wide (and always growing) collection of AI voices.
      </p>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 22px;
          ${p => mediaQuery('down', 'sm', p.theme)} {
            flex-direction: column;
            align-items: center;
            padding: 1rem;
          }
        `}
      >
        {avatars.map(a => (
          <AIVoiceCard key={a.name} {...a} />
        ))}
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 35px;
            border-radius: 20px;
            width: 510px;
            padding: 33px 25px;
            background-color: #e9ebed;
            ${p => mediaQuery('down', 'sm', p.theme)} {
              width: 250px;
            }
          `}
        >
          <p
            css={css`
              font-size: 16px;
              line-height: 180%;
              letter-spacing: 0.02em;
            `}
          >
            Clone your voice in seconds or use our wide (and always growing) collection of AI
            voices.
          </p>
          <PrimaryButton
            text="Try Coqui Studio for free"
            path={`${process.env.GATSBY_BACKEND_URL}/auth/signup`}
          />
        </div>
      </div>
    </div>
  );
};
