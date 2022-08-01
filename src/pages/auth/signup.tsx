/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useRedirectToNewDomain } from 'utils/auth';

const SignUpPage = () => {
  useRedirectToNewDomain();

  return null;
};

export default SignUpPage;
