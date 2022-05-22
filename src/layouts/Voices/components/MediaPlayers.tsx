/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef, useState } from 'react';
import { Microphone2, Pause, StopCircle, Trash, VideoCircle } from 'iconsax-react';
import styled, { css } from 'styled-components';
import { Progress } from '@zendeskgarden/react-loaders';

import { useAudioRecorder } from '../../../../utils/useAudioRecorder';

import { Col, Grid, Row } from '@zendeskgarden/react-grid';

const RecorderCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;

  border-right: 1px solid #5eae91;
  &:last {
    border-right: none;
  }
  & svg {
    margin-left: 3px;
  }
`;

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

  const renderTime = time => {
    const secs = Math.floor(time % 60);

    return Math.floor(time / 60) + ':' + (secs >= 10 ? secs : '0' + secs);
  };

  const currentTime = audioPlayerState ? audioPlayerState?.currentTime || 0 : timer;

  const currentTimestamp = renderTime(currentTime);
  const totalTime = audioPlayerState ? recordingLength : 30;
  const totalTimestamp = renderTime(totalTime);

  return (
    <Grid>
      <Row
        css={css`
          background-color: #012b30;
          height: 62px;
        `}
      >
        <RecorderCol size={1}>
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
        </RecorderCol>
        <RecorderCol
          css={css`
            border-right: none;
          `}
        >
          <Progress
            value={(100 * (currentTime || 0)) / totalTime}
            css={css`
              width: 390px;
              & div {
                // transition: width 1s linear;
                transition: none;
              }
            `}
          />
        </RecorderCol>
        <RecorderCol
          size={2}
          css={css`
            color: white;
            font-size: 16px;
          `}
        >
          {currentTimestamp}/{totalTimestamp}
        </RecorderCol>
        <RecorderCol size={1}>
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
        </RecorderCol>
      </Row>
    </Grid>
  );
};
