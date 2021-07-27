/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Jobs } from './components/Jobs';
import { FullBleedImage } from './components/FullBleedImage';

const JobsLayout: React.FC = () => {
  return (
    <>
      <FullBleedImage />
      <Jobs />
    </>
  );
};

export default JobsLayout;
