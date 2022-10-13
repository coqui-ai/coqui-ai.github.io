/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import fetch from 'isomorphic-fetch';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Profile: { keyFields: [] }
    }
  }),
  link: createUploadLink({
    uri: `${process.env.GATSBY_BACKEND_URL}/graphql/`,
    fetchOptions: {
      referrerPolicy: 'unsafe-url'
    },
    fetch
  })
});

export default client;
