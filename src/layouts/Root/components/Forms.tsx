/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

// This file is mostly about reconciling
// `formik`, `@zendeskgarden/react-forms`, and our forms api

import React from 'react';

import * as Formik from 'formik'; // { Formik, Field, Form }
import * as GardenForms from '@zendeskgarden/react-forms';
import { OrangeButton } from './Styled';
import { css } from 'styled-components';

export const Submit = ({ children }) => (
  <OrangeButton
    css={css`
      width: 100%;
      margin-top: 39px;
      margin-bottom: 39px;
      height: 47px;
    `}
    type="submit"
  >
    {children}
  </OrangeButton>
);

export const Field = Formik.connect(props => {
  const error =
    props.error ||
    props.formik.errors[props.name] ||
    (props.formik.status ? props.formik.status[props.name] : null);

  const fieldProps = {
    id: props.name,
    validation: error ? 'error' : null,
    ...props,
    error
  };

  return (
    <GardenForms.Field
      css={`
        min-height: 106px;
      `}
    >
      <GardenForms.Label
        css={`
          font-weight: 400;
        `}
      >
        {props.label}
      </GardenForms.Label>
      <Formik.Field {...fieldProps} />
      {error ? <GardenForms.Message validation="error">{error}</GardenForms.Message> : ''}
    </GardenForms.Field>
  );
});
