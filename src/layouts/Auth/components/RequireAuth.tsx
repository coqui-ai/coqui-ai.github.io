/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useProfile } from '../../../../utils/auth';
import { SignInForm } from './SignInForm';

export const ProfileContext = React.createContext(null);

export const RequireAuth = ({ children }) => {
  const { data, loading, error } = useProfile();

  if (loading) return 'Loading...';
  if (error || !data) {
    return <SignInForm />;
  } // TODO: error-specific behaviour?

  return <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>;
};
