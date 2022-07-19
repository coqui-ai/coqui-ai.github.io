/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import RootLayout from 'layouts/Root';
import ProjectListLayout from 'layouts/Editor';
import GogleAnalyticsCookieConsent from 'components/Cookies';
import SEO from 'components/SEO';

const EditorPage = ({ project_id }) => {
  return (
    <RootLayout hasSkipNav={false}>
      <SEO title="My Projects" />
      <ProjectListLayout/>
      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default EditorPage;
