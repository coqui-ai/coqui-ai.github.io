/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Motto } from './components/Motto';
import { Story } from './components/Story';
import { Vision } from './components/Vision';
import { FullBleedImage } from './components/FullBleedImage';

const AboutLayout: React.FC = () => {
  return (
    <>
      <Motto />
      <Vision />
      <FullBleedImage />
      <Story />
    </>
  );
};

export default AboutLayout;
