/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { css } from 'styled-components';

import { useQuery, useMutation } from '@apollo/client';
import { Add as AddIcon } from 'iconsax-react';

import { Button } from '@zendeskgarden/react-buttons';

import SEO from 'components/SEO';
import Breadcrumb from './Breadcrumb';
import LineEditor from './LineEditor';
import NewSceneModal from './NewSceneModal';
import * as queries from './Queries';
import * as mutations from './Mutations';
import SceneDropdown from './SceneDropdown';

const AudioManager = ({ projectId, sceneId }) => {
  const [isSceneModalOpen, setIsSceneModalOpen] = useState(false);

  const openSceneModal = () => setIsSceneModalOpen(true);
  const closeSceneModal = () => setIsSceneModalOpen(false);

  const { data: project } = useQuery(queries.PROJECT, { variables: { project_id: projectId } });
  const { data: scenes } = useQuery(queries.SCENES, { variables: { project_id: projectId } });
  const { data: scene } = useQuery(queries.SCENE, { variables: { scene_id: sceneId } });
  const { data: lines } = useQuery(queries.LINES, { variables: { scene_id: sceneId } });
  const { data: emotions } = useQuery(queries.EMOTIONS);
  const { data: speakers } = useQuery(queries.SPEAKERS);

  const [createLine, { createdLine, creating, error }] = useMutation(mutations.CREATE_LINE, {
    update: cache => {
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'lines',
        args: { scene_id: scene.id }
      });
    }
  });

  const newLine = () => {
    createLine({
      variables: {
        scene_id: sceneId,
        text: "New line",
        speed: 1.0,
        emotion_id: "7b56cb9e-735c-4c37-8540-6ad62c380155", // Neutral
        speaker_id: "f536ac80-3068-40d8-9f62-9d3428cab6b9",
        emotion_intensity: 1.0,
      }
    });
  };

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
      {lines?.lines?.length > 0 ? (
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
      ) : (
        <div css={css`margin: ${p => p.theme.space.base * 4}px;`}>
          <Button
            disabled={creating}
            onClick={newLine}
          >
            <Button.StartIcon>
              <AddIcon color="#ed8f1c" />
            </Button.StartIcon>
            Add New Line
          </Button>
        </div>
      )}
    </>
  );
};

export default AudioManager;
