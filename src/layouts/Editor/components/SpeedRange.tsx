/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

import { Range } from '@zendeskgarden/react-forms';
import { getColor, ThemeProvider } from '@zendeskgarden/react-theming';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const MIN_SPEED = 0.1;
const MAX_SPEED = 2.0;

const StyledRange = styled(Range)`
  &::-moz-range-track {
    background: #5eae91;
  }
  &::-webkit-slider-runnable-track {
    background: #5eae91;
  }

  &::-moz-range-progress {
    background: #5eae91;
  }

  &::-moz-range-thumb {
    background: #144543;
    border-color: #144543;
  }
  &::-webkit-slider-thumb {
    background: #144543;
    border-color: #144543;
  }

  &:hover::-moz-range-thumb {
    background: #0d2b2a;
    border-color: #0d2b2a;
  }
  &:hover::-webkit-slider-thumb {
    background: #0d2b2a;
    border-color: #0d2b2a;
  }

  &:active::-moz-range-thumb {
    background: #0d2b2a;
    border-color: #237875;
  }
  &:active::-webkit-slider-thumb {
    background: #0d2b2a;
    border-color: #237875;
  }
`;

// `speed` in our API corresponds to `length_scale` in the TTS model, where
// larger values result in slower speech. We need to clamp our value and
// reverse it for compatibility.
const normalize = (value) => {
  if (!value) {
    return 1.0;
  }
  value = parseFloat(value);
  value = Math.min(Math.max(value, MIN_SPEED), MAX_SPEED);
  value = MIN_SPEED + MAX_SPEED - value;
  return parseFloat(value.toFixed(1));
};

const SpeedRange = ({ value, onChange, onBlur }) => {
  const [inputValue, setInputValue] = useState(1.0);

  useEffect(() => {
    setInputValue(normalize(value));
  }, [value]);

  const theme = (parentTheme: DefaultTheme) => ({
    ...parentTheme,
    space: {
      ...parentTheme.space,
      base: 3,
    },
  });

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        margin: 0 ${p => p.theme.space.lg};
      `}
    >
      <div
        css={css`
          margin-right: ${p => p.theme.space.base * 2}px;
          margin-bottom: ${p => p.theme.space.base}px;
        `}
      >
        Speed:
      </div>
      <ThemeProvider focusVisibleRef={null} theme={theme as any}>
        <Tooltip content={inputValue.toFixed(1)}>
          <StyledRange
            value={inputValue}
            step={0.1}
            min={MIN_SPEED}
            max={MAX_SPEED}
            onChange={e => onChange(normalize(e.target.value))}
            onBlur={e => onBlur(normalize(e.target.value))}
          />
        </Tooltip>
      </ThemeProvider>
    </div>
  );
};

export default SpeedRange;
