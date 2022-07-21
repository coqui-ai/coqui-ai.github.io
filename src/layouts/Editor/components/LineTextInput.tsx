/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';

import { Field, Label, Textarea } from '@zendeskgarden/react-forms';

import { getEmotionColor } from './EmotionDropdown';

const LineTextInput = ({ value, emotion, onChange, onBlur }) => {
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(getEmotionColor(emotion));
  }, [emotion]);

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
        onBlur={(e) => onBlur(e.target.value)}
        emotionColor={color}
        css={css`
          ${p => p.emotionColor && `color: ${p.emotionColor};`}
        `}
      />
    </Field>
  );
};

export default LineTextInput;
