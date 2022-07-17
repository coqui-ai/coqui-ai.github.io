/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef, useState } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

import { Add, Minus, PlayCircle, Sound, StopCircle } from 'iconsax-react';
import interact from 'interactjs';
import { Button } from '@zendeskgarden/react-buttons';
import { Range } from '@zendeskgarden/react-forms';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { getColor, ThemeProvider } from '@zendeskgarden/react-theming';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const TimelineContainer = styled.div`
  background-color: #144543;
  border: 1px solid #002226;
  border-radius: ${p => p.theme.borderRadii.md} ${p => p.theme.borderRadii.md} 0 0;
  color: ${p => p.theme.palette.white};
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.md};
  line-height: ${p => p.theme.lineHeights.md};
  margin: ${p => p.theme.space.lg} ${p => p.theme.space.base * 4}px;
  padding-bottom: ${p => p.theme.space.base * 2}px;
  position: sticky;
  bottom: 0;
`;

const TrackRow = styled.div`
  border-bottom: 2px solid #002226;
  display: flex;
  height: 64px;
  padding: ${p => p.theme.space.base}px ${p => p.theme.space.base * 2}px;
  position: relative;
`;

const Character = styled.div`
  background-color: #19352e;
  border: 1px solid #ed8f1c;
  border-radius: ${p => p.theme.borderRadii.md};
  font-size: ${p => p.theme.fontSizes.sm};
  height: 100%;
  width: 100px;
  padding: ${p => p.theme.space.base}px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
`;

const Box = styled.div`
  background-color: #144543;
  border: 1px solid #5eae91;
  border-radius: ${p => p.theme.borderRadii.md};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: calc(100% - ${p => p.theme.space.base * 2}px);
  width: 100px;
  padding: ${p => p.theme.space.base}px;
  position: absolute;
`;

const StyledPlayButton = styled(Button)`
  height: auto;
  margin-right: ${p => p.theme.space.base}px;
  padding: 0;
`;

const Head = styled.div`
  background-color: #5eae91;
  pointer-events: none;
  position: absolute;
  bottom: 0;
  width: 1px;
  height: calc(100% - 26px);
  z-index: 1;

  &::before {
    content: "";
    border-color: #5eae91 transparent transparent transparent;
    border-style: solid;
    border-width: 10px 7px 0 7px;
    border-radius: 3px;
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: -7px;
  }
`;

const StyledRange = styled(Range)`
  &::-moz-range-track {
    background: #012b30;
  }
  &::-webkit-slider-runnable-track {
    background: #012b30;
  }

  &::-moz-range-progress {
    background: #5eae91;
  }

  &::-moz-range-thumb {
    background: #fff;
    border-color: #fff;
  }
  &::-webkit-slider-thumb {
    background: #fff;
    border-color: #fff;
  }

  &:hover::-moz-range-thumb {
    background: #ddd;
    border-color: #ddd;
  }
  &:hover::-webkit-slider-thumb {
    background: #ddd;
    border-color: #ddd;
  }

  &:active::-moz-range-thumb {
    background: #ddd;
    border-color: #237875;
  }
  &:active::-webkit-slider-thumb {
    background: #ddd;
    border-color: #237875;
  }
`;

