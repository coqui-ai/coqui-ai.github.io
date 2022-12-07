/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import GogleAnalyticsCookieConsent from 'components/Cookies';
import SEO from 'components/SEO';
import { PricingLayout } from 'layouts/Home';
import RootLayout from 'layouts/Root';
import React, { useEffect } from 'react';
import { consentedToGoogleAnalytics } from 'utils/GoogleAnalytics';

const PricingPage = () => {
  useEffect(() => {
    consentedToGoogleAnalytics();
  });

  return (
    <RootLayout hasSkipNav={false}>
      <SEO />
      <PricingLayout />
      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default PricingPage;
