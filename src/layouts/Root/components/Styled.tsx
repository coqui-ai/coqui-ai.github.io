/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Well, Title } from '@zendeskgarden/react-notifications';
import { Button } from '@zendeskgarden/react-buttons';
import { mediaQuery } from '@zendeskgarden/react-theming';

import { ChartCircle } from 'iconsax-react';

const rotationAnimation = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const Loading = ({ size, marginTop }) => (
  <ChartCircle
    css={`
      animation: ${rotationAnimation} 2s infinite linear;
      height: 47px;
      display: block;
    `}
    style={{
      marginTop: `${marginTop || 39}px auto`
    }}
    size={size || 47}
    color="#FF8A65"
    variant="Bulk"
  />
);

export const CenterContent = styled.div`
  width: 699px;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    width: 349px;
  }
  margin: 33px auto;
`;

export const TitleBar = ({ children }) => (
  <div
    css={css`
      height: 84px;
      border-bottom: 1px solid rgba(194, 200, 204, 0.5);
      display: flex;
      align-items: center;
      padding-left: 57px;

      ${p => mediaQuery('down', 'sm', p.theme)} {
        padding-left: 30px;
      }
    `}
  >
    <h1
      css={css`
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 11px;
      `}
    >
      {children}
    </h1>
  </div>
);

export const OrangeButton = styled(Button)`
  &:hover:enabled {
    background-color: white;
    color: #ed8f1c;
    border-color: #ed8f1c;
  }
  font-weight: 700;
  background-color: #ed8f1c;
  color: white;
  border-color: #ed8f1c;
`;

export const CenterWell = ({ title, children, ...props }) => (
  <Well
    css={css`
      width: 553px;
      margin: 163px auto;
      min-height: 477px;
      padding: 0;
      color: #313940;

      & p {
        text-align: center;
      }

      ${p => mediaQuery('down', 'sm', p.theme)} {
        width: 350px;
        margin: 32px auto;
      }
    `}
    {...props}
  >
    <Title
      css={css`
        border-bottom: 1px solid #c2c8cc;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;

        ${p => mediaQuery('down', 'sm', p.theme)} {
          height: 69px;
        }
      `}
    >
      {title}
    </Title>
    <div
      css={css`
        padding: 39px 86px;

        ${p => mediaQuery('down', 'sm', p.theme)} {
          padding: 39px 28px;
        }
      `}
    >
      {children}
    </div>
  </Well>
);
