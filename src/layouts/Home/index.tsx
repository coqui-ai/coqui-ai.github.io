/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { YourTTS } from './components/YourTTS';
import { News } from './components/News';

const HomeLayout: React.FC = () => {
  return (
    <>
      <YourTTS />
      <News />
    </>
  );
};

export default HomeLayout;
