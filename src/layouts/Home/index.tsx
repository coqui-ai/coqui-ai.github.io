/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { CtA } from './components/CtA';
import { Features } from './components/Features';
import { GetStartedCtA } from './components/GetStartedCta';
import { PricingTable } from './components/PricingTable';
import { UsersSection } from './components/Users';
import { WhyCoqui } from './components/WhyCoqui';

export const HomeLayout = () => {
  return (
    <>
      <CtA />
      <Features />
      <WhyCoqui />
      <GetStartedCtA />
    </>
  );
};

export const PricingLayout = () => {
  return (
    <>
      <PricingTable />
      <UsersSection />
      <WhyCoqui />
    </>
  );
};

export default HomeLayout;
