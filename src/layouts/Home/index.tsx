/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Newsletter } from './components/Newsletter';
import { Foundation } from './components/Foundation';

const HomeLayout: React.FC = () => {
  return (
    <>
      <Newsletter />
      <Foundation />
    </>
  );
};

export default HomeLayout;
