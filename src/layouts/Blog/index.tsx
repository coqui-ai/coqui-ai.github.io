/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Mauerwerk } from './components/Mauerwerk';

const BlogLayout: React.FC<{
  navs: Record<string, unknown>;
  images: any;
}> = ({ navs, images }) => {
  return <Mauerwerk navs={navs} images={images} />;
};

export default BlogLayout;
