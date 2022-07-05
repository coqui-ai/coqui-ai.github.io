/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { gql } from '@apollo/client';

export const PROJECTS = gql`{
  projects {
    id
    name
    description
    created_at
  }
}`;

export const PROJECT = gql`
  query project($project_id: String!) {
    project(id: $project_id) {
      id
      name
      description
      created_at
    }
  }
`;

export const SCENES = gql`
  query scenes($project_id: String!) {
    scenes(project_id: $project_id) {
      id
      name
      description
      created_at
    }
  }
`;

export const SCENE = gql`
  query scene($scene_id: String!) {
    scene(id: $scene_id) {
      id
      name
      description
      created_at
    }
  }
`;

export const LINES = gql`
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

export const EMOTIONS = gql`{
  emotions {
    id
    name
  }
}`;

export const SPEAKERS = gql`{
  speakers {
    id
    name
  }
}`;
