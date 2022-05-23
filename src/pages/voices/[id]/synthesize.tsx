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
import { RequireAuth } from 'components/RequireAuth';
import { Synthesize } from 'layouts/Voices/components/Synthesize';

const SynthesizePage: React.FC = ({ location, id }) => {
  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  return (
    <RootLayout hasSkipNav={false}>
      <SEO />
      <RequireAuth>
        <Synthesize locationState={location.state} id={id} />
      </RequireAuth>

      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default SynthesizePage;
