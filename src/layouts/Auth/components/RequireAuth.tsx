/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useProfile, Profile } from '../../../../utils/auth';
import { AcceptTerms } from './registration/AcceptTerms';
import { CompleteProfile } from './registration/CompleteProfile';
import { VerifyEmail } from './registration/VerifyEmail';
import { SignInForm } from './SignInForm';

export const ProfileContext = React.createContext<Profile>(null);

export const RequireAuth = ({ children }) => {
  const { data, loading, error } = useProfile();

  if (loading) return 'Loading...';
  if (error || !data) {
    return <SignInForm />;
  } // TODO: error-specific behaviour?

  console.log(data);

  // if (!data.email_validated) {
  //   return <VerifyEmail />;
  // }
  if (!data.terms_accepted) {
    return <AcceptTerms />;
  }
  if (!data.personal_name || !data.organization_name) {
    return <CompleteProfile />;
  }

  return <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>;
};
