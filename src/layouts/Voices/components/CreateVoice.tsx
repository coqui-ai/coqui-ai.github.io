/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Field, File, FileUpload, Input, Label, Message } from '@zendeskgarden/react-forms';
import { ArrowLeft, LampOn } from 'iconsax-react';
import { CenterContent, OrangeButton, TitleBar } from 'layouts/Root/components/Styled';
import { Link, navigate } from 'gatsby';
import { Span, UnorderedList } from '@zendeskgarden/react-typography';
import { css } from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
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
      margin: 33px auto;
      border-color: #fff7ed;
      background: #fff7ed;
      padding: 0;
      width: 699px;
      min-height: 341px;
      color: #313940;
      font-weight: 500;
      ${p => mediaQuery('down', 'sm', p.theme)} {
        width: 349px;
      }
    `}
  >
    <Title
      css={css`
        display: flex;
        align-items: center;
        border-bottom: 1px solid #c2c8cc;
        padding-left: 28px;
        height: 57px;
        font-size: 20px;
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

          ${p => mediaQuery('down', 'sm', p.theme)} {
            margin: 16px 20px;
          }
        }
      `}
    >
      <UnorderedList.Item>
        Speaking in English when recording improves voice similarity.
      </UnorderedList.Item>
      <UnorderedList.Item>Don&apos;t stutter or stammer in the recording.</UnorderedList.Item>
      <UnorderedList.Item>Don&apos;t pause too long.</UnorderedList.Item>
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
      margin: 39px 0;
      border-bottom: 1px #aaa solid;
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        margin-bottom: -9.5px;
        background: #fff;
        width: 30px;
        text-align: center;
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
  const [fileError, setFileError] = useState(null);
  const [recordingValue, setRecordingValue] = useState(null);
  const maxFileSize = Math.ceil(Math.pow(2, 20)) * 45;

  const [createVoice, { data, loading, error }] = useMutation(CREATE_VOICE, {
    update: cache => {
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'voices'
      });
    }
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: ['.wav', '.mp3', '.ogg', '.webm'],
    multiple: false,
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        if (acceptedFiles[0].size > maxFileSize) {
          setFileError('Max file size exceeded (45MiB)');
        } else {
          setFileError(null);
        }
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

    if (fileError !== null) {
      return false;
    }

    createVoice({
      variables: {
        name: nameValue,
        voice: sourceValue === 'record' ? recordingValue.blob : fileValue
      }
    }).catch(() => {});

    return true;
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        submitForm();
      }}
    >
      <TitleBar>
        <Link to="/voices" css="vertical-align: middle; margin-right: 8px;">
          <ArrowLeft size={24} />
        </Link>
        Create a new voice
      </TitleBar>

      <QuickTips />

      <CenterContent>
        <Radio checked={sourceValue === 'record'} onClick={() => setSourceValue('record')}>
          <Span isBold>Record audio</Span> &mdash; Read and record the text sample below
        </Radio>

        <Well
          isRecessed
          css={css`
            margin-bottom: 32px;
            padding: 12px 19px;
          `}
        >
          Once upon a time, the King’s youngest son became filled with the desire to go abroad, and
          see the world. He got his father’s permission to leave on an adventure, kissed his parents
          goodbye, mounted his black horse, and galloped away down the high road. Soon the grey
          towers of the old castle, in which he had been born, disappeared behind him.
        </Well>

        <VoiceRecorder
          maxDuration={30}
          value={recordingValue}
          onChange={v => {
            setRecordingValue(v);
            setSourceValue('record');
          }}
        />

        <Or />

        <Radio checked={sourceValue === 'upload'} onClick={() => setSourceValue('upload')}>
          <Span isBold>Upload audio file here</Span>
        </Radio>

        <FileUpload
          {...getRootProps()}
          isDragging={isDragActive}
          css={css`
            flex-flow: column;
            margin-bottom: 30px;
            height: 241px;
          `}
        >
          {isDragActive ? (
            <span>Drop the file here</span>
          ) : fileValue ? (
            <>
              <File type="generic" aria-label="Uploaded file" validation={fileError ? "error" : "success"}>{fileValue.name}</File>
              <Span isBold hue="rgb(204, 51, 64)">{fileError && fileError}</Span>
            </>
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

        {error && <Message validation="error">{error.message}</Message>}

        <Submit loading={loading} onClick={submitForm}>
          Proceed to test your voice
        </Submit>
      </CenterContent>
    </form>
  );
};
