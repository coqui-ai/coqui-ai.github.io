/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes, useEffect, useMemo } from 'react';
import Img from 'gatsby-image';
import debounce from 'lodash.debounce';
// import { Field, Input } from '@zendeskgarden/react-forms';
import { Item, Menu, Field, Label, Dropdown, Combobox } from '@zendeskgarden/react-dropdowns';

import { Col, Grid, Row } from '@zendeskgarden/react-grid';
import { ReactComponent as SearchIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { Button } from '@zendeskgarden/react-buttons';

import styled, { css, DefaultTheme } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { useProfile } from '../../../../utils/auth';
import { LG } from '@zendeskgarden/react-typography';
import { SearchNormal1 } from 'iconsax-react';

export const OrangeButton = styled(Button)`
  &:hover {
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
