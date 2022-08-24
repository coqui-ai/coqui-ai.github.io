/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { CtA } from './components/CtA';
import { Video } from './components/Video';
import { Features } from './components/Features';

const SAWLayout: React.FC = () => {
  return (
    <>
      <CtA />
      <Video />
      <Features />
    </>
  );
};

export default SAWLayout;
