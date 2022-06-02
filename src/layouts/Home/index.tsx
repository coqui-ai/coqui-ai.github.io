/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { CtA } from './components/CtA';
import { Users } from './components/Users';
import { TTSModels } from './components/TTSModels';

const HomeLayout: React.FC = () => {
  return (
    <>
      <CtA />
      <Users />
      <TTSModels />
    </>
  );
};

export default HomeLayout;
