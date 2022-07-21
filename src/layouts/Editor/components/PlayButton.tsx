/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, useEffect } from 'react';

import { PlayCircle, StopCircle } from 'iconsax-react';
import { Button } from '@zendeskgarden/react-buttons';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const PlayButton = ({ src }) => {
  const audioPlayer = useRef<HTMLAudioElement>(new Audio(src));

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioPlayer.current.src = src;
  }, [src]);

  const play = () => {
    audioPlayer.current.currentTime = 0;
    audioPlayer.current.play();
    setIsPlaying(true);
  };

  const stop = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
    setIsPlaying(false);
  };

  audioPlayer.current.addEventListener("ended", stop);

  return (
    <Tooltip content={!isPlaying ? "Play" : "Stop"}>
      {!isPlaying ? (
        <Button isBasic onClick={play}>
          <PlayCircle size="48" color="#ed8f1c" variant="Bold" />
        </Button>
      ) : (
        <Button isBasic onClick={stop}>
          <StopCircle size="48" color="#ed8f1c" variant="Bold" />
        </Button>
      )}
    </Tooltip>
  );
};

export default PlayButton;
