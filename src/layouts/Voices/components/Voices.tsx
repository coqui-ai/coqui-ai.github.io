/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'gatsby';

const VOICES = gql`
  {
    voices {
      id
      name
    }
  }
`;

export const Voices: React.FC = () => {
  const { data, loading, error } = useQuery(VOICES);

  if (loading) return 'loading';
  if (error) return <pre>{JSON.stringify(error)}</pre>;

  return (
    <div>
      all my voices <Link to="/voices/create">Create</Link>
      <hr />
      <ul>
        {data.voices.map(voice => (
          <li>
            <Link to={`/voices/${voice.id}/synthesize`}>
              {voice.name} {voice.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
