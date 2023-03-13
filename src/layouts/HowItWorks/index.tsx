/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Blogs } from 'layouts/Home/components/Blogs/Blogs';
import { CitedBy } from 'layouts/Home/components/CitedBy';
import { Contact } from 'layouts/Home/components/Contact/Contact';
import { Pricing } from 'layouts/Home/components/Pricing/Pricing';
import React from 'react';
import { FAQ } from './components/FAQ/FAQ';
import { Hero } from './components/Hero/Hero';
import { Solution } from './components/Solution/Solution';
import { solutionData } from './data/solutionsData';

export const HowItWorksLayout = () => {
  return (
    <>
      <Hero />
      <CitedBy />
      {solutionData.map((s, i) => (
        <Solution key={i} index={i} {...s} />
      ))}
      <FAQ />
      <Pricing />
      <Contact />
      <Blogs />
    </>
  );
};

export default HowItWorksLayout;
