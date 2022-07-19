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
// import { graphql, useStaticQuery } from 'gatsby';
import GogleAnalyticsCookieConsent from 'components/Cookies';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';
import RequireAuth from 'layouts/Auth/components/RequireAuth';
import { Voices } from 'layouts/Voices/components/Voices';
import { useProfileIsComplete } from 'utils/auth';

const VoicesPage: React.FC = () => {
  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  const isComplete = useProfileIsComplete();

  return (
    <RootLayout hasSkipNav={false} showVoiceSearch={true} grayedBackground={!isComplete}>
      <SEO />
      <RequireAuth>
        <Voices />
      </RequireAuth>

      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default VoicesPage;
