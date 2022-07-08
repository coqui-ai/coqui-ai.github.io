/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Form, Formik, connect, Field as FormikField } from 'formik';
import * as GardenForms from '@zendeskgarden/react-forms';
import styled, { DefaultTheme, css } from 'styled-components';
import { ThemeProvider } from '@zendeskgarden/react-theming';

import { VoicesDropdown } from 'layouts/Root/components/VoicesDropdown';
import { Field, MaxCharCountField, Submit } from 'layouts/Root/components/Forms';
import { CenterContent, Loading, TitleBar } from 'layouts/Root/components/Styled';
import { navigate } from 'gatsby';
import { Link } from 'layouts/Root/components/StyledNavigationLink';
import { ArrowLeft } from 'iconsax-react';
import { Input, Textarea, Range, Message } from '@zendeskgarden/react-forms';
import { Well } from '@zendeskgarden/react-notifications';
import { AudioPlayer } from './MediaPlayers';
import { WaitForSampleGeneration } from './WaitForSampleGeneration';

const VOICE = gql`
  query voice($id: String!) {
    voice(id: $id) {
      id
      name
    }
  }
`;

const CREATE_SAMPLE = gql`
  mutation createSample($name: String!, $voice_id: String!, $text: String!, $speed: String!) {
    createSample(name: $name, voice_id: $voice_id, text: $text, speed: $speed) {
      errors {
        field
        errors
      }
      sample {
        id
        name
        created_at
        voice_id
        audio_url
      }
    }
  }
`;

const SpeedControl = connect(props => {
  const theme = (parentTheme: DefaultTheme) => ({
    ...parentTheme,
    space: { ...parentTheme.space, base: 3 },
    colors: { ...parentTheme.colors, primaryHue: '#ed8f1c' }
  });

  return (
    <ThemeProvider focusVisibleRef={null} theme={theme as any}>
      <GardenForms.Field>
        <GardenForms.Label
          css={`
            font-weight: 400;
          `}
        >
          Speed
        </GardenForms.Label>
        <Well
          css={css`
            height: 103px;
            padding: 0;
            color: #313940;
            border-color: #186146;
            overflow: hidden;
            margin-bottom: 30px;
          `}
        >
          <div
            css={css`
              background-color: rgba(24, 97, 70, 0.1);
              height: 44px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 -30px;

              & div {
                flex-grow: 1;
                width: 33%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            `}
          >
            <div onClick={() => props.formik.setFieldValue('speed', 0)}>Slower</div>
            <div onClick={() => props.formik.setFieldValue('speed', 1)}>Normal</div>
            <div onClick={() => props.formik.setFieldValue('speed', 2)}>Faster</div>
          </div>
          <div
            css={css`
              height: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: -2.5px 90px;

              & div {
                flex-grow: 1;
                height: 5px;
                width: 33%;
                margin-left: -1px;
                border-left: 1px #186146 solid;
                border-right: 1px #186146 solid;
              }
            `}
          >
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
          <div
            css={css`
              padding: 20px 83px;
            `}
          >
            <FormikField name="speed" id="speed" as={Range} min={0} max={2} />
          </div>
        </Well>
      </GardenForms.Field>
    </ThemeProvider>
  );
});

const PlayerBar = styled.div`
  height: 84px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
`;

export const Synthesize: React.FC = ({ locationState = null, id }) => {
  const { data, loading: voiceLoading, error } = useQuery(VOICE, { variables: { id } });

  const voice = data?.voice;

  const [createSample, createSampleStatus] = useMutation(CREATE_SAMPLE, {
    update: (cache, result) => {
      if (result?.data?.createSample?.sample?.voice_id) {
        cache.evict({
          id: 'ROOT_QUERY',
          fieldName: 'samples',
          args: { voice_id: result.data.createSample.sample.voice_id }
        });
        cache.evict({
          id: 'ROOT_QUERY',
          fieldName: 'voices'
        });
      }
    }
  });

  const sample = createSampleStatus?.data?.createSample?.sample;

  if (voiceLoading) return <Loading />;

  return (
    <>
      <TitleBar>
        <Link to="/voices" css="vertical-align: middle; margin-right: 8px;">
          <ArrowLeft size={24} />
        </Link>
        Synthesize Voice
      </TitleBar>

      <CenterContent>
        <Formik
          initialValues={{
            name: '',
            text: '',
            speed: '1',
            ...locationState?.formValues
          }}
          validate={values => {
            const errors = {};

            ['text'].forEach(k => {
              if (!values[k]) errors[k] = 'Required.';
            });

            if (!values['name'] && values['text']) {
              values['name'] = values['text'].slice(0, 30);
            }

            return errors;
          }}
          onSubmit={values => {
            createSample({
              variables: {
                ...values,
                speed: { 0: '1.5', 1: '1', 2: '0.7' }[values.speed],
                voice_id: voice.id
              }
            }).catch(() => {});
          }}
        >
          {({ values }) => (
            <Form>
              <GardenForms.Field
                css={`
                  min-height: 106px;
                `}
              >
                <GardenForms.Label
                  css={`
                    font-weight: 400;
                  `}
                >
                  Select Voice
                </GardenForms.Label>

                <VoicesDropdown
                  value={voice}
                  onSelect={voice => {
                    navigate(`/voices/${voice.id}/synthesize`, { state: { formValues: values } });
                  }}
                  style={{
                    marginTop: 9,
                    fontWeight: 700,
                    backgroundColor: '#F2F4F5'
                  }}
                />
              </GardenForms.Field>

              <MaxCharCountField
                name="text"
                label="Input your text here"
                maxCharCount={250}
                as={Textarea}
                style={{ height: 120 }}
                fieldStyle={{ minHeight: 190 }}
              />

              <SpeedControl />

              <Field name="name" label="Name your audio" as={Input} />

              {createSampleStatus.error && (
                <Message validation="error">{createSampleStatus.error.message}</Message>
              )}

              <Submit loading={createSampleStatus.loading}>Submit</Submit>
            </Form>
          )}
        </Formik>
      </CenterContent>
      {sample && (
        <WaitForSampleGeneration sample={sample}>
          {sample => (
            <PlayerBar>
              <CenterContent>
                <AudioPlayer
                  src={
                    sample.audio_url[0] === '/'
                      ? `${process.env.GATSBY_BACKEND_URL}${sample.audio_url}`
                      : sample.audio_url
                  }
                />
              </CenterContent>
            </PlayerBar>
          )}
        </WaitForSampleGeneration>
      )}
    </>
  );
};
