/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import * as Sentry from '@sentry/browser';
import { useMutation, gql, useQuery, useApolloClient } from '@apollo/client';
import createPersistedState from 'use-persisted-state';

const useAuthState = createPersistedState('auth');
const useProfileState = createPersistedState('profile');

export function useRedirectToNewDomain() {
  useEffect(() => {
    const subPath = window.location.pathname + window.location.search;

    localStorage.removeItem('profile');

    // eslint-disable-next-line no-negated-condition
    if (!localStorage.getItem('auth')) {
      window.location.replace(process.env.GATSBY_BACKEND_URL + subPath);
    } else {
      const form = document.createElement('form');

      document.body.appendChild(form);
      form.method = 'post';
      form.action = `${process.env.GATSBY_BACKEND_URL}/reauth/`;

      const page = document.createElement('input');

      page.type = 'hidden';
      page.name = 'location';
      page.value = subPath;
      form.appendChild(page);

      const data = document.createElement('input');

      data.type = 'hidden';
      data.name = 'authdata';
      data.value = localStorage.getItem('auth');
      form.appendChild(data);

      form.submit();
      localStorage.removeItem('auth');
    }
  });
}

export function useAuth() {
  const [state] = useAuthState();

  if (!state?.token || !state?.profile?.id) return null;

  Sentry.setUser(state.profile);

  return state;
}

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      refresh_token
      payload

      profile {
        id
        email
      }
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
      can_access_editor
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

  if (!auth || error) return { data: null, error: 'No logged in' };

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

  const { data, error } = useQuery<{ profile: Profile }>(PROFILE, {
    skip: !auth
  });

  if (!auth || error) return false;

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

      if (authdata.data.tokenAuth.token) {
        setAuthState(authdata.data.tokenAuth);

        client.resetStore();
      }
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
