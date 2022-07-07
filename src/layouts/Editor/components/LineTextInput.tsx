/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';

import { Field, Label, Textarea } from '@zendeskgarden/react-forms';

const LineTextInput = ({ value, onChange }) => {
  return (
    <Field
      css={css`
        flex-grow: 1;
      `}
    >
      <Label hidden>Line Text</Label>
      <Textarea
        value={value}
        isBare
        maxRows={4}
        onChange={e => onChange(e.target.value)}
        onBlur={() => console.log(value)}
      />
    </Field>
  );
};

export default LineTextInput;
