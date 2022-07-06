/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import { useProfile } from 'utils/auth';
import { AcceptTerms } from 'layouts/Auth/components/registration/AcceptTerms';
import { CompleteProfile } from 'layouts/Auth/components/registration/CompleteProfile';
import { VerifyEmail } from 'layouts/Auth/components/registration/VerifyEmail';
import { SignInForm } from 'layouts/Auth/components/SignInForm';

const ClientOnly = ({ children }) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDisplay(true);
    }
  }, []);

  if (!display) return null;

  return children;
};

const RequireAuth = ({ children }) => {
  const { data: profile, loading, error } = useProfile();

  // fixme
  if (loading) return '';

  if (error || !profile) {
    return (
      <ClientOnly>
        <SignInForm />
      </ClientOnly>
    );
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

  return children;
};

export default RequireAuth;
