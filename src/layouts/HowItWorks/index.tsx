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
import { Footer } from 'layouts/Root/components/Footer/Footer';
import React, { useState } from 'react';
import { FAQ } from './components/FAQ/FAQ';
import { Hero } from './components/Hero/Hero';
import { Socials } from './components/Socials/Socials';
import { Solution } from './components/Solution/Solution';
import { solutionData } from './data/solutionsData';
import { solutionsImagesLookup } from './data/solutionsImageLookup';

export const HowItWorksLayout = () => {
  const [sectImageOne, setSectImageOne] = useState<string>(
    solutionsImagesLookup['Audio Manager'].imageSrc
  );
  const [sectImageTwo, setSectImageTwo] = useState<string>(
    solutionsImagesLookup['Audio Manager'].imageSrc
  );
  const [sectImageThree, setSectImageThree] = useState<string>(
    solutionsImagesLookup['Audio Manager'].imageSrc
  );

  const s1cb = (src: string) => setSectImageOne(src);
  const s2cb = (src: string) => setSectImageTwo(src);
  const s3cb = (src: string) => setSectImageThree(src);

  return (
    <>
      <Hero />
      <CitedBy />
      {solutionData.map((s, i) => {
        if (i === 0) return <Solution key={i} index={i} {...s} test={sectImageOne} imgCH={s1cb} />;
        if (i === 1) return <Solution key={i} index={i} {...s} test={sectImageTwo} imgCH={s2cb} />;
        return <Solution key={i} index={i} {...s} test={sectImageThree} imgCH={s3cb} />;
      })}
      <FAQ />
      <Socials />
      <Pricing />
      <Contact />
      <Blogs />
      <Footer />
    </>
  );
};

export default HowItWorksLayout;
