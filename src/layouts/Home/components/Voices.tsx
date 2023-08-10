/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Button } from '@zendeskgarden/react-buttons';
import { LG } from '@zendeskgarden/react-typography';
import AaronDreschnerSample from 'data/audios/ai-voices/AaronDreschner.wav';
import AlexandraHisakawaSample from 'data/audios/ai-voices/AlexandraHisakawa.wav';
import UtaObandoSample from 'data/audios/ai-voices/UtaObando.wav';
import XavierHayasakaSample from 'data/audios/ai-voices/XavierHayasaka.wav';
import ZofijaKendrickSample from 'data/audios/ai-voices/ZofijaKendrick.wav';
import { graphql, useStaticQuery } from 'gatsby';
import { PlayCircle, StopCircle } from 'iconsax-react';
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { TryNowButton } from './Buttons';
import { headerStyling } from './Styles';

const VoiceCard = styled.div`
  width: 295px;
  height: 278px;
  border-radius: 8px;
  border: 1px solid #5eae91;
  background: #012b30;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 26px;
`;

const AddVoiceCard = styled(VoiceCard)`
  border: 1px solid #ed8f1c;
  background: #fdf4e8;
  color: #012b30;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px dashed #ed8f1c;
`;

const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 106.12%;
  margin-top: 10px;
`;

const Age = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.27em;
`;

const Characteristics = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  &:first-of-type {
    margin-top: 10px;
  }

  & > p {
    padding: 0 4px;
  }

  & > p:not(:last-of-type) {
    border-right: 1px solid #fff;
  }
`;

const PlayButton = ({ src }: { src: string }) => {
  const audioPlayer = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    if (audioPlayer.current) {
      audioPlayer.current.currentTime = 0;
    }
    audioPlayer.current?.play();
    setIsPlaying(true);
  };

  const stop = () => {
    audioPlayer.current?.pause();
    if (audioPlayer.current) {
      audioPlayer.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  audioPlayer.current?.addEventListener('ended', stop);

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio src={src} ref={audioPlayer} />
      {!isPlaying ? (
        <Button css="height: 54px;" isBasic onClick={play} role="button" title="Play">
          <PlayCircle size="54" color="#ed8f1c" variant="Bold" />
        </Button>
      ) : (
        <Button css="height: 54px;" isBasic onClick={stop} role="button" title="Stop">
          <StopCircle size="54" color="#ed8f1c" variant="Bold" />
        </Button>
      )}
    </div>
  );
};

const Sample = ({ src }: { src: string }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
      `}
    >
      <PlayButton src={src} />
    </div>
  );
};

export const Voices = () => {
  const homeImages = useStaticQuery(
    graphql`
      query {
        AaronDreschner: file(relativePath: { eq: "images/ai-voices/AaronDreschner.png" }) {
          childImageSharp {
            fixed(width: 80) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        AlexandraHisakawa: file(relativePath: { eq: "images/ai-voices/AlexandraHisakawa.png" }) {
          childImageSharp {
            fixed(width: 80) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        UtaObando: file(relativePath: { eq: "images/ai-voices/UtaObando.png" }) {
          childImageSharp {
            fixed(width: 80) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        XavierHayasaka: file(relativePath: { eq: "images/ai-voices/XavierHayasaka.png" }) {
          childImageSharp {
            fixed(width: 80) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        ZofijaKendrick: file(relativePath: { eq: "images/ai-voices/ZofijaKendrick.png" }) {
          childImageSharp {
            fixed(width: 80) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        MoreSpeakers: file(relativePath: { eq: "images/ai-voices/more-speakers.png" }) {
          childImageSharp {
            fixed(width: 95) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  );

  return (
    <div
      css={css`
        background: ${p => p.theme.palette.oatMilk};
        display: flex;
        justify-content: center;
        position: relative;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <h1
          css={css`
            ${headerStyling}

            margin-top: 80px;
            max-width: 300px;
            text-align: center;
          `}
        >
          Our AI Voices
        </h1>
        <LG
          tag="p"
          css={css`
            margin-bottom: ${p => p.theme.space.md};
            max-width: 490px;
            margin-top: 28px;
            text-align: center;
          `}
        >
          Clone your voice in seconds or choose from our available AI voices, with more being added
          with every release
        </LG>
        <TryNowButton css="margin-top: 20px; overflow: visible;" />
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            max-width: 925px;
            gap: 20px;
            margin-top: 40px;
            margin-bottom: 60px;
          `}
        >
          <VoiceCard>
            <Avatar src={homeImages.AaronDreschner.childImageSharp.fixed.src} />
            <Name>Aaron Dreschner</Name>
            <Age>Young Adult</Age>
            <Characteristics>
              <p>Confident</p>
              <p>Bold</p>
              <p>Arrogant</p>
            </Characteristics>
            <Sample src={AaronDreschnerSample} />
          </VoiceCard>
          <VoiceCard>
            <Avatar src={homeImages.AlexandraHisakawa.childImageSharp.fixed.src} />
            <Name>Alexandra Hisakawa</Name>
            <Age>Young Adult</Age>
            <Characteristics>
              <p>Exacting</p>
              <p>Competent</p>
              <p>Persistent</p>
            </Characteristics>
            <Sample src={AlexandraHisakawaSample} />
          </VoiceCard>
          <VoiceCard>
            <Avatar src={homeImages.UtaObando.childImageSharp.fixed.src} />
            <Name>Uta Obando</Name>
            <Age>Young Adult</Age>
            <Characteristics>
              <p>Innocent</p>
              <p>Approachable</p>
              <p>Naïf</p>
            </Characteristics>
            <Sample src={UtaObandoSample} />
          </VoiceCard>
          <VoiceCard>
            <Avatar src={homeImages.XavierHayasaka.childImageSharp.fixed.src} />
            <Name>Xavier Hayasaka</Name>
            <Age>Young Adult</Age>
            <Characteristics>
              <p>Bold</p>
              <p>Confident</p>
              <p>Forceful</p>
            </Characteristics>
            <Sample src={XavierHayasakaSample} />
          </VoiceCard>
          <VoiceCard>
            <Avatar src={homeImages.ZofijaKendrick.childImageSharp.fixed.src} />
            <Name>Zofija Kendrick</Name>
            <Age>Young Adult</Age>
            <Characteristics>
              <p>Forthright</p>
              <p>Passionate</p>
              <p>Driven</p>
            </Characteristics>
            <Sample src={ZofijaKendrickSample} />
          </VoiceCard>
          <AddVoiceCard>
            <img
              src={homeImages.MoreSpeakers.childImageSharp.fixed.src}
              css={css`
                height: 42px;
              `}
            />
            <p css="margin-top: 16px; text-align: center; margin-bottom: 23px;">
              To get more voices, you can instantly clone any voice with just 3 seconds of audio
            </p>
            <TryNowButton />
          </AddVoiceCard>
        </div>
      </div>
    </div>
  );
};
