/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { navigate } from 'gatsby';
import RequireEditorAccess from './components/RequireEditorAccess';
import ClientSide from './components/ClientSide';
import * as mutations from './components/Mutations';
import * as queries from './components/Queries';

const ProjectLayout = ({projectId}) => {
  const { data: scenes, loading } = useQuery(queries.SCENES, { variables: { project_id: projectId } });
  const [createScene, { createdScene, creating, error }] = useMutation(mutations.CREATE_SCENE, {
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
