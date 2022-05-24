/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Title } from './components/Title';
import { Prices } from './components/Prices';
import { PricesFAQ } from './components/PricesFAQ';
import StandardWidthLayout from 'layouts/StandardWidth';
import { getColor } from '@zendeskgarden/react-theming';

const VideoGamesLayout: React.FC = () => {
  return (
    <>
      <StandardWidthLayout>
        <Title />
      </StandardWidthLayout>
      <div
        css={css`
          background-color: ${p => getColor('yellow', 600, p.theme)};
        `}
      >
        <StandardWidthLayout>
          <Prices />
        </StandardWidthLayout>
      </div>
      <StandardWidthLayout>
        <PricesFAQ />
      </StandardWidthLayout>
    </>
  );
};

export default VideoGamesLayout;
