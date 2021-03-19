/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Name } from './components/Name';
import { Motto } from './components/Motto';
import { Story } from './components/Story';
import { Vision } from './components/Vision';
import { FullBleedImage1 } from './components/FullBleedImage1';
import { FullBleedImage2 } from './components/FullBleedImage2';

const AboutLayout: React.FC = () => {
  return (
    <>
      <Motto />
      <Vision />
      <FullBleedImage1 />
      <Story />
      <FullBleedImage2 />
      <Name />
    </>
  );
};

export default AboutLayout;
