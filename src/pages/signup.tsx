/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import SEO from 'components/SEO';
import RootLayout from 'layouts/Root';
import SignUpLayout from 'layouts/SignUp';
import GogleAnalyticsCookieConsent from 'components/Cookies';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';

const SignUpPage: React.FC = () => {
  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  return (
    <RootLayout>
      <SEO title="SignUp " />
      <SignUpLayout />
      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default SignUpPage;