/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Span } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';

interface IItem {
  children: string;
  activeClassName?: string;
}

export const Item = ({ children, activeClassName, ...props }: IItem) => {
  return (
    <Span activeClassName={activeClassName} {...props}>
      {children}
    </Span>
  );
};

export const StyledNavigationItem = styled(Item).attrs(p => ({
  activeClassName: p.activeClassName || 'is-current'
}))`
  border-radius: ${p => p.theme.borderRadii.md};
  padding: ${p => p.theme.space.base * 1.5}px ${p => p.theme.space.xs};
  color: ${p => p.theme.colors.foreground};

  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }

  &.is-current {
    background-color: ${p => getColor('grey', 800, p.theme, 0.1)};
  }

  &[data-garden-focus-visible] {
    box-shadow: ${p => p.theme.shadows.md(getColor('blue', 400, p.theme, 0.35)!)};
  }

  &:hover {
    background-color: ${p => getColor('grey', 800, p.theme, 0.05)};
  }

  &:active {
    background-color: ${p => getColor('grey', 800, p.theme, 0.2)};
  }
`;
