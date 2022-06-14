/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css } from 'styled-components';
import { Tag } from '@zendeskgarden/react-tags';
import { AudioControls } from './AudioControls';
import { Range } from '@zendeskgarden/react-forms';
import { LG } from '@zendeskgarden/react-typography';
import React, { useState, useEffect, useRef } from 'react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { DEFAULT_THEME, getColor, mediaQuery } from '@zendeskgarden/react-theming';

export const AudioPlayer: React.FC<{
  title: string;
  isOriginal: boolean;
  audioSrc: string;
}> = ({ title, isOriginal, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);

  const intervalRef = useRef();
  const audioRef = useRef<HTMLAudioElement>();

  const rangeElement = useRef();

  const duration = audioRef?.current?.duration || 0;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef?.current?.ended) {
        setIsPlaying(false);
        rangeElement.current.value = duration;
      } else {
        setTrackProgress(audioRef?.current?.currentTime);
      }
    }, [10]);
  };

  const onScrub = value => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      audioRef?.current?.play();
      setIsPlaying(true);
    }
    startTimer();
  };

  const playPauseHandler = playing => {
    if (playing) {
      audioRef?.current?.play();
      startTimer();
    } else {
      audioRef?.current?.pause();
    }
    setIsPlaying(playing);
  };

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      audioRef?.current?.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Grid
      gutters={false}
      css={css`
        padding-right: ${p => p.theme.space.md};
        padding-left: ${p => p.theme.space.md};
      `}
    >
      <Row alignItems="center">
        <Col size={4}>
          <LG
            css={css`
              margin-top: ${p => p.theme.space.sm};
              margin-left: 12px;
              color: ${isOriginal ? 'white' : getColor('kale', 700)};
            `}
          >
            {isOriginal ? `${title}` : `"${title}"`}
          </LG>
        </Col>
        <Col size={8} />
      </Row>
      <Row alignItems="center" wrap="nowrap">
        <Col size={1}>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio ref={audioRef} src={audioSrc} preload="auto" />
          <AudioControls isPlaying={isPlaying} onPlayPauseClick={playPauseHandler} />
        </Col>
        <Col size={11}>
          <Range
            ref={rangeElement}
            value={trackProgress}
            step={0.01}
            min={0}
            max={duration ? duration : `${duration}`}
            onChange={e => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            css={css`
              &::-webkit-slider-thumb {
                /* stylelint-disable-next-line property-no-vendor-prefix */
                -webkit-appearance: none;
                margin-top: -2px;
                border: 0;
                border-radius: 10px;
                background: ${isOriginal ? 'white' : getColor('kale', 700)};
                width: 10px;
                height: 10px;
              }

              &::-moz-range-thumb {
                border: 0;
                border-radius: 10px;
                background: ${isOriginal ? 'white' : getColor('kale', 700)};
                width: 10px;
                height: 10px;
              }

              &::-ms-thumb {
                border: 0;
                border-radius: 10px;
                background: ${isOriginal ? 'white' : getColor('kale', 700)};
                width: 10px;
                height: 10px;
              }

              &::-webkit-slider-runnable-track {
                background: ${isOriginal
                  ? getColor('grey', 100, DEFAULT_THEME, 0.5)
                  : getColor('kale', 700, DEFAULT_THEME, 0.5)};
              }

              &::-moz-range-track {
                background: ${isOriginal
                  ? getColor('grey', 100, DEFAULT_THEME, 0.5)
                  : getColor('kale', 700, DEFAULT_THEME, 0.5)};
              }

              &::-ms-track {
                background: ${isOriginal
                  ? getColor('grey', 100, DEFAULT_THEME, 0.5)
                  : getColor('kale', 700, DEFAULT_THEME, 0.5)};
              }

              ${p => mediaQuery('up', 'sm', p.theme)} {
                padding-left: 4px;
              }

              ${p => mediaQuery('down', 'sm', p.theme)} {
                padding-left: 2px;
              }

              ${p => mediaQuery('down', 'xs', p.theme)} {
                padding-left: 14px;
              }
            `}
          />
        </Col>
      </Row>
      <Row alignItems="center">
        <Col size={6}>
          <Tag
            isPill
            size="small"
            hue={getColor('kale', 500, DEFAULT_THEME, 0.5)}
            css={css`
              margin-bottom: ${p => p.theme.space.sm};
              margin-left: 12px;
            `}
          >
            <span>{isOriginal ? 'Original Voice' : 'Synthesized Voice'}</span>
          </Tag>
        </Col>
        <Col size={7} />
      </Row>
    </Grid>
  );
};
