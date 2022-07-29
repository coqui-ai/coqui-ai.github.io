/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import SEO from 'components/SEO';
import RootLayout from 'layouts/Root';
import GogleAnalyticsCookieConsent from 'components/Cookies';
import { gql, useMutation } from '@apollo/client';
import { navigate } from 'gatsby';
import { CenterWell } from 'layouts/Root/components/Styled';
import { useProfile, useRedirectToNewDomain } from 'utils/auth';

const VERIFY_EMAIL = gql`
  mutation verifyEmail($token: String!) {
    verifyEmail(token: $token) {
      errors {
        field
        errors
      }
      status
    }
  }
`;

const TokenPage: React.FC = ({ token }) => {
  useRedirectToNewDomain();

  return null;
};

export default TokenPage;
