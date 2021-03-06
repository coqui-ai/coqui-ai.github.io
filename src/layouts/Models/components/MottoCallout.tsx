/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import FadeIn from 'react-fade-in';
import { css } from 'styled-components';
import { XXXL } from '@zendeskgarden/react-typography';

export const MottoCallout: React.FC<
  {
    description: string;
  } & HTMLAttributes<HTMLDivElement>
> = ({ description, children, ...props }) => (
  <div {...props}>
    <FadeIn transitionDuration="800">
      <XXXL
        tag="p"
        css={css`
          color: ${p => p.theme.palette.white};
        `}
      >
        {description}
      </XXXL>
    </FadeIn>
    {children}
  </div>
);
