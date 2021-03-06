/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Data } from './components/Data';
import { Motto } from './components/Motto';

const DataLayout: React.FC = () => {
  return (
    <>
      <Motto />
      <Data />
    </>
  );
};

export default DataLayout;
