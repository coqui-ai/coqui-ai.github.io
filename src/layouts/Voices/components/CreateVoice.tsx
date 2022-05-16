/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Field, Input, Label, Radio } from '@zendeskgarden/react-forms';

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

export const CreateVoice: React.FC = () => {
  const [sourceValue, setSourceValue] = useState('record');
  const [nameValue, setNameValue] = useState('');
  const [fileValue, setFileValue] = useState('');

  const [createVoice, { data, loading, error }] = useMutation(CREATE_VOICE);

  if (loading) return 'loading';

  const submitForm = () => {
    if (!nameValue) {
      return false;
    }

    createVoice({ variables: { name: nameValue, voice: fileValue } });
  };

  const onFileChange = e => {
    if (e.target.validity.valid) {
      setFileValue(e.target.files[0]);
    }
  };

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
      <pre>{JSON.stringify(error)}</pre>
      <Field>
        <Radio
          name="source"
          value="record"
          checked={sourceValue === 'record'}
          onChange={e => setSourceValue(e.target.value)}
        >
          <Label>Record</Label>
        </Radio>
      </Field>
      <Field>
        <Radio
          name="source"
          value="upload"
          checked={sourceValue === 'upload'}
          onChange={e => setSourceValue(e.target.value)}
        >
          <Label>Upload</Label>
        </Radio>
      </Field>
      <input type="file" required onChange={onFileChange} />
      <Field>
        <Label>Name your voice</Label>
        <Input value={nameValue} onChange={e => setNameValue(e.target.value)} />
      </Field>
      <button onClick={submitForm}>Proceed to use your voice</button>
    </div>
  );
};
