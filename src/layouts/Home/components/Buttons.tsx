/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Button } from '@zendeskgarden/react-buttons';
import { getColor } from '@zendeskgarden/react-theming';
import React, { FC } from 'react';
import { css } from 'styled-components';
import ClientSide from 'utils/ClientSide';
import { useSignupLink } from './SignUpLink';
import { StyledNavigationLink } from './StyledNavigationLink';

export const TryNowButton = ({ ...rest }) => {
  const signupLink = useSignupLink();

  return (
    <ClientSide>
      <StyledNavigationLink to={signupLink} {...rest}>
        <Button
          css={css`
            border-width: 0;
            background-color: ${p => getColor('yellow', 600, p.theme)};
            color: #fff;
            border-radius: 7.2px;
            font-weight: 700;
          `}
        >
          Try now for free
        </Button>
      </StyledNavigationLink>
    </ClientSide>
  );
};

export const PrimaryButton: FC<ButtonType> = ({ text, path, fullWidth, iconSrc }) => {
  return (
    <StyledNavigationLink
      to={path}
      css={css`
        width: ${fullWidth ? '100%' : ''};
        z-index: 2;
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
          :hover {
            border-color: ${p => getColor('yellow', 600, p.theme)};
            background-color: ${p => getColor('yellow', 600, p.theme)};
            color: white;
            opacity: 0.7;
          }
        `}
      >
        {text}{' '}
        {iconSrc && (
          <img
            css={css`
              margin-left: 4px;
              height: 12px;
              width: 12px;
            `}
            src={iconSrc}
            alt="button icon"
          />
        )}
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
