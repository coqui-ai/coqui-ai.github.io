/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Field, FileUpload, Input, Label } from '@zendeskgarden/react-forms';
import { ArrowLeft, LampOn } from 'iconsax-react';
import { OrangeButton, TitleBar } from 'layouts/Root/components/Styled';
import { Link, navigate } from 'gatsby';
import { Span, UnorderedList } from '@zendeskgarden/react-typography';
import styled, { css } from 'styled-components';
import { Title, Well } from '@zendeskgarden/react-notifications';
import { Submit } from 'layouts/Root/components/Forms';
import { useDropzone } from 'react-dropzone';

import { ReactComponent as BigRadioChecked } from '/static/components/big_radio_checked.svg';
import { ReactComponent as BigRadioUnchhecked } from '/static/components/big_radio_unchecked.svg';
import { VoiceRecorder } from './MediaPlayers';

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

export const CreateVoice: React.FC = () => {
  const [sourceValue, setSourceValue] = useState<'record' | 'upload'>('record');
  const [nameValue, setNameValue] = useState('');
  const [fileValue, setFileValue] = useState<File>(null);
  const [recordingValue, setRecordingValue] = useState(null);

  const [createVoice, { data, loading, error }] = useMutation(CREATE_VOICE);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: ['audio/wav'],
    multiple: false,
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        setFileValue(acceptedFiles[0]);
        setSourceValue('upload');
      }
    }
  });

  useEffect(() => {
    if (data?.createVoice?.voice?.id) navigate(`/voices/${data.createVoice.voice.id}/synthesize`);
  }, [data]);

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

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        submitForm();
      }}
    >
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

        <FileUpload
          {...getRootProps()}
          isDragging={isDragActive}
          css={css`
            height: 241px;
            margin-bottom: 30px;
            flex-flow: column;
          `}
        >
          {isDragActive ? (
            <span>Drop the file here</span>
          ) : fileValue ? (
            <Span isBold>{fileValue.name}</Span>
          ) : (
            <>
              <OrangeButton>Upload Audio</OrangeButton>
              <br />
              <br />
              <div
                css={css`
                  margin-top: 30px;
                  color: #31394080;
                `}
              >
                or drag in the file to upload
                <br /> your audio here
                <br /> <Span isBold>30 secs max</Span>
              </div>
            </>
          )}
          <Input {...getInputProps()} />
        </FileUpload>

        <Field>
          <Label>Name your voice</Label>
          <Input value={nameValue} onChange={e => setNameValue(e.target.value)} />
        </Field>
        <Submit loading={loading} onClick={submitForm}>
          Proceed to test your voice
        </Submit>
      </CenterContent>
    </form>
  );
};
