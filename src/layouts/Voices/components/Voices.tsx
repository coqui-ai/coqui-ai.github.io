/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from '@reach/router';

export const Voices: React.FC = () => (
  <div>
    all my voices <Link to="/voices/create">Create</Link>
  </div>
);
