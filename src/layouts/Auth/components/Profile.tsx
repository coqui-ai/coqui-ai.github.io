/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { ProfileContext } from '../../../../utils/auth';

export const Profile: React.FC = () => (
  <ProfileContext.Consumer>
    {profile => {
      return JSON.stringify(profile) || '';
    }}
  </ProfileContext.Consumer>
);
