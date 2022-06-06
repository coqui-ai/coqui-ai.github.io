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
import { Profile } from 'layouts/Auth/components/Profile';
import { RequireAuth } from 'components/RequireAuth';

const ProfilePage: React.FC = () => {
  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  return (
    <RootLayout hasSkipNav={false} showVoiceSearch={true}>
      <SEO />
      <RequireAuth>
        <Profile />
      </RequireAuth>
      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default ProfilePage;