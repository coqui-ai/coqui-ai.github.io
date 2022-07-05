/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState } from 'react';

import { Range } from '@zendeskgarden/react-forms';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const SpeedRange = ({ speed }) => {
  const rangeElement = useRef();

  const [value, setValue] = useState(speed || 1.0);

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
          ref={rangeElement}
          value={value}
          step={0.1}
          min={0}
          max={2}
          onChange={e => setValue(e.target.value)}
        />
      </Tooltip>
    </div>
  );
};

export default SpeedRange;
