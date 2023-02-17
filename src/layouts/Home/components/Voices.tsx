/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Button } from '@zendeskgarden/react-buttons';
import { LG } from '@zendeskgarden/react-typography';
import AsyaAnaraSample from 'data/audios/ai-voices/AsyaAnara.wav';
import DamienBlackSample from 'data/audios/ai-voices/DamienBlack.wav';
import KazuhikoAtallahSample from 'data/audios/ai-voices/KazuhikoAtallah.wav';
import TammyGritSample from 'data/audios/ai-voices/TammyGrit.wav';
import VjollcaJohnnieSample from 'data/audios/ai-voices/VjollcaJohnnie.wav';
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
            <Avatar src={homeImages.BrendaStern.childImageSharp.fixed.src} />
            <Name>Asya Anara</Name>
            <Age>Middle Aged</Age>
            <Characteristics>
              <p>Confident</p>
              <p>Bold</p>
              <p>Authoritative</p>
            </Characteristics>
            <Characteristics>
              <p>Bossy</p>
              <p>Charismatic</p>
            </Characteristics>
            <Sample src={AsyaAnaraSample} />
          </VoiceCard>
          <VoiceCard>
            <Avatar src={homeImages.CraigGutsy.childImageSharp.fixed.src} />
            <Name>Damien Black</Name>
            <Age>Middle Aged</Age>
            <Characteristics>
              <p>Bold</p>
              <p>Brave</p>
              <p>Commanding</p>
            </Characteristics>
            <Characteristics>
              <p>Heroic</p>
              <p>Tough</p>
            </Characteristics>
            <Sample src={DamienBlackSample} />
          </VoiceCard>
          <VoiceCard>
            <Avatar src={homeImages.EthanHeedful.childImageSharp.fixed.src} />
            <Name>Kazuhiko Atallah</Name>
            <Age>Middle Aged</Age>
            <Characteristics>
              <p>Reassuring</p>
              <p>Approachable</p>
              <p>Helpful</p>
            </Characteristics>
            <Characteristics>
              <p>Attentive</p>
              <p>Believable</p>
            </Characteristics>
            <Sample src={KazuhikoAtallahSample} />
          </VoiceCard>
          <VoiceCard>
            <Avatar src={homeImages.GracieWise.childImageSharp.fixed.src} />
            <Name>Vjollca Johnnie</Name>
            <Age>Middle Aged</Age>
            <Characteristics>
              <p>Authoritative</p>
              <p>Confident</p>
              <p>Grizzled</p>
            </Characteristics>
            <Characteristics>
              <p>Corporate</p>
              <p>Serious</p>
            </Characteristics>
            <Sample src={VjollcaJohnnieSample} />
          </VoiceCard>
          <VoiceCard>
            <Avatar src={homeImages.TammyGrit.childImageSharp.fixed.src} />
            <Name>Tammy Grit</Name>
            <Age>Senior</Age>
            <Characteristics>
              <p>Aggressive</p>
              <p>Angry</p>
              <p>Creepy</p>
            </Characteristics>
            <Characteristics>
              <p>Dangerous</p>
              <p>Ominous</p>
            </Characteristics>
            <Sample src={TammyGritSample} />
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
