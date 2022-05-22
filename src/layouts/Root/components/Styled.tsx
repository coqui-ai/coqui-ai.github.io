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

import { ChartCircle } from 'iconsax-react';

const rotationAnimation = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const Loading = () => (
  <ChartCircle
    css={`
      animation: ${rotationAnimation} 2s infinite linear;
      margin: 39px auto;
      height: 47px;
      display: block;
    `}
    size="47"
    color="#FF8A65"
    variant="Bulk"
  />
);

export const CenterContent = styled.div`
  width: 699px;
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
    text-decoration: none !important;
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
      `}
    >
      {title}
    </Title>
    <div
      css={css`
        padding: 39px 86px;
      `}
    >
      {children}
    </div>
  </Well>
);
