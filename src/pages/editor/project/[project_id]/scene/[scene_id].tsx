/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import RootLayout from 'layouts/Root';
import SceneLayout from 'layouts/Editor/SceneLayout';
import GogleAnalyticsCookieConsent from 'components/Cookies';

const ScenePage = ({ project_id, scene_id }) => {
  return (
    <RootLayout hasSkipNav={false}>
      <SceneLayout project_id={project_id} scene_id={scene_id}/>
      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default ScenePage;
