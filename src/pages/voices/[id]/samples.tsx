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
import { Link } from 'gatsby';
import { OrangeButton } from 'layouts/Root/components/Styled';
import { MusicPlaylist } from 'iconsax-react';
import GogleAnalyticsCookieConsent from 'components/Cookies';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';
import RequireAuth from 'layouts/Auth/components/RequireAuth';
import { Samples } from 'layouts/Voices/components/Samples';

const SamplesPage: React.FC = ({ id }) => {
  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  return (
    <RootLayout hasSkipNav={false} showVoiceSearch={true}>
      <SEO />
      <RequireAuth>
        <Samples voice_id={id} />
      </RequireAuth>

      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default SamplesPage;
