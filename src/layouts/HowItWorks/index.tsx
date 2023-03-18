/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Link } from 'gatsby';
import { Blogs } from 'layouts/Home/components/Blogs/Blogs';
import { CitedBy } from 'layouts/Home/components/CitedBy';
import { Contact } from 'layouts/Home/components/Contact/Contact';
import { Pricing } from 'layouts/Home/components/Pricing/Pricing';
import { FixedNav } from 'layouts/Home/FixedNav/FixedNav';
import { Footer } from 'layouts/Root/components/Footer/Footer';
import React, { useState } from 'react';
import { css } from 'styled-components';
import { FAQ } from './components/FAQ/FAQ';
import { Hero } from './components/Hero/Hero';
import { Socials } from './components/Socials/Socials';
import { Solution } from './components/Solution/Solution';
import { solutionData } from './data/solutionsData';
import { solutionsImagesLookup } from './data/solutionsImageLookup';

const navLinks: JSX.Element = (
  <>
    <Link to="#video-game-developers">
      <li>Solution 1</li>
    </Link>
    <Link to="#post-production">
      <li>Solution 2</li>
    </Link>
    <Link to="#voiceover">
      <li>Solution 3</li>
    </Link>
    <Link to="#resources">
      <li>Resources</li>
    </Link>
    <Link to="#socials">
      <li>Socials Media</li>
    </Link>
    <Link to="#pricing">
      <li>Pricing</li>
    </Link>
    <Link to="#contact">
      <li>Contact Us</li>
    </Link>
    <Link to="#blogs">
      <li>Blogs</li>
    </Link>
  </>
);

export const HowItWorksLayout = () => {
  const [sectImageOne, setSectImageOne] = useState<{
    imageSrc: any;
    caption: string;
  }>(solutionsImagesLookup['Audio Manager']);
  const [sectImageTwo, setSectImageTwo] = useState<{
    imageSrc: any;
    caption: string;
  }>(solutionsImagesLookup['Voice Clone Person']);
  const [sectImageThree, setSectImageThree] = useState<{
    imageSrc: any;
    caption: string;
  }>(solutionsImagesLookup['AI Voice']);

  const s1cb = (src: { imageSrc: any; caption: string }) => setSectImageOne(src);
  const s2cb = (src: { imageSrc: any; caption: string }) => setSectImageTwo(src);
  const s3cb = (src: { imageSrc: any; caption: string }) => setSectImageThree(src);

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
      {solutionData.map((s, i) => {
        if (i === 0) return <Solution key={i} index={i} {...s} image={sectImageOne} imgCH={s1cb} />;
        if (i === 1) return <Solution key={i} index={i} {...s} image={sectImageTwo} imgCH={s2cb} />;
        return <Solution key={i} index={i} {...s} image={sectImageThree} imgCH={s3cb} />;
      })}
      <FAQ />
      <Socials />
      <Pricing />
      <Contact />
      <Blogs />
      <Footer />
    </div>
  );
};

export default HowItWorksLayout;
