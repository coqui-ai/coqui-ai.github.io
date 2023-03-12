/* eslint-disable jsx-a11y/media-has-caption */
import { Button } from '@zendeskgarden/react-buttons';
import { AvatarType } from 'layouts/Home/types/avatar';
import { PlayCircle, StopCircle } from 'iconsax-react';
import React, { FC, useState } from 'react';
import {
  AIVoiceCardContainer,
  AvatarCharacteristics,
  AvatarImage,
  AvatarMetaDataContainer,
  AvatarName,
  AvatarTag
} from './styled';
import { useRef } from 'react';

interface IAIVoiceCardProps extends Omit<AvatarType, 'id'> {}

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

export const AIVoiceCard: FC<IAIVoiceCardProps> = ({
  imageSrc,
  name,
  tag,
  characteristics,
  voiceSample
}) => {
  return (
    <AIVoiceCardContainer>
      <AvatarImage src={imageSrc} />
      <AvatarMetaDataContainer>
        <AvatarName>{name}</AvatarName>
        <AvatarTag>{tag}</AvatarTag>
        <AvatarCharacteristics>{characteristics?.join(', ')}</AvatarCharacteristics>
      </AvatarMetaDataContainer>
      <PlayButton src={voiceSample} />
    </AIVoiceCardContainer>
  );
};