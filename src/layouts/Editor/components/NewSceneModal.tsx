/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { css } from 'styled-components';

import { gql, useMutation } from '@apollo/client';
import { navigate } from 'gatsby';
import { Field, Input, Label, Textarea } from '@zendeskgarden/react-forms';
import { DrawerModal } from '@zendeskgarden/react-modals';

import { Submit } from 'layouts/Root/components/Forms';
import * as mutations from './Mutations';

const NewSceneModal = ({ projectId, isOpen, close }) => {
  const [sceneName, setSceneName] = useState('');
  const [sceneDesc, setSceneDesc] = useState('');

  const [createScene, { createdScene, creating, error }] = useMutation(mutations.CREATE_SCENE, {
    update: cache => {
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'scenes'
      });
    }
  });

  const submitForm = async () => {
    if (!sceneName) {
      return false;
    }

    const scene = await createScene({
      variables: {
        project_id: projectId,
        name: sceneName,
        description: sceneDesc,
      }
    });

    if (scene?.data?.createScene?.scene?.id) {
      close();
      navigate(`/editor/project/${projectId}/scene/${scene?.data?.createScene?.scene?.id}/`);
    }

    return true;
  };

  return (
    <DrawerModal isOpen={isOpen} onClose={close}>
      <DrawerModal.Header>New Scene</DrawerModal.Header>
      <DrawerModal.Body>
        <form
          onSubmit={e => {
            e.preventDefault();
            submitForm();
          }}
        >
          <Field css={css`margin-bottom: ${p => p.theme.space.sm};`}>
            <Label hidden>Scene name</Label>
            <Input
              placeholder="Give your new scene a name"
              value={sceneName}
              onChange={e => setSceneName(e.target.value)}
            />
          </Field>
          <Field>
            <Label hidden>Scene description</Label>
            <Textarea
              placeholder="Description here (Optional)"
              value={sceneDesc}
              onChange={e => setSceneDesc(e.target.value)}
              minRows={10}
              maxRows={10}
            />
          </Field>
          <Submit loading={creating}>Create Scene</Submit>
        </form>
      </DrawerModal.Body>
      <DrawerModal.Close />
    </DrawerModal>
  );
};

export default NewSceneModal;
