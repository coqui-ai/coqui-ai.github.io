/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';

import RequireEditorAccess from './components/RequireEditorAccess';
import ClientSide from './components/ClientSide';
import AudioManager from './components/AudioManager';

const SceneLayout = ({project_id, scene_id}) => {
  return (
    <ClientSide>
      <RequireEditorAccess>
        <AudioManager project_id={project_id} scene_id={scene_id}/>
      </RequireEditorAccess>
    </ClientSide>
  );
};

export default SceneLayout;
