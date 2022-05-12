/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useMutation, gql } from '@apollo/client';

import createPersistedState from 'use-persisted-state';
const useAuthState = createPersistedState('auth');

export function useAuth() {
  const [state] = useAuthState();

  return state;
}

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      refresh_token
      payload
    }
  }
`;

export function useLoginEffect() {
  const [, setAuthState] = useAuthState();
  const [login, { data, loading, error }] = useMutation(LOGIN);

  return [
    (username, password) => {
      login({ variables: { username, password } }).then(({ data: d }) => setAuthState(d));
    },
    {
      data,
      loading,
      error
    }
  ];
}

export function useLogoutEffect() {
  const [, setState] = useAuthState();

  return [() => setState(null)];
}
