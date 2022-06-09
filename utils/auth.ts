/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import { useMutation, gql, useQuery, useApolloClient } from '@apollo/client';
import createPersistedState from 'use-persisted-state';

const useAuthState = createPersistedState('auth');
const useProfileState = createPersistedState('profile');

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

const PROFILE = gql`
  {
    profile {
      email
      personal_name
      organization_name
      terms_accepted
      email_validated
    }
  }
`;

export type Profile = {
  email: string;
  personal_name: string;
  organization_name: string;
  terms_accepted?: string;
  email_validated?: string;
};

export const ProfileContext = React.createContext<Profile>(null);

export function useProfile() {
  const auth = useAuth();

  const { data, loading, error, refetch } = useQuery<{ profile: Profile }>(PROFILE, {
    skip: !auth
  });

  if (!auth) return { data: null, error: 'No logged in' };

  return { data: data?.profile, loading, error, refetch };
}

export function useCachedProfile() {
  const { data: profileHook } = useProfile();
  const [profileCache, setProfileCache] = useProfileState();

  useEffect(() => {
    if (profileHook) {
      setProfileCache(profileHook);
    }
  }, [profileHook, setProfileCache]);

  if (!profileHook && !!profileCache) {
    return profileCache;
  }

  return profileHook;
}

export function useProfileIsComplete(): boolean {
  const auth = useAuth();

  const { data } = useQuery<{ profile: Profile }>(PROFILE, {
    skip: !auth
  });

  if (!auth) return false;

  const profile = data?.profile;

  return !!(
    profile &&
    profile.personal_name &&
    profile.organization_name &&
    profile.terms_accepted &&
    profile.email_validated
  );
}

export function useLoginEffect() {
  const [, setAuthState] = useAuthState();
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const client = useApolloClient();

  return [
    async (username, password) => {
      const authdata = await login({ variables: { username, password } });

      setAuthState(authdata.data);
      client.resetStore();
    },
    {
      data,
      loading,
      error
    }
  ];
}

export function useLogoutEffect() {
  const [, setAuthState] = useAuthState();
  const [, setProfileState] = useProfileState();
  const client = useApolloClient();

  return [
    () => {
      setAuthState(null);
      setProfileState(null);
      client.resetStore();
    }
  ];
}