const Measure = ({ parent, length, region, scale, offset, setPosition, setRegion }) => {
  const canvas = useRef(null);
  const isMouseDown = useRef(false);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(36);

  useEffect(() => {
    document.addEventListener("mouseup", () => {
      isMouseDown.current = false;
    });
  }, []);

  useEffect(() => {
    setWidth(parent.current?.clientWidth);
  }, [length, scale]);

  useEffect(() => {
    draw();
  }, [width, region, scale]);

  const draw = () => {
    if (!canvas.current) {
      return;
    }

    const ctx = canvas.current.getContext("2d");

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    if (region?.every(p => p !== null)) {
      const r = region.map(p => (p / 1000) * scale + offset);
      ctx.fillStyle = "#002226";
      ctx.fillRect(r[0], 0, r[1] - r[0], height);
    }

    ctx.font = "14px sans-serif";
    ctx.fillStyle = "#5eae91";
    ctx.textAlign = "center";

    for (let i = 0; i < Math.ceil(width / scale); i++) {
      ctx.fillText(i, (i * scale) + offset, 20);
      ctx.fillRect((i * scale) + offset, 26, 1, 10);
    }
  };

  const getPositionFromCursor = (event) => {
    const rect = canvas.current.getBoundingClientRect();
    const x = event.clientX - rect.x;
    const pos = (x - offset) / scale * 1000;
    return Math.min(Math.max(pos, 0), length);
  };

  return (
    <canvas
      ref={canvas}
      width={width}
      height={height}
      onMouseDown={event => {
        isMouseDown.current = true;
        const pos = getPositionFromCursor(event);
        setPosition(pos);
        setRegion([pos, null]);
      }}
      onMouseMove={event => {
        if (isMouseDown.current) {
          const MIN_REGION_LENGTH = 100;
          const pos = getPositionFromCursor(event);
          if (pos >= region[0] + MIN_REGION_LENGTH) {
            setRegion(r => [r[0], pos]);
          } else if (!region[1] && pos < region[0]) {
            setPosition(pos);
            setRegion([pos, null]);
          }
        }
      }}
      onMouseUp={event => {
        isMouseDown.current = false;
      }}
      css={css`
        cursor: pointer;
      `}
    />
  );
};

const RegionIcon = () => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H2.5V3.75L6.25 3.75V1.7524L10 5L6.25 8.24759V6.25H2.5V10H0V6.25V3.75V0Z" fill="#ed8f1c"/>
    </svg>
  );
};

const ResizeHandle = ({ onResize }) => {
  const resizing = useRef(false);

  useEffect(() => {
    document.addEventListener("mouseup", () => {
      resizing.current = false;
      document.body.style.cursor = "unset";
    });

    document.addEventListener("mousemove", (event) => {
      if (!resizing.current) {
        return;
      }
      onResize(event.movementY);
    });
  }, []);

  return (
    <div
      onMouseDown={() => {
        resizing.current = true;
        document.body.style.cursor = "ns-resize";
      }}
      css={css`
        cursor: ns-resize;
        padding: ${p => p.theme.space.sm};
      `}
    >
      <div
        css={css`
          background-color: #012b30;
          border-radius: ${p => p.theme.borderRadii.md};
          width: 50px;
          height: 5px;
        `}
      />
    </div>
  );
};

