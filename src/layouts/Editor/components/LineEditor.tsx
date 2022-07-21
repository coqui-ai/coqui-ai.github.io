/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { useMutation } from '@apollo/client';
import { Add as AddIcon, Copy, Menu as MenuIcon, Microphone2, Refresh, Sound, Translate, Transmit, Trash } from 'iconsax-react';
import { Button, IconButton } from '@zendeskgarden/react-buttons';
import { Field as DropdownField, Item, Dropdown, Menu, Select } from '@zendeskgarden/react-dropdowns';
import { Tooltip, Title, Paragraph } from '@zendeskgarden/react-tooltips';

import CharacterDropdown from './CharacterDropdown';
import EmotionDropdown from './EmotionDropdown';
import LineTextInput from './LineTextInput';
import * as mutations from './Mutations';
import PlayButton from './PlayButton';
import SpeedRange from './SpeedRange';

const LargeTooltip = styled(Tooltip).attrs({
  type: "light",
  size: "large",
})`
  font-size: ${p => p.theme.fontSizes.sm};
`;

const StyledButton = styled(Button).attrs({
  isBasic: true,
})`
  color: #012b30;
  font-size: ${p => p.theme.fontSizes.sm};

  &:hover:not(:disabled) {
    background-color: #ed8f1c1a;
    color: #000;
  }

  &:disabled {
    background-color: transparent;
  }
`;

export const getDefaultEmotion = (emotions) => {
  return emotions?.find(e => e.name === 'Neutral');
};

export const getDefaultSpeaker = (speakers) => {
  return speakers?.find(s => s.name === 'ESD_0011');
};

