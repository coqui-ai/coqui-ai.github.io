/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Hero } from './components/Hero';
import { PricingTable } from './components/PricingTable';
import { UsersSection } from './components/Users';
import { Voices } from './components/Voices';

export const HomeLayout = () => {
  return (
    <>
      <Hero />
      <Voices />
    </>
  );
};

export const PricingLayout = () => {
  return (
    <>
      <PricingTable />
      <UsersSection />
    </>
  );
};

export default HomeLayout;