const Timeline = ({ lines }) => {
  const audioPlayers = useRef<Array<HTMLAudioElement>>([]);
  const measureParent = useRef();
  const containerRef = useRef();
  const previousTime = useRef();
  const requestId = useRef();
  const isPlaying = useRef(false);

  const [tracks, setTracks] = useState([]);
  const [durations, setDurations] = useState([]); // milliseconds
  const [positions, setPositions] = useState([]); // milliseconds

  const [isReady, setIsReady] = useState(false);
  const [position, setPosition] = useState(0);
  const [region, setRegion] = useState([null, null]);
  const [length, setLength] = useState(0);
  const [scale, setScale] = useState(100);
  const [height, setHeight] = useState(350);

  useEffect(() => {
    if (lines === undefined) {
      return;
    }

    const speakers = [...new Set(lines?.map(line => line.speaker))];
    setTracks(speakers.map(speaker => {
      return {
        speaker,
      }
    }));

    if (!durations.length) {
      setDurations(Array(lines.length).fill(1000));
    }

    audioPlayers.current = audioPlayers.current.slice(0, lines.length);

    lines.map((line, i) => {
      if (!audioPlayers.current[i]) {
        audioPlayers.current[i] = new Audio(line.takes[0].audio_url);
        audioPlayers.current[i].preload = "metadata";
        audioPlayers.current[i].addEventListener("loadedmetadata", () => {
          setDurations(durations => {
            return [
            ...durations.slice(0, i),
            audioPlayers.current[i].duration * 1000,
            ...durations.slice(i + 1)
          ]});
          setIsReady(positions.every(p => p));
        });
      } else {
        audioPlayers.current[i].src = line.takes[0].audio_url;
      }
    });
  }, [lines]);

  useEffect(() => {
    if (!isPlaying.current) {
      return;
    }

    if (position && position >= (region[1] || length)) {
      stop();
      return;
    }

    positions.forEach((pos, i) => {
      if (pos <= position && position < (pos + durations[i])) {
        if (audioPlayers.current?.[i].paused) {
          audioPlayers.current?.[i].play();
        }
      }
    });
  }, [position, region]);
  
  useEffect(() => {
    containerRef.current.style.height = `${height}px`;
  }, [height]);

  useEffect(() => {
    calculatePositions();
  }, [durations]);

  useEffect(() => {
    calculateLength();
  }, [positions]);
  
  useEffect(() => {
    return () => stop();
  }, []);

  const animate = (time) => {
    if (previousTime.current !== undefined) {
      const delta = time - previousTime.current;
      setPosition(position => position + delta);
    }
    if (isPlaying.current) {
      previousTime.current = time;
      requestId.current = requestAnimationFrame(animate);
    }
  }

  const play = () => {
    isPlaying.current = true;
    requestId.current = requestAnimationFrame(animate);
  };

  const stop = () => {
    isPlaying.current = false;
    cancelAnimationFrame(requestId.current);
    previousTime.current = undefined;
    requestId.current = undefined;
    setPosition(region[0] || 0);
    audioPlayers.current?.map(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
  };

  const toTimeString = (s) => {
    const date = new Date(0);
    date.setSeconds(s > 0 ? s : 0);
    return date.toISOString().substr(11, 8);
  };

  const calculatePositions = () => {
    let total = 0;
    setPositions(durations.map(duration => {
      total += duration;
      return total - duration;
    }));
  };

  const calculateLength = () => {
    setLength(Math.max(...positions.map((p, i) => p + durations[i])));
  };

  const onResize = (movementY) => {
    const MIN_HEIGHT = 100;
    setHeight(height => Math.max(height - movementY, MIN_HEIGHT));
  };

  useEffect(() => {
    if (!isReady) {
      return;
    }
    interact(".draggable").draggable({
      startAxis: "x",
      lockAxis: "x",
      cursorChecker (action, interactable, element, interacting) {
        return interacting ? "grabbing" : "grab";
      },
      listeners: {
        move (event) {
          if (event.target.dataset.lineIndex !== undefined) {
            const index = parseInt(event.target.dataset.lineIndex);
            const delta = event.dx * 1000 / scale;
            setPositions(p => {
              const newPosition = p[index] + delta;
              if (newPosition < 0) {
                return p;
              }
              return [
                ...p.slice(0, index),
                newPosition,
                ...p.slice(index + 1).map(p => p + delta)
              ];
            });
          }
        },
      }
    });
  }, [isReady]);

  const theme = (parentTheme: DefaultTheme) => ({
    ...parentTheme,
    space: {
      ...parentTheme.space,
      base: 3,
    },
  });

  return (
    <TimelineContainer ref={containerRef}>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <ResizeHandle onResize={onResize} />
      </div>

      <Grid
        css={css`
          padding-bottom: ${p => p.theme.space.md};
        `}
      >
        <Row alignItems="center">
          <Col />
          <Col
            css={css`
              display: flex;
              justify-content: center;
            `}
          >
            <div
              css={css`
                background-color: #012b30;
                border-radius: ${p => p.theme.borderRadii.md};
                display: flex;
                align-items: center;
                flex-shrink: 0;
                padding: ${p => p.theme.space.base * 2}px ${p => p.theme.space.sm};
              `}
            >
              <Tooltip content={!isPlaying.current ? "Play" : "Stop"}>
                {!isPlaying.current ? (
                  <StyledPlayButton isBasic onClick={play}>
                    <PlayCircle size="24" color="#ed8f1c" variant="Bold" />
                  </StyledPlayButton>
                ) : (
                  <StyledPlayButton isBasic onClick={stop}>
                    <StopCircle size="24" color="#ed8f1c" variant="Bold" />
                  </StyledPlayButton>
                )}
              </Tooltip>
              <div
                css={css`
                  font-size: ${p => p.theme.fontSizes.lg};
                  font-weight: ${p => p.theme.fontWeights.semibold};
                  user-select: none;
                `}
              >
                {toTimeString(position / 1000)} - {toTimeString(length / 1000)}
              </div>
            </div>
          </Col>
          <Col
            css={css`
              display: flex;
              justify-content: flex-end;
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <Minus size="24" color="#ed8f1c" />
              <ThemeProvider focusVisibleRef={null} theme={theme as any}>
                <StyledRange
                  value={scale}
                  step={0.1}
                  min={50}
                  max={250}
                  onChange={e => setScale(e.target.value)}
                  css={css`margin: 0 ${p => p.theme.space.base}px;`}
                />
              </ThemeProvider>
              <Add size="24" color="#ed8f1c" />
            </div>
          </Col>
        </Row>
      </Grid>

      <div
        css={css`
          background-color: #012b30;
          display: flex;
          flex-grow: 1;
          overflow-y: scroll;
        `}
      >
        <div css={css`border-right: 2px solid #002226;`}>
          <div
            css={css`
              border-bottom: 5px solid #144543;
              font-size: ${p => p.theme.fontSizes.sm};
              padding: ${p => p.theme.space.base * 2}px;
              user-select: none;
            `}
          >
            Characters
          </div>
          <ul>
            {tracks?.map(track =>
              <TrackRow key={track.speaker.id}>
                <Character>
                  {track.speaker.name}
                </Character>
              </TrackRow>
            )}
          </ul>
        </div>

        <div
          css={css`
            flex-grow: 1;
            overflow-x: scroll;
            position: relative;
            scrollbar-color: #ed8f1c transparent;
            &::-webkit-scrollbar {
              width: 6px;
              height: 6px;
            }
            &::-webkit-scrollbar-thumb {
              background: #ed8f1c;
              border-radius: 6px;
            }
          `}
        >
          <div
            ref={measureParent}
            css={css`
              border-bottom: 5px solid #144543;
              display: flex;
              overflow-x: hidden;
              position: relative;
            `}
            style={{
              minWidth: `${(length / 1000) * scale}px`,
            }}
          >
            <div
              css={css`
                display: flex;
                pointer-events: none;
                position: absolute;
                width: 100%;
                height: 100%;
              `}
            >
              <div 
                style={{
                  display: region[1] ? 'flex' : 'none',
                  position: 'absolute',
                  transform: `translateX(${(region[0] / 1000) * scale + 8}px)`,
                }}
              >
                <RegionIcon />
              </div>
              <div 
                style={{
                  display: region[1] ? 'flex' : 'none',
                  position: 'absolute',
                  transform: `translateX(${(region[1] / 1000) * scale + 8 - 10}px) scaleX(-1)`,
                }}
              >
                <RegionIcon />
              </div>
            </div>
            <Measure
              parent={measureParent}
              length={length}
              region={region}
              scale={scale}
              offset={8}
              setPosition={setPosition}
              setRegion={setRegion}
            />
          </div>
          <ul
            style={{
              minWidth: `${(length / 1000) * scale}px`,
            }}
          >
            {tracks?.map(track =>
              <TrackRow key={track.speaker.id}>
                {lines?.map((line, i) => line.speaker.id === track.speaker.id &&
                  <Tooltip key={line.id} content={line.text}>
                    <Box
                      className="draggable"
                      key={line.id}
                      data-line-index={i}
                      style={{
                        width: `${(durations[i] / 1000) * scale}px`,
                        transform: `translateX(${(positions[i] / 1000) * scale}px)`,
                      }}
                    >
                      <Sound size="32" color="#012b30" variant="Bold" />
                    </Box>
                  </Tooltip>
                )}
              </TrackRow>
            )}
          </ul>
          <Head
            style={{
              transform: `translateX(${(position / 1000) * scale + 8}px)`,
            }}
          />
        </div>
      </div>
    </TimelineContainer>
  );
};

export default Timeline;
