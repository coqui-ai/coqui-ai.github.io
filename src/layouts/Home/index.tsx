/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Footer } from 'layouts/Root/components/Footer/Footer';
import React from 'react';
import { AboutUs } from './components/AboutUs/AboutUs';
import { AIVoices } from './components/AIVoices/AIVoices';
import { Blogs } from './components/Blogs/Blogs';
import { CitedBy } from './components/CitedBy';
import { Contact } from './components/Contact/Contact';
import { Content } from './components/Content';
import { CtA } from './components/CtA';
import { FAQ } from './components/FAQ/FAQ';
import { Features } from './components/Features';
import { FeaturesAndApps } from './components/FeaturesAndApps';
import { GetStartedCtA } from './components/GetStartedCta';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing/Pricing';
import { PricingTable } from './components/PricingTable';
import { SyntheticVoices } from './components/SyntheticVoices/SyntheticVoices';
import { UsersSection } from './components/Users';
import { Voices } from './components/Voices';
import { Why } from './components/Why';
import { WhyCoqui } from './components/WhyCoqui';

export const HomeLayout = () => {
  return (
    <>
      <Hero />
      <CitedBy />
      <Content />
      <FeaturesAndApps />
      <Why />
      <AIVoices />
      <Pricing />
      <SyntheticVoices />
      <AboutUs />
      <FAQ />
      <Contact />
      <Blogs />
      <Footer />
      {/* <CtA />
      <Features />
      <Voices />
      <WhyCoqui />
      <GetStartedCtA /> */}
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
