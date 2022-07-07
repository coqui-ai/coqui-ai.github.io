/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';

import { Range } from '@zendeskgarden/react-forms';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const SpeedRange = ({ value, onChange }) => {
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
          margin-right: ${p => p.theme.space.sm};
          margin-bottom: ${p => p.theme.space.base}px;
        `}
      >
        Speed:
      </div>
      <Tooltip content={value}>
        <Range
          value={value}
          step={0.1}
          min={0.1}
          max={2}
          onChange={e => onChange(e.target.value)}
          css={css`
            &::-moz-range-track {
              background-color: #5eae91;
            }
            &::-webkit-slider-runnable-track {
              background-color: #5eae91;
            }

            &::-moz-range-progress {
              background-color: #5eae91;
            }

            &::-moz-range-thumb {
              background-color: #144543;
              border-color: #144543;
            }
            &::-webkit-slider-thumb {
              background-color: #144543;
              border-color: #144543;
            }
          `}
        />
      </Tooltip>
    </div>
  );
};

export default SpeedRange;
