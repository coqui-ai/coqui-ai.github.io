/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Anchor } from '@zendeskgarden/react-buttons';

interface ILink {
  children: string;
  to: string;
  activeClassName?: string;
}

export const Link = ({ children, to, activeClassName, ...props }: ILink) => {
  const internal = /^\/(?!\/)/u.test(to);

  if (internal) {
    return (
      <GatsbyLink to={to} activeClassName={activeClassName} {...props}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <Anchor href={to} {...props}>
      {children}
    </Anchor>
  );
};

export const StyledNavigationLink = styled(Link).attrs(p => ({
  activeClassName: p.activeClassName || 'is-current'
}))`
  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
