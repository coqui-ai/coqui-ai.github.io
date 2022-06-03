/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';

export const HorizontalRule: React.FC = () => {
  return (
    <hr
      css={css`
        margin: auto;
        margin-bottom: ${p => p.theme.space.sm};
        color: ${p => getColor('kale', 500, p.theme, 0.8)};
      `}
    />
  );
};
