/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Field, Form, Formik } from 'formik';

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

export const Voice: React.FC = ({ id }) => {
  const { data: voice, loading, error } = useQuery(VOICE, { variables: { id } });
  const [createSample, createSampleStatus] = useMutation(CREATE_SAMPLE);

  if (loading) return 'loading';
  if (error) return <pre>{JSON.stringify(error)}</pre>;

  return (
    <div>
      <pre>{JSON.stringify([createSampleStatus.data, createSampleStatus.error])}</pre>
      my voice {voice.voice.name}
      <Formik
        initialValues={{
          name: '',
          text: '',
          speed: '1'
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
              voice_id: voice.voice.id
            }
          });
          // todo: show errors
        }}
      >
        <Form>
          <label htmlFor="name">Name your audio</label>
          <Field id="name" name="name" placeholder="" />

          <label htmlFor="text">Text</label>
          <Field id="text" name="text" as="textarea" placeholder="" />

          <label htmlFor="speed">Speed</label>
          <Field id="speed" name="speed" as="select" placeholder="">
            <option value="0.5">0.5</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </Field>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
