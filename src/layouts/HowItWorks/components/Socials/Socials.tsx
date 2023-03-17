import React, { FC } from 'react';
import { css } from 'styled-components';
import { SocialsContainer, SocialsDescription, SocialsSectionTitle } from './styled';
import github from './github.png';
import discord from './discord.png';
import youtube from './youtube.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import facebook from './facebook.png';
import arrow from './arrow-up-right.png';

export const Socials: FC = () => {
  return (
    <SocialsContainer>
      <SocialsSectionTitle>
        Learn more about the <span>latest in Generative AI</span> for voice, from Coqui across our
        social media
      </SocialsSectionTitle>
      <SocialsDescription>
        Explore our videos and stories that break down the latest in AI advances, and how they can
        help you.
      </SocialsDescription>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 18px;
            padding: 2rem;
            border: 1px solid #337fbd;
            border-radius: 25px;
            height: 350px;
            width: 300px;
          `}
        >
          <img width="50" src={github} alt="github" />
          <p
            css={css`
              color: #68737d;
              font-size: 14px;
              line-height: 180%;
            `}
          >
            Are you already a software engineer or coding enthusiast who wants to include Coqui
            (TTS/STT) speech models in your projects/products? We got you covered.
          </p>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              cursor: pointer;
            `}
            onClick={() => window.open('https://github.com/coqui-ai', '_BLANK')}
          >
            <p
              css={css`
                color: #ed8f1c;
                font-size: 14px;
                line-height: 180%;
              `}
            >
              Check out a wide variety of technical material on GitHub
            </p>
            <img height={44} width={44} src={arrow} alt="arrow" />
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 18px;
            padding: 2rem;
            border: 1px solid #17494d;
            border-radius: 25px;
            height: 350px;
            width: 300px;
          `}
        >
          <img width="50" src={discord} alt="discord" />
          <p
            css={css`
              color: #68737d;
              font-size: 14px;
              line-height: 180%;
            `}
          >
            Do you want more social engagement during your research? Love learning geek-to-geek?
          </p>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              cursor: pointer;
            `}
            onClick={() => window.open('https://discord.gg/CzxHHp8mtZ', '_BLANK')}
          >
            <p
              css={css`
                color: #ed8f1c;
                font-size: 14px;
                line-height: 180%;
              `}
            >
              Join our Discord
            </p>
            <img height={44} width={44} src={arrow} alt="arrow" />
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 18px;
            padding: 2rem;
            border: 1px solid #e35b66;
            border-radius: 25px;
            height: 350px;
            width: 300px;
          `}
        >
          <img width="50" src={youtube} alt="youtube" />
          <p
            css={css`
              color: #68737d;
              font-size: 14px;
              line-height: 180%;
            `}
          >
            Are you a video learner?
          </p>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              cursor: pointer;
            `}
            onClick={() => window.open('https://www.youtube.com/@coqui1027', '_BLANK')}
          >
            <p
              css={css`
                color: #ed8f1c;
                font-size: 14px;
                line-height: 180%;
              `}
            >
              Check our YouTube channel
            </p>
            <img height={44} width={44} src={arrow} alt="arrow" />
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 18px;
            padding: 2rem;
            background-color: #03363d;
            border-radius: 25px;
            height: 350px;
            width: 300px;
            justify-content: center;
          `}
        >
          <p
            css={css`
              background: linear-gradient(89.27deg, #ed8f1c -1.56%, #468d6a 102.75%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
              font-size: 20px;
              line-height: 180%;
              font-weight: 600;
              text-align: center;
            `}
          >
            Are you interested in keeping up to date? Follow us on Twitter, LinkedIn and Facebook
          </p>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              gap: 12px;
            `}
          >
            <span
              css={css`
                cursor: pointer;
              `}
              onClick={() => window.open('https://twitter.com/coqui_ai', '_BLANK')}
            >
              <img width="50" src={twitter} alt="twitter" />
            </span>
            <span
              css={css`
                cursor: pointer;
              `}
              onClick={() => window.open('https://www.linkedin.com/company/coqui-ai/', '_BLANK')}
            >
              <img width="50" src={linkedin} alt="linkedin" />
            </span>
            <span
              css={css`
                cursor: pointer;
              `}
              onClick={() => window.open('https://www.facebook.com/coquiai', '_BLANK')}
            >
              <img width="50" src={facebook} alt="facebook" />
            </span>
          </div>
        </div>
      </div>
    </SocialsContainer>
  );
};
