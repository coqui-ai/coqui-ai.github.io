/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { OVH } from './components/OVH';
import { FullBleedImage } from './components/FullBleedImage';

const OVHLayout: React.FC = () => {
  return (
    <>
      <FullBleedImage />
      <OVH />;
    </>
  );
};

export default OVHLayout;
