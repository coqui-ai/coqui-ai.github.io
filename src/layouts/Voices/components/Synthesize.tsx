/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Field, Form, Formik } from 'formik';
import { VoicesDropdown } from 'layouts/Root/components/VoicesDropdown';
import { Submit } from 'layouts/Root/components/Forms';
import { Loading } from 'layouts/Root/components/Styled';
import { navigate } from 'gatsby';

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
        audio
      }
    }
  }
`;

export const Synthesize: React.FC = ({ locationState = null, id }) => {
  const { data, loading: voiceLoading, error } = useQuery(VOICE, { variables: { id } });

  const voice = data?.voice;

  const [createSample, createSampleStatus] = useMutation(CREATE_SAMPLE);

  if (voiceLoading) return <Loading />;

  return (
    <div>
      <pre>{JSON.stringify([createSampleStatus.data, createSampleStatus.error])}</pre>
      my voice {voice.name}
      <Formik
        initialValues={{
          name: '',
          text: '',
          speed: '1',
          ...locationState?.formValues
        }}
        validate={values => {
          const errors = {};

          ['name', 'text'].forEach(k => {
            if (!values[k]) errors[k] = 'Required.';
          });

          return errors;
        }}
        onSubmit={values => {
          createSample({
            variables: {
              ...values,
              voice_id: voice.id
            }
          });
          // todo: show errors
        }}
      >
        {({ values }) => (
          <Form>
            <label htmlFor="name">Name your audio</label>
            <Field id="name" name="name" placeholder="" />

            <label htmlFor="text">Text</label>
            <Field id="text" name="text" as="textarea" placeholder="" />

            <VoicesDropdown
              value={voice}
              onSelect={voice => {
                navigate(`/voices/${voice.id}/synthesize`, { state: { formValues: values } });
              }}
            />

            <label htmlFor="speed">Speed</label>
            <Field id="speed" name="speed" as="select" placeholder="">
              <option value="0.5">0.5</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </Field>

            <Submit loading={createSampleStatus.loading}>Submit</Submit>
          </Form>
        )}
      </Formik>
    </div>
  );
};
