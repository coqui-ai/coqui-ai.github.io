/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { Button } from '@zendeskgarden/react-buttons';
import { StyledNavigationLink } from './StyledNavigationLink';
import { getColor } from '@zendeskgarden/react-theming';

export const TryNowButton: React.FC = () => {
  return (
    <StyledNavigationLink to="/auth/signup">
      <Button
        css={css`
          border-width: 0;
          background-color: ${p => getColor('yellow', 600, p.theme)};
          color: #fff;
        `}
      >
        Try now for free
      </Button>
    </StyledNavigationLink>
  );
};
