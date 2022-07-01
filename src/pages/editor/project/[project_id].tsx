/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import RootLayout from 'layouts/Root';
import ProjectLayout from 'layouts/Editor/ProjectLayout';
import GogleAnalyticsCookieConsent from 'components/Cookies';

const ProjectPage = ({project_id}) => {
  return (
    <RootLayout hasSkipNav={false}>
      <ProjectLayout project_id={project_id}/>
      <GogleAnalyticsCookieConsent/>
    </RootLayout>
  );
};

export default ProjectPage;
