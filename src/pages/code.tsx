/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import SEO from 'components/SEO';
import RootLayout from 'layouts/Root';
import CodeLayout from 'layouts/Code';

const CodePage: React.FC = () => {
  return (
    <RootLayout>
      <SEO title="Code " />
      <CodeLayout />
    </RootLayout>
  );
};

export default CodePage;
