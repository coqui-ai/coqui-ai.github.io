/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Loading } from 'layouts/Root/components/Styled';

const SAMPLE = gql`
  query Sample($id: String!) {
    sample(id: $id) {
      id
      audio_url
    }
  }
`;

export const WaitForSampleGeneration = ({ loading, sample, children }) => {
  const { data, startPolling, stopPolling } = useQuery(SAMPLE, {
    variables: {
      id: sample.id
    },
    fetchPolicy: 'network-only',
    skip: !!sample.audio_url
  });

  const smpl = sample.audio_url ? sample : data?.sample;

  useEffect(() => {
    if (smpl?.audio_url) {
      stopPolling();
    } else {
      startPolling(10000);
    }
  });

  if (smpl?.audio_url) {
    return children(smpl);
  }

  return loading || <Loading />;
};
