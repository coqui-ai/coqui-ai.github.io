/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';

import { Breadcrumb as Breadcrumbs } from '@zendeskgarden/react-breadcrumbs';
import { Anchor } from '@zendeskgarden/react-buttons';

const Breadcrumb = ({ items }) => {
  return (
    <div
      css={css`
        background-color: #eff7f4;
        border-top: 1px solid #5eae91;
        border-bottom: 1px solid #5eae91;
        padding: ${p => p.theme.space.base * 4}px ${p => p.theme.space.base * 4}px;
      `}
    >
      <Breadcrumbs>
        {items?.map(([text, href]) => <Anchor key={href} href={href}>{text}</Anchor>)}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
