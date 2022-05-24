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
import { useProfile } from '../../../utils/auth';

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
  const [verifyStatus, setVerifyStatus] = useState('verifying');
  const [errorInfo, setErrorInfo] = useState('');
  const [verifyEmail, { verifying }] = useMutation(VERIFY_EMAIL);
  const { refetch } = useProfile();

  useEffect(() => {
    verifyEmail({
      variables: {
        token
      }
    })
      .then(({ data }) => {
        if (data.verifyEmail.errors) {
          setVerifyStatus('error');
          setErrorInfo(data.verifyEmail.errors[0].errors[0]);
        } else {
          refetch();
          setVerifyStatus('verified');
          navigate('/voices');
        }
      })
      .catch(() => {
        setVerifyStatus('error');
        setErrorInfo('');
      });
  }, [token, verifyEmail, refetch]);

  return (
    <RootLayout hasSkipNav={false}>
      <SEO />

      <CenterWell title="Email address verification">
        {verifying || (verifyStatus === 'verifying' && <p>Verifying your email address...</p>)}
        {verifyStatus === 'verified' && <p>Your email address has been verified!</p>}
        {verifyStatus === 'error' && (
          <>
            <p>Error verifying your email address: {errorInfo}</p>
            <p>
              Please{' '}
              <a href="mailto:info@coqui.ai?subject=I can't verify my email address">contact us</a>{' '}
              to solve this.
            </p>
          </>
        )}
      </CenterWell>

      <GogleAnalyticsCookieConsent />
    </RootLayout>
  );
};

export default TokenPage;
