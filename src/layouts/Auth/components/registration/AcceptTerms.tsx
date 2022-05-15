/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { RequireAuth, ProfileContext } from './RequireAuth';

const ACCEPT_TERMS = gql`
  mutation {
    updateProfile(terms_accepted: true) {
      errors {
        field
        errors
      }
      profile {
        terms_accepted
      }
    }
  }
`;

export const AcceptTerms: React.FC = () => {
  const [acceptTerms, { loading, error }] = useMutation(ACCEPT_TERMS);
  const [isChecked, setChecked] = useState(false);

  return (
    <div>
      terms terms
      <input type="checkbox" checked={isChecked} onChange={e => setChecked(e.target.checked)} />
      <button disabled={!isChecked} onClick={acceptTerms}>
        okay
      </button>
    </div>
  );
};
