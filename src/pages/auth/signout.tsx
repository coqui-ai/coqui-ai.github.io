/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { useLogoutEffect } from 'utils/auth';

const SignOutPage: React.FC = () => {
  const [logout] = useLogoutEffect();

  useEffect(() => {
    logout();
    navigate('/auth/signin');
  });

  return <div>Logging out...</div>;
};

export default SignOutPage;
