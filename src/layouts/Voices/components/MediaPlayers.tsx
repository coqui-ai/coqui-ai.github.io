/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowCircleDown2,
  Microphone2,
  Pause,
  StopCircle,
  Trash,
  VideoCircle
} from 'iconsax-react';
import styled, { css } from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Progress } from '@zendeskgarden/react-loaders';

import { useAudioRecorder } from '../../../../utils/useAudioRecorder';

const PlayerRow = styled.div`
  border-radius: 4px;
  background-color: #012b30;
  height: 62px;

  display: flex;
`;

const PlayerCol = styled.div`
  flex-grow: ${props => props.grow || 0};
  min-width: ${props => props.width || 0}px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 62px;

  border-right: 1px solid #5eae91;
  :last-of-type {
    border-right: none;
  }
  & svg {
    margin-left: 3px;
  }

  ${p => mediaQuery('down', 'sm', p.theme)} {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const PlayerButtonCol = styled(PlayerCol)`
  &:hover {
    cursor: pointer;
    background-color: #5eae91;
    transition: background-color 50ms;
    :first-of-type {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    :last-of-type {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;

const renderTime = time => {
  const secs = Math.floor(time % 60);

  return Math.floor(time / 60) + ':' + (secs >= 10 ? secs : '0' + secs);
};

export const useManyPlayers = () => {
  const [player, setPlayer] = useState<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState<string>(null);

  useEffect(() => {
    if (!player) {
      const aud = new Audio();

      aud.onpause = () => {
        setCurrentTrack(null);
      };

      setPlayer(aud);

      return () => {
        aud.pause();
        aud.src = null;
      };
    }
  }, [player]);

  const Player = ({ src, children }) => (
    // eslint-disable-next-line
    <div
      onClick={() => {
        if (currentTrack === src) {
          setCurrentTrack(null);
          player.pause();
        } else {
          setCurrentTrack(src);
          player.src = src;
          player.play();
        }
      }}
    >
      {children}
    </div>
  );

  return { currentTrack, Player };
};

export const AudioPlayer = ({ src }) => {
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const [audioPlayerState, setAudioPlayerState] = useState(null);
  const audioPlayerStateChangeHandler = ({ target }: { target: HTMLAudioElement }) =>
    setAudioPlayerState({
      duration: target.duration,
      paused: target.paused,
      currentTime: target.currentTime
    });

  const currentTime = audioPlayerState?.currentTime || 0;
  const currentTimestamp = renderTime(currentTime);
  const totalTime = audioPlayerState?.duration || 0;
  const totalTimestamp = renderTime(totalTime);

  return (
    <PlayerRow>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        ref={audioPlayer}
        src={src}
        preload="auto"
        // onChange={console.log}
        onPlay={audioPlayerStateChangeHandler}
        onPause={audioPlayerStateChangeHandler}
        onEnded={audioPlayerStateChangeHandler}
        onTimeUpdate={audioPlayerStateChangeHandler}
        onDurationChange={audioPlayerStateChangeHandler}
      />

      <PlayerCol width={60}>
        {(() => {
          if (!audioPlayer?.current?.paused)
            return (
              <Pause
                size="32"
                color="#ED8F1C"
                variant="Bold"
                onClick={() => audioPlayer?.current?.pause()}
              />
            );

          return (
            <VideoCircle
              size="32"
              color="#ED8F1C"
              variant="Bold"
              onClick={() => audioPlayer?.current?.play()}
            />
          );
        })()}
      </PlayerCol>
      <PlayerCol
        grow={1}
        css={css`
          color: white;
          font-size: 16px;
          & span {
            margin-left: 20px;
          }
        `}
      >
        <Progress
          value={(100 * (currentTime || 0)) / totalTime || 0}
          css={css`
            width: 369px;
            & div {
              transition: none;
            }
          `}
        />

        <span>
          {currentTimestamp}/{totalTimestamp}
        </span>
      </PlayerCol>
      <PlayerCol
        width={134}
        css={css`
          font-size: 14px;
          line-height: 24;
          margin-left: 9px;
          & a,
          & a:hover {
            color: #5eae91;
            text-decoration: none;
          }
          & svg {
            position: relative;
            top: 7px;
          }
        `}
      >
        <a href={src}>
          Download
          <ArrowCircleDown2 size="24" color="#5EAE91" variant="Bold" />
        </a>
      </PlayerCol>
    </PlayerRow>
  );
};

export const VoiceRecorder = ({ value: lastAudioResult, onChange: setLastAudioResult }) => {
  const [recordingLength, setRecordingLength] = useState<number>(null);
  // const [lastAudioResult, setLastAudioResult] = useState<{ blob: Blob; length: number }>(null);

  const audioPlayer = useRef<HTMLAudioElement>(null);
  const [audioPlayerState, setAudioPlayerState] = useState(null);
  const audioPlayerStateChangeHandler = ({ target }: { target: HTMLAudioElement }) =>
    lastAudioResult &&
    setAudioPlayerState({
      duration: target.duration,
      paused: target.paused,
      currentTime: target.currentTime
    });

  const {
    audioResult,
    timer,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    status,
    errorMessage
  } = useAudioRecorder();

  useEffect(() => {
    if (audioResult) {
      fetch(audioResult).then(async r =>
        setLastAudioResult({ blob: await r.blob(), length: recordingLength })
      );
    }
  }, [audioResult]);

  const currentTime = audioPlayerState ? audioPlayerState?.currentTime || 0 : timer;
  const currentTimestamp = renderTime(currentTime);
  const totalTime = audioPlayerState ? recordingLength : 30;
  const totalTimestamp = renderTime(totalTime);

  return (
    <PlayerRow>
      {audioResult ? (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <audio
          ref={audioPlayer}
          src={audioResult}
          preload="auto"
          // onChange={console.log}
          onPlay={audioPlayerStateChangeHandler}
          onPause={audioPlayerStateChangeHandler}
          onEnded={audioPlayerStateChangeHandler}
          onTimeUpdate={audioPlayerStateChangeHandler}
          onDurationChange={audioPlayerStateChangeHandler}
        />
      ) : (
        ''
      )}

      <PlayerButtonCol width={60}>
        {(() => {
          if (lastAudioResult && !audioPlayer?.current?.paused)
            return (
              <Pause
                size="32"
                color="#ED8F1C"
                variant="Bold"
                onClick={() => audioPlayer?.current?.pause()}
              />
            );
          if (lastAudioResult)
            return (
              <VideoCircle
                size="32"
                color="#5EAE91"
                variant="Bold"
                onClick={() => audioPlayer?.current?.play()}
              />
            );
          if (status === 'idle')
            return (
              <Microphone2 size="32" color="#ED8F1C" variant="Bold" onClick={startRecording} />
            );
          if (status === 'recording')
            return (
              <StopCircle
                size="32"
                color="#f47373"
                variant="Bold"
                onClick={() => {
                  setRecordingLength(timer);
                  stopRecording();
                }}
              />
            );

          return '?';
        })()}
      </PlayerButtonCol>
      <PlayerCol
        grow={1}
        css={css`
          color: white;
          font-size: 16px;
          & span {
            margin-left: 20px;
          }
        `}
      >
        <Progress
          value={(100 * (currentTime || 0)) / totalTime}
          css={css`
            width: 390px;
            & div {
              transition: none;
            }
          `}
        />

        <span>
          {currentTimestamp}/{totalTimestamp}
        </span>
      </PlayerCol>
      <PlayerButtonCol width={60}>
        <Trash
          size={32}
          color={lastAudioResult ? '#CC3340' : '#345559'}
          variant="Bold"
          onClick={() => {
            audioPlayer?.current?.pause();
            if (lastAudioResult) setLastAudioResult(null);
            setAudioPlayerState(null);
          }}
        />
      </PlayerButtonCol>
    </PlayerRow>
  );
};
