/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { PALETTE } from '@zendeskgarden/react-theming';

const GogleAnalyticsCookieConsent: React.FC = () => {
  return (
    <CookieConsent style={{ backgroundColor: PALETTE.green[700] }}>
      We collect and process your personal information for visitor statistics and browsing behavior.{' '}
      <span role="img" aria-label="cookie">
        🍪
      </span>{' '}
    </CookieConsent>
  );
};

export default GogleAnalyticsCookieConsent;
