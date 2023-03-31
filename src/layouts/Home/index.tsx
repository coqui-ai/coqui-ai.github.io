/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Link } from 'gatsby';
import { Footer } from 'layouts/Root/components/Footer/Footer';
import React from 'react';
import { css } from 'styled-components';
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
import { SavingTime } from './components/SavingTime/SavingTime';
import { SyntheticVoices } from './components/SyntheticVoices/SyntheticVoices';
import { UsersSection } from './components/Users';
import { Voices } from './components/Voices';
import { Why } from './components/Why';
import { WhyCoqui } from './components/WhyCoqui';
import { FixedNav } from './FixedNav/FixedNav';

const navLinks: JSX.Element = (
  <>
    <Link to="#features-and-apps">
      <li>Features</li>
    </Link>
    <Link to="#why">
      <li>Why Coqui?</li>
    </Link>
    <Link to="#ai-voices">
      <li>AI Voices</li>
    </Link>
    <Link to="#pricing">
      <li>Pricing</li>
    </Link>
    <Link to="#synthetic-voices">
      <li>Samples</li>
    </Link>
    <Link to="#about-us">
      <li>About Us</li>
    </Link>
    <Link to="#faq">
      <li>FAQ</li>
    </Link>
    <Link to="#contact">
      <li>Contact Us</li>
    </Link>
    <Link to="#blogs">
      <li>Blogs</li>
    </Link>
    <Link to={`${process.env.GATSBY_BACKEND_URL}/auth/signin`}>
      <li>Try for free</li>
    </Link>
    <Link to="#footer">
      <li>Other links</li>
    </Link>
    <Link to="/how-it-works">
      <li>How It Works</li>
    </Link>
  </>
);

export const HomeLayout = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        position: relative;
      `}
    >
      <FixedNav links={navLinks} />
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
      <SavingTime />
      {/* <CtA />
      <Features />
      <Voices />
      <WhyCoqui />
      <GetStartedCtA /> */}
    </div>
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
