/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { RequireAuth, ProfileContext } from './RequireAuth';

export const Profile: React.FC = () => (
  <RequireAuth>
    <ProfileContext.Consumer>
      {profile => {
        return JSON.stringify(profile) || '';
      }}
    </ProfileContext.Consumer>
  </RequireAuth>
);
