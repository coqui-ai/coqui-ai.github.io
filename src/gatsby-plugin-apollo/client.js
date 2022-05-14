/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import fetch from 'isomorphic-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  const token = JSON.parse(localStorage.getItem('auth'))?.tokenAuth?.token;

  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Profile: { keyFields: [] }
    }
  }),
  link: authLink.concat(
    new HttpLink({
      uri: `${process.env.GATSBY_BACKEND_URL}/graphql/`,
      fetch
    })
  )
});

export default client;
