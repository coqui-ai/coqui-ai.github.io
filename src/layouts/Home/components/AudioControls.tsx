/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as PlayIcon } from '@zendeskgarden/svg-icons/src/16/play-fill.svg';
import { ReactComponent as PauseIcon } from '@zendeskgarden/svg-icons/src/16/pause-fill.svg';

export const AudioControls: React.FC<{
  isPlaying: boolean;
  onPlayPauseClick: (isPlaying: boolean) => void;
}> = ({ isPlaying, onPlayPauseClick }) => {
  return isPlaying ? (
    <IconButton aria-label="Pause" onClick={() => onPlayPauseClick(false)}>
      <PauseIcon
        size={1.5}
        css={css`
          color: ${p => getColor('yellow', 600, p.theme)};
        `}
      />
    </IconButton>
  ) : (
    <IconButton aria-label="Play" onClick={() => onPlayPauseClick(true)}>
      <PlayIcon
        size={1.5}
        css={css`
          color: ${p => getColor('yellow', 600, p.theme)};
        `}
      />
    </IconButton>
  );
};
