/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { navigate } from 'gatsby';

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
  const [verifyEmail, verifyEmailStatus] = useMutation(VERIFY_EMAIL);

  useEffect(() => {
    verifyEmail({
      variables: {
        token
      }
    }).then(() => {
      navigate('/auth/profile'); // TODO: something better here (right now this redirect leads to a 404, which requires a manual refresh to work)
    });
  });

  return (
    <div>
      <pre>{JSON.stringify([verifyEmailStatus.data, verifyEmailStatus.error])}</pre>
    </div>
  );
};

export default TokenPage;
