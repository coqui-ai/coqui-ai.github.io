/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import ReactGA from 'react-ga';
import { getCookieConsentValue } from 'react-cookie-consent';

export const consentedToGoogleAnalytics = () => {
  if (getCookieConsentValue()) {
    ReactGA.initialize('UA-191579390-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
};
