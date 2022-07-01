/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useProfile } from 'utils/auth';
import RequireAuth from 'layouts/Auth/components/RequireAuth';

const RequireEditorAccess = ({ children }) => {
  const { data: profile, loading, error } = useProfile();

  if (error) {
    return 'error';
  }

  if (!profile) {
    return 'no profile';
  }

  if (!profile.can_access_editor) {
    return 'not allowed';
  }

  return (
    <RequireAuth>
      {children}
    </RequireAuth>
  );
};

export default RequireEditorAccess;
