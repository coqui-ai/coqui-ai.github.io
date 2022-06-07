/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { Button } from '@zendeskgarden/react-buttons';

export const StyledButton = styled(Button).attrs(p => ({
  activeClassName: p.activeClassName || 'is-current'
}))`
  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