const LineEditor = ({ scene, line, speakers, emotions, provided }) => {
  const [lineText, setLineText] = useState(line?.last_render?.text || '');
  const [lineSpeed, setLineSpeed] = useState(line?.last_render?.speed || 1.0);
  const [lineEmotion, setLineEmotion] = useState(line?.last_render?.emotion || getDefaultEmotion(emotions));
  const [lineSpeaker, setLineSpeaker] = useState(line?.last_render?.speaker || getDefaultSpeaker(speakers));

  const [createLine, createLineResult] = useMutation(mutations.CREATE_LINE, {
    update: cache => {
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'lines',
        args: { scene_id: scene.id }
      });
    }
  });

  const [deleteLine, deleteLineResult] = useMutation(mutations.DELETE_LINE, {
    update: cache => {
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'lines',
        args: { scene_id: scene.id }
      });
    }
  });

  const [createTake, createTakeResult] = useMutation(mutations.CREATE_TAKE, {
    update: cache => {
      cache.evict({
        id: 'ROOT_QUERY',
        fieldName: 'lines',
        args: { scene_id: scene.id }
      });
    }
  });

  const duplicateLine = () => {
    createLine({
      variables: {
        scene_id: scene.id,
        text: lineText,
        speed: lineSpeed,
        emotion_id: lineEmotion.id,
        speaker_id: lineSpeaker.id,
        emotion_intensity: 1.0,
      }
    });
  };

  const handleDeleteLine = () => {
    deleteLine({
      variables: {
        line_id: line.id
      }
    });
  }

  const createNewTake = (overrides) => {
    createTake({
      variables: {
        line_id: line.id,
        text: lineText,
        speed: lineSpeed,
        emotion_id: lineEmotion.id,
        speaker_id: lineSpeaker.id,
        emotion_intensity: 1.0,
        ...overrides,
      }
    });
  }

  return (
    <li key={line.id}>
      <div
        css={css`
          display: flex;
          margin-bottom: ${p => p.theme.space.sm};
        `}
      >
        <div
          css={css`
            background-color: #012b30;
            border: 1px solid #144543;
            border-radius: ${p => p.theme.borderRadii.md};
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
              padding: ${p => p.theme.space.md};
            `}
          >
            <CharacterDropdown
              items={speakers}
              selectedItem={lineSpeaker}
              onSelect={(val) => {
                setLineSpeaker(val);
                if (line.last_render?.speaker.id !== val.id) {
                  createNewTake({
                    speaker_id: val.id
                  });
                }
              }}
            />
          </div>
          <div
            css={css`
              border-top: 1px solid #1a4045;
              display: flex;
              align-items: center;
              padding: ${p => p.theme.space.md};
            `}
          >
            <Microphone2 color="#ed8f1c" variant="Bold" css={css`margin-right: ${p => p.theme.space.base}px;`} />
            {lineSpeaker?.name || 'VVA'}
          </div>
        </div>

        <div
          css={css`
            background-color: #f2f4f4;
            border: 1px solid #c5d1d0;
            border-radius: ${p => p.theme.borderRadii.md};
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              height: 100%;
              padding: ${p => p.theme.space.md};
            `}
          >
            <div
              css={css`
                display: flex;
              `}
              {...provided.dragHandleProps}
            >
              <MenuIcon
                size="24"
                css={css`
                  margin-right: ${p => p.theme.space.md};
                `}
              />
            </div>
            <LineTextInput
              value={lineText}
              emotion={lineEmotion}
              onChange={setLineText}
              onBlur={(val) => {
                setLineText(val);
                if (line.last_render?.text !== val) {
                  createNewTake({
                    text: val
                  });
                }
              }}
            />
          </div>
          <div
            css={css`
              border-top: 1px solid rgba(0,0,0,.1);
              display: flex;
              align-items: center;
              font-size: ${p => p.theme.fontSizes.sm};
              padding: ${p => p.theme.space.sm} calc(${p => (p.theme.space.md)} * 2 + 24px);
            `}
          >
            <EmotionDropdown
              items={emotions}
              selectedItem={lineEmotion}
              onSelect={(val) => {
                setLineEmotion(val);
                if (line.last_render?.emotion.id !== val.id) {
                  createNewTake({
                    emotion_id: val.id
                  });
                }
              }}
            />
            <SpeedRange
              value={lineSpeed}
              onChange={setLineSpeed}
              onBlur={(val) => {
                setLineSpeed(val);
                if (line.last_render?.speed !== val) {
                  createNewTake({
                    speed: val
                  });
                }
              }}
            />
            <StyledButton disabled>
              <Button.StartIcon>
                <Refresh color="#ed8f1c" />
              </Button.StartIcon>
              New Take
            </StyledButton>
            <StyledButton disabled>
              <Button.StartIcon>
                <Transmit color="#ed8f1c" css={css`transform: scaleX(-1);`} />
              </Button.StartIcon>
              Export
            </StyledButton>
            <StyledButton disabled={createLineResult.creating} onClick={duplicateLine}>
              <Button.StartIcon>
                <AddIcon color="#ed8f1c" />
              </Button.StartIcon>
              New Line
            </StyledButton>
          </div>
        </div>

        <div
          css={css`
            background-color: #012b30;
            border: 1px solid #144543;
            border-radius: ${p => p.theme.borderRadii.md};
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `}
        >
          {line.last_render.audio_url &&
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                padding: ${p => p.theme.space.sm} ${p => p.theme.space.md};
              `}
            >
              <PlayButton src={line.last_render.audio_url} />
            </div>
          }
          <div
            css={css`
              border-top: 1px solid #1a4045;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: ${p => p.theme.space.sm} ${p => p.theme.space.md};
            `}
          >
            Take 1
          </div>

          <div
            css={css`
              border-top: 1px solid #1a4045;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: ${p => p.theme.space.sm} ${p => p.theme.space.md};
            `}
          >
            <LargeTooltip
              placement="auto"
              content={
                <>
                  <Title>Duplicate Line</Title>
                  <Paragraph>Use this button to create a duplicate copy of this line with all its properties.</Paragraph>
                </>
              }
            >
              <Button
                disabled={createLineResult.creating}
                isBasic
                onClick={duplicateLine}
              >
                <Copy
                  size="24"
                  color="#5eae91"
                />
              </Button>
            </LargeTooltip>
            <Tooltip content="Delete Line">
              <Button
                isBasic
                onClick={handleDeleteLine}
              >
                <Trash
                  size="24"
                  color="#cc3340"
                  variant="Bold"
                />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </li>
  );
};

export default LineEditor;
