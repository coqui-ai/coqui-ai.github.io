/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { css } from 'styled-components';

import { gql, useQuery } from '@apollo/client';
import { Add as AddIcon } from 'iconsax-react';

import { Button } from '@zendeskgarden/react-buttons';

import SEO from 'components/SEO';
import Breadcrumb from './Breadcrumb';
import LineEditor from './LineEditor';
import NewSceneModal from './NewSceneModal';
import SceneDropdown from './SceneDropdown';

const PROJECT = gql`
  query project($project_id: String!) {
    project(id: $project_id) {
      id
      name
      description
      created_at
    }
  }
`;

const SCENES = gql`
  query scenes($project_id: String!) {
    scenes(project_id: $project_id) {
      id
      name
      description
      created_at
    }
  }
`;

const SCENE = gql`
  query scene($scene_id: String!) {
    scene(id: $scene_id) {
      id
      name
      description
      created_at
    }
  }
`;

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

const AudioManager = ({ projectId, sceneId }) => {
  const [isSceneModalOpen, setIsSceneModalOpen] = useState(false);

  const openSceneModal = () => setIsSceneModalOpen(true);
  const closeSceneModal = () => setIsSceneModalOpen(false);

  const { data: project } = useQuery(PROJECT, { variables: { project_id: projectId } });
  const { data: scenes } = useQuery(SCENES, { variables: { project_id: projectId } });
  const { data: scene } = useQuery(SCENE, { variables: { scene_id: sceneId } });
  const { data: lines } = useQuery(LINES, { variables: { scene_id: sceneId } });
  const { data: emotions } = useQuery(EMOTIONS);
  const { data: speakers } = useQuery(SPEAKERS);

  return (
    <>
      <SEO title="Audio Manager" />
      <Breadcrumb
        items={[
          ['My Projects', '/editor/'],
          [project?.project.name, `/editor/project/${projectId}/`],
        ]}
      />
      <div
        css={css`
          border-top: 1px solid #eff7f4;
          border-bottom: 1px solid #eff7f4;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: ${p => p.theme.space.base * 4}px;
          padding: ${p => p.theme.space.base * 2}px ${p => p.theme.space.base * 4}px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <SceneDropdown
            projectId={projectId}
            scenes={scenes?.scenes}
            scene={scene?.scene}
          />
          <Button
            onClick={openSceneModal}
            css={css`
              margin-left: ${p => p.theme.space.base * 4}px;
            `}
          >
            <Button.StartIcon>
              <AddIcon size="64" color="#ED8F1C" />
            </Button.StartIcon>
            Add New Scene
          </Button>
          <NewSceneModal projectId={projectId} isOpen={isSceneModalOpen} close={closeSceneModal} />
          <div
            css={css`
              margin-left: ${p => p.theme.space.base * 4}px;
            `}
          >
            Scene Description: {scene?.scene.description}
          </div>
        </div>
        <Button
          css={css`
            margin-left: ${p => p.theme.space.base * 4}px;
          `}
        >
          Share
        </Button>
      </div>
      <ul css={css`margin: ${p => p.theme.space.base * 4}px;`}>
        {lines?.lines?.map(line => (
          <LineEditor
            key={line.id}
            scene={scene?.scene}
            line={line}
            speakers={speakers?.speakers}
            emotions={emotions?.emotions}
          />
        ))}
      </ul>
    </>
  );
};

export default AudioManager;
