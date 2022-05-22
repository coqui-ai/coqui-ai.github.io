/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Field, Input, Label } from '@zendeskgarden/react-forms';
import {
  ArrowLeft,
  LampOn,
  Microphone2,
  Pause,
  StopCircle,
  Trash,
  VideoCircle
} from 'iconsax-react';
import { TitleBar } from 'layouts/Root/components/Styled';
import { Link } from 'gatsby';
import { Span, UnorderedList } from '@zendeskgarden/react-typography';
import styled, { css } from 'styled-components';
import { Title, Well } from '@zendeskgarden/react-notifications';
import { Submit } from 'layouts/Root/components/Forms';
import { Progress } from '@zendeskgarden/react-loaders';

import { useAudioRecorder } from '@sarafhbk/react-audio-recorder';

import { ReactComponent as BigRadioChecked } from '/static/components/big_radio_checked.svg';
import { ReactComponent as BigRadioUnchhecked } from '/static/components/big_radio_unchecked.svg';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

const CREATE_VOICE = gql`
  mutation CreateVoice($name: String!, $voice: Upload!) {
    createVoice(name: $name, voice: $voice) {
      errors {
        field
        errors
      }
      voice {
        id
        name
        created_at
      }
    }
  }
`;

const QuickTips = () => (
  <Well
    css={css`
      width: 699px;
      margin: 33px auto;
      min-height: 341px;
      padding: 0;
      background: #fff7ed;
      border-color: #fff7ed;
      color: #313940;
      font-weight: 500;
    `}
  >
    <Title
      css={css`
        border-bottom: 1px solid #c2c8cc;
        height: 57px;
        display: flex;
        align-items: center;
        font-size: 20px;
        padding-left: 28px;
      `}
    >
      <LampOn
        color="#ED8F1C"
        size={24}
        css={css`
          margin-right: 8px;
        `}
      />
      Quick Tips
    </Title>
    <UnorderedList
      size="large"
      css={css`
        & li {
          margin: 24px 26px;
        }
      `}
    >
      <UnorderedList.Item>
        English voice samples result in increased voice similarity.
      </UnorderedList.Item>
      <UnorderedList.Item>On average 30 secs recording is necessary.</UnorderedList.Item>
      <UnorderedList.Item>Don't stutter or stammer in the recording.</UnorderedList.Item>
      <UnorderedList.Item>Don't pause too long.</UnorderedList.Item>
      <UnorderedList.Item>
        Eliminate background noise as much as possible, although the model is robust against a
        certain noise level.
      </UnorderedList.Item>
      <UnorderedList.Item>
        The system is optimized for voice similarity, and the accent and speaking style is not yet
        factored in.
      </UnorderedList.Item>
    </UnorderedList>
  </Well>
);

const CenterContent = styled.div`
  width: 699px;
  margin: 33px auto;
`;

const Radio = ({ children, checked, onClick }) => (
  <div
    onClick={onClick}
    css={css`
      display: flex;
      align-items: center;
      height: 50px;
    `}
  >
    {checked ? <BigRadioChecked /> : <BigRadioUnchhecked />}
    <span
      css={css`
        margin-left: 13px;
      `}
    >
      {children}
    </span>
  </div>
);

const Or = () => (
  <div
    css={css`
      border-bottom: 1px #aaa solid;
      margin: 39px 0;
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        width: 30px;
        background: white;
        text-align: center;
        margin-bottom: -9.5px;
        color: #aaa;
      `}
    >
      or
    </div>
  </div>
);

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

const VoiceRecorder = ({ value: lastAudioResult, onChange: setLastAudioResult }) => {
  const [recordingLength, setRecordingLength] = useState<number>(null);
  // const [lastAudioResult, setLastAudioResult] = useState<{ blob: Blob; length: number }>(null);

  const audioPlayer = useRef<HTMLAudioElement>(null);
  const [audioPlayerState, setAudioPlayerState] = useState(null);
  const audioPlayerStateChangeHandler = ({ target }: { target: HTMLAudioElement }) =>
    setAudioPlayerState({
      duration: target.duration,
      paused: target.paused,
      currentTime: target.currentTime
    });

  console.log(audioPlayerState);

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

  // useEffect(() => {
  //   if (audioResult) {
  //     const pl = new Audio(audioResult);

  //     setAudioPlayer(pl);
  //     pl.on

  //     return () => pl.pause();
  //   }
  // }, [audioResult]);

  const renderTime = time => {
    const secs = Math.floor(time % 60);

    return Math.floor(time / 60) + ':' + (secs >= 10 ? secs : '0' + secs);
  };

  const currentTime = audioPlayerState ? audioPlayerState?.currentTime || 0 : timer;

  const currentTimestamp = renderTime(currentTime);
  const totalTime = audioPlayerState ? recordingLength : 30;
  const totalTimestamp = renderTime(totalTime);

  console.log(audioResult, timer, currentTime, totalTime, audioPlayer?.current);

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
              preload
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
              if (lastAudioResult) setLastAudioResult(null);
              setAudioPlayerState(null);
            }}
          />
        </RecorderCol>
      </Row>
    </Grid>
  );
};

export const CreateVoice: React.FC = () => {
  const [sourceValue, setSourceValue] = useState('record');
  const [nameValue, setNameValue] = useState('');
  const [fileValue, setFileValue] = useState(null);
  const [recordingValue, setRecordingValue] = useState(null);

  const [createVoice, { data, loading, error }] = useMutation(CREATE_VOICE);

  if (loading) return 'loading';

  const submitForm = () => {
    if (!nameValue) {
      return false;
    }

    createVoice({
      variables: {
        name: nameValue,
        voice: sourceValue === 'record' ? recordingValue.blob : fileValue
      }
    });
  };

  const onFileChange = e => {
    if (e.target.validity.valid) {
      setFileValue(e.target.files[0]);
    }
  };

  return (
    <>
      <TitleBar>
        <Link to="/voices">
          <ArrowLeft size={24} />
        </Link>
        &nbsp;&nbsp; Create a new voice
      </TitleBar>

      <pre>{JSON.stringify(data)}</pre>
      <pre>{JSON.stringify(error)}</pre>

      <QuickTips />

      <CenterContent>
        <Radio checked={sourceValue === 'record'} onClick={e => setSourceValue('record')}>
          <Span isBold>Record audio</Span> &mdash; Read and record the text sample below{' '}
          <Span hue="rgb(47 57 65 / 50%)">~30seconds minimum</Span>
        </Radio>

        <Well
          isRecessed
          css={css`
            padding: 12px 19px;
            margin-bottom: 32px;
          `}
        >
          Once upon a time, the King’s youngest son became filled with the desire to go abroad, and
          see the world. He got his father’s permission to leave on an adventure, kissed his parents
          goodbye, mounted his black horse, and galloped away down the high road. Soon the grey
          towers of the old castle, in which he had been born, disappeared behind him.
        </Well>

        <VoiceRecorder
          value={recordingValue}
          onChange={v => {
            setRecordingValue(v);
            setSourceValue('record');
          }}
        />

        <Or />

        <Radio checked={sourceValue === 'upload'} onClick={e => setSourceValue('upload')}>
          <Span isBold>Upload audio file here</Span>
        </Radio>
        <input
          type="file"
          required
          onChange={f => {
            onFileChange(f);
            setSourceValue('upload');
          }}
        />

        <Field>
          <Label>Name your voice</Label>
          <Input value={nameValue} onChange={e => setNameValue(e.target.value)} />
        </Field>
        <Submit loading={loading} onClick={submitForm}>
          Proceed to test your voice
        </Submit>
      </CenterContent>
    </>
  );
};
