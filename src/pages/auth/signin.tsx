/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
// import navs from '../nav/blog';
import SEO from 'components/SEO';
import RootLayout from 'layouts/Root';
import { SignInForm } from 'layouts/Auth/components/SignInForm';

// import { graphql, useStaticQuery } from 'gatsby';
import GogleAnalyticsCookieConsent from 'components/Cookies';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';
import { useRedirectToNewDomain } from 'utils/auth';

const AuthPage: React.FC = () => {
  useRedirectToNewDomain();

  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  return (
    <RootLayout hasSkipNav={false} grayedBackground={true}>
      <SEO />
      <SignInForm />
      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default AuthPage;
