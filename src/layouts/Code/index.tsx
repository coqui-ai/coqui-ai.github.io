/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { STT } from './components/STT';
import { TTS } from './components/TTS';
import { Motto } from './components/Motto';
import { FullBleedImage } from './components/FullBleedImage';

const CodeLayout: React.FC = () => {
  return (
    <>
      <Motto />
      <STT />
      <FullBleedImage />
      <TTS />
    </>
  );
};

export default CodeLayout;
