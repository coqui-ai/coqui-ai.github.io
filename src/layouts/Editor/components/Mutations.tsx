/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
  mutation createProject($name: String!, $description: String!) {
    createProject(name: $name, description: $description) {
      errors {
        field
        errors
      }
      project {
        id
        name
        description
        created_at
      }
    }
  }
`;

export const CREATE_SCENE = gql`
  mutation createScene($project_id: String!, $name: String!, $description: String!) {
    createScene(project_id: $project_id, name: $name, description: $description) {
      errors {
        field
        errors
      }
      scene {
        id
        name
        description
        created_at
      }
    }
  }
`;

export const CREATE_LINE = gql`
  mutation createLine($scene_id: String!, $text: String!, $speaker_id: String!, $emotion_id: String!, $speed: Float!, $emotion_intensity: Float!) {
    createLine(scene_id: $scene_id, text: $text, speaker_id: $speaker_id, emotion_id: $emotion_id, speed: $speed, emotion_intensity: $emotion_intensity) {
      line {
        id
      }
      take {
        id
        text
        audio_url
      }
    }
  }
`;

export const CREATE_TAKE = gql`
  mutation createTake($line_id: String!, $text: String!, $speaker_id: String!, $emotion_id: String!, $speed: Float!, $emotion_intensity: Float!) {
    createTake(line_id: $line_id, text: $text, speaker_id: $speaker_id, emotion_id: $emotion_id, speed: $speed, emotion_intensity: $emotion_intensity) {
      line {
        id
      }
      take {
        id
        text
        saved
        audio_url
      }
    }
  }
`;

export const DELETE_LINE = gql`
  mutation deleteLine($line_id: String!) {
    deleteLine(line_id: $line_id) {
      success
      errors
    }
  }
`;
