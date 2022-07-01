/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import styled, { css } from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Field, Input, Label } from '@zendeskgarden/react-forms';
import { Submit } from 'layouts/Root/components/Forms';

const LINES = gql`
  query lines($scene_id: String!) {
    lines(scene_id: $scene_id) {
      id
      text
      speaker {
        id
        name
      }
      emotion {
        id
        name
      }
      emotion_intensity
      speed
      takes {
        id
        audio_url
      }
    }
  }
`;

const EMOTIONS = gql`{
  emotions {
    id
    name
  }
}`;

const SPEAKERS = gql`{
  speakers {
    id
    name
  }
}`;

const CREATE_LINE = gql`
  mutation createLine($scene_id: String!, $text: String!, $speaker_id: String!, $emotion_id: String!, $speed: Float!, $emotion_intensity: Float!) {
    createLine(scene_id: $scene_id, text: $text, speaker_id: $speaker_id, emotion_id: $emotion_id, speed: $speed, emotion_intensity: $emotion_intensity) {
      line {
        id
        text
      }
      take {
        id
        audio_url
      }
    }
  }
`;

const AudioManager = ({ project_id, scene_id }) => {
  const { data: emotions } = useQuery(EMOTIONS);
  const { data: speakers } = useQuery(SPEAKERS);
  const { data: lines } = useQuery(LINES, { variables: { scene_id } });
  const [createLine, { createdLine, creating, error }] = useMutation(CREATE_LINE, {
    update: cache => {
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'lines',
        args: { scene_id }
      });
    }
  });

  const [lineText, setLineText] = useState('');

  const submitForm = () => {
    if (!lineText) {
      return false;
    }

    createLine({
      variables: {
        scene_id,
        text: lineText,
        speed: 1.0,
        emotion_id: "1875abba-17c2-4e03-9382-36448972d7c9",
        speaker_id: "f78d46da-b51a-4d26-9003-d3dd69430b81",
        emotion_intensity: 1.0,
      }
    });

    return true;
  };

  return (
    <>
      <p>Project {project_id} - Scene {scene_id}</p>
      <p>
        Lines:
        <ul>
        {lines?.lines?.map(l => (<li key={l.id}>{l.id} - {l.text} - {l.takes?.length > 0 && <audio src={l.takes[0].audio_url} controls></audio>}</li>))}
        </ul>
      </p>
      <p>
        Emotions:
        <ul>
        {emotions?.emotions.map(e => (<li key={e.name}>{e.name}</li>))}
        </ul>
      </p>
      <p>
        Speakers:
        <ul>
        {speakers?.speakers.map(s => (<li key={s.name}>{s.name}</li>))}
        </ul>
      </p>
      <form
        onSubmit={e => {
          e.preventDefault();
          submitForm();
        }}
      >
        <p>Create new line</p>
        <Field>
          <Label>Text</Label>
          <Input value={lineText} onChange={e => setLineText(e.target.value)}/>
        </Field>
        <Submit loading={creating} onClick={submitForm}>Create line</Submit>
      </form>
    </>
  );
};

export default AudioManager;
