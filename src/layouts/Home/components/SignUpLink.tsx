/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useLocation } from '@reach/router';
import queryString from 'query-string';

export const useSignupLink = () => {
  const location = useLocation();
  const parsedParameters = queryString.parse(location.search);
  const link = parsedParameters.lmref
    ? `${process.env.GATSBY_BACKEND_URL}/auth/signup?lmref=${parsedParameters.lmref}`
    : `${process.env.GATSBY_BACKEND_URL}/auth/signup`;

  return link;
};
