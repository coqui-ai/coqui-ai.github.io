/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Button } from '@zendeskgarden/react-buttons';
import { getColor } from '@zendeskgarden/react-theming';
import React from 'react';
import { FC } from 'react';
import { css } from 'styled-components';
import { StyledNavigationLink } from './StyledNavigationLink';

type ButtonType = {
  text: string;
  textColor?: string;
  path: string;
  fullWidth?: boolean;
};

export const TryNowButton = ({ ...rest }) => {
  return (
    <StyledNavigationLink to={`${process.env.GATSBY_BACKEND_URL}/auth/signup`} {...rest}>
      <Button
        css={css`
          border-width: 0;
          background-color: ${p => getColor('yellow', 600, p.theme)};
          color: #fff;
          border-radius: 30px;
          font-weight: 400;
          padding: 18px 24px;
        `}
      >
        Try now for free
      </Button>
    </StyledNavigationLink>
  );
};

export const PrimaryButton: FC<ButtonType> = ({ text, path, fullWidth }) => {
  return (
    <StyledNavigationLink
      to={path}
      css={css`
        width: ${fullWidth ? '100%' : ''};
      `}
    >
      <Button
        css={css`
          border-width: 0;
          background-color: ${p => getColor('yellow', 600, p.theme)};
          color: #fff;
          border-radius: 30px;
          font-weight: 400;
          padding: 18px 24px;
          width: ${fullWidth ? '100%' : ''};
        `}
      >
        {text}
      </Button>
    </StyledNavigationLink>
  );
};

export const SecondaryButton: FC<ButtonType> = ({ text, textColor, path, fullWidth }) => {
  return (
    <StyledNavigationLink
      to={path}
      css={css`
        width: ${fullWidth ? '100%' : ''};
      `}
    >
      <Button
        css={css`
          border: 2px solid ${p => getColor('yellow', 600, p.theme)};
          background-color: transparent;
          color: ${textColor || '#000'};
          border-radius: 30px;
          font-weight: 400;
          padding: 18px 24px;
          width: ${fullWidth ? '100%' : ''};
        `}
      >
        {text}
      </Button>
    </StyledNavigationLink>
  );
};

export const TertiaryButton: FC<ButtonType> = ({ text, path, fullWidth }) => {
  return (
    <StyledNavigationLink
      to={path}
      css={css`
        width: ${fullWidth ? '100%' : ''};
      `}
    >
      <Button
        css={css`
          border-width: 0;
          background-color: #000000;
          color: #fff;
          border-radius: 30px;
          font-weight: 400;
          padding: 18px 24px;
          width: ${fullWidth ? '100%' : ''};
        `}
      >
        {text}
      </Button>
    </StyledNavigationLink>
  );
};
