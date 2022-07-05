/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import { css } from 'styled-components';
import { Field, Input, Label } from '@zendeskgarden/react-forms';
import { Submit } from 'layouts/Root/components/Forms';
import { mediaQuery } from '@zendeskgarden/react-theming';
import RequireEditorAccess from './components/RequireEditorAccess';
import ClientSide from './components/ClientSide';

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

const CREATE_SCENE = gql`
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

const ProjectLayout = ({projectId}) => {
  const [projectName, setProjectName] = useState('');
  const [projectDesc, setProjectDesc] = useState('');

  const { data: scenes, loading } = useQuery(SCENES, { variables: { project_id: projectId } });
  const [createScene, { createdScene, creating, error }] = useMutation(CREATE_SCENE, {
    update: cache => {
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'scenes'
      });
    }
  });

  const createDefaultScene = async () => {
    const scene = await createScene({
      variables: {
        project_id: projectId,
        name: "Scene 1",
        description: "",
      }
    });
    // Default scene created, navigate to it
    if (scene?.createScene?.scene?.id) {
      navigate(`/editor/project/${projectId}/scene/${scene?.createScene?.scene?.id}/`);
    }
  }

  useEffect(() => {
    if (!scenes) {
      return;
    }
    if (!scenes.scenes?.length) {
      createDefaultScene();
    } else {
      // Go to first scene
      navigate(`/editor/project/${projectId}/scene/${scenes.scenes[0].id}/`);
    }
  }, [scenes]);

  return (
    <ClientSide>
      <RequireEditorAccess>
        Project {projectId}
      </RequireEditorAccess>
    </ClientSide>
  );
};

export default ProjectLayout;
