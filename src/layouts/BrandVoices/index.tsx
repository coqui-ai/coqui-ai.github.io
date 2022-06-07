/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Video } from './components/Video';
import { Clone } from './components/Clone';
import { Import } from './components/Import';
import { SignUp } from './components/SignUp';
import { Deploy } from './components/Deploy';
import { Direct } from './components/Direct';
import StandardWidthLayout from 'layouts/StandardWidth';
import { TextToSpeech } from './components/TextToSpeech';
import { HorizontalRule } from './components/HorizontalRule';
import { FullBleedImage } from './components/FullBleedImage';
import { getColor } from '@zendeskgarden/react-theming';

const BrandVoicesLayout: React.FC = () => {
  return (
    <>
      <FullBleedImage />
      <StandardWidthLayout>
        <TextToSpeech />
      </StandardWidthLayout>
      <div
        css={css`
          background-color: ${p => p.theme.palette.tofu};
        `}
      >
        <StandardWidthLayout>
          <Import />
          <HorizontalRule />
          <Clone />
          <HorizontalRule />
          <Direct />
          <HorizontalRule />
          <Deploy />
        </StandardWidthLayout>
      </div>
      <StandardWidthLayout>
        <Video />
      </StandardWidthLayout>
      <div
        css={css`
          background-color: ${p => getColor('yellow', 600, p.theme)};
        `}
      >
        <StandardWidthLayout>
          <SignUp />
        </StandardWidthLayout>
      </div>
    </>
  );
};

export default BrandVoicesLayout;
