/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useProfile, Profile } from '../../utils/auth';
import { AcceptTerms } from 'layouts/Auth/components/registration/AcceptTerms';
import { CompleteProfile } from 'layouts/Auth/components/registration/CompleteProfile';
import { VerifyEmail } from 'layouts/Auth/components/registration/VerifyEmail';
import { SignInForm } from 'layouts/Auth/components/SignInForm';

export const ProfileContext = React.createContext<Profile>(null);

export const RequireAuth = ({ children }) => {
  const { data: profile, loading, error } = useProfile();

  // fixme
  if (loading) return <div></div>;

  if (error || !profile) {
    return <SignInForm />;
  } // TODO: error-specific behaviour?

  if (!profile.personal_name || !profile.organization_name) {
    return <CompleteProfile profile={profile} />;
  }

  if (!profile.terms_accepted) {
    return <AcceptTerms />;
  }

  if (!profile.email_validated) {
    return <VerifyEmail />;
  }

  return <ProfileContext.Provider value={profile}>{children}</ProfileContext.Provider>;
};
