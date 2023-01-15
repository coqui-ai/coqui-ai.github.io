/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor } from '@zendeskgarden/react-theming';
import { LG, MD } from '@zendeskgarden/react-typography';
import { ReactComponent as ArrowStroke } from '@zendeskgarden/svg-icons/src/16/arrow-left-stroke.svg';
import { Link } from 'gatsby';
import React from 'react';
import { css } from 'styled-components';
import { HorizontalRule } from './HorizontalRule';

export const WhyCoquiInset: React.FC<{
  title: string;
  text: string;
  to: string;
}> = ({ title, text, to }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 33px;
        background-color: ${p => getColor('yellow', 100, p.theme)};
        border-radius: 4px;
        width: 220px;
        height: 280px;
        color: #000;
      `}
    >
      <LG isBold>{title}</LG>
      <MD css="margin-top: 24px;">{text}</MD>
      <div css="flex: 1;" />
      <div>
        <HorizontalRule />
        <MD>
          <Link
            to={to}
            css={css`
              color: ${p => getColor('kale', 500, p.theme)};
            `}
          >
            Learn More{' '}
            <ArrowStroke
              css={css`
                transform: scale(-1, 1);
                transform-origin: center;
                vertical-align: text-top;
              `}
            />
          </Link>
        </MD>
      </div>
    </div>
  );
};
