/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { useMutation } from '@apollo/client';
import { Add as AddIcon, Copy, Export, Menu as MenuIcon, Microphone2, Refresh, Sound, Translate, Trash } from 'iconsax-react';

import { Button, IconButton } from '@zendeskgarden/react-buttons';
import { Field as DropdownField, Item, Dropdown, Menu, Select } from '@zendeskgarden/react-dropdowns';
import { Tooltip } from '@zendeskgarden/react-tooltips';

import EmotionDropdown from './EmotionDropdown';
import LineTextInput from './LineTextInput';
import * as mutations from './Mutations';
import PlayButton from './PlayButton';
import SpeedRange from './SpeedRange';

const StyledButton = styled(Button).attrs({
  isBasic: true,
})`
  color: #012b30;

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

const LineEditor = ({ scene, line, speakers, emotions }) => {
  const [lineText, setLineText] = useState(line?.text || '');
  const [lineSpeed, setLineSpeed] = useState(line?.speed || 1.0);
  const [lineEmotion, setLineEmotion] = useState(line?.emotion || getDefaultEmotion(emotions));
  const [lineSpeaker, setLineSpeaker] = useState(line?.speaker || getDefaultSpeaker(speakers));

  const [createLine, { createdLine, creating, error }] = useMutation(mutations.CREATE_LINE, {
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
            border-radius: 5px;
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
            <Dropdown
              selectedItem={lineSpeaker}
              onSelect={setLineSpeaker}
              downshiftProps={{ itemToString: (item) => item && item.name }}
            >
              <DropdownField>
                <Select
                  css={css`
                    background-color: #012b30;
                    border-color: transparent;
                    color: #fff;
                  `}
                >
                  { lineSpeaker?.name || 'Character' }
                </Select>
              </DropdownField>
              <Menu>
                {speakers?.map(item => <Item key={item.id} value={item}>{item.name}</Item>)}
              </Menu>
            </Dropdown>
          </div>
          <div
            css={css`
              border-top: 1px solid rgba(255,255,255,.1);
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
            border-radius: 5px;
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
            <MenuIcon
              size="24"
              css={css`
                cursor: grab;
                margin-right: ${p => p.theme.space.md};
              `}
            />
            <LineTextInput
              value={lineText}
              onChange={setLineText}
            />
          </div>
          <div
            css={css`
              border-top: 1px solid rgba(0,0,0,.1);
              display: flex;
              align-items: center;
              padding: ${p => p.theme.space.sm} calc(${p => (p.theme.space.md)} * 2 + 24px);
            `}
          >
            <EmotionDropdown
              items={emotions}
              selectedItem={lineEmotion}
              onSelect={setLineEmotion}
            />
            <SpeedRange
              value={lineSpeed}
              onChange={setLineSpeed}
            />
            <StyledButton disabled>
              <Button.StartIcon>
                <Translate color="#ed8f1c" variant="Bold" />
              </Button.StartIcon>
              English
            </StyledButton>
            <StyledButton disabled>
              <Button.StartIcon>
                <Sound color="#ed8f1c" />
              </Button.StartIcon>
              Edit Pitch
            </StyledButton>
            <StyledButton disabled>
              <Button.StartIcon>
                <Refresh color="#ed8f1c" />
              </Button.StartIcon>
              New Take
            </StyledButton>
            <StyledButton disabled>
              <Button.StartIcon>
                <Export color="#ed8f1c" />
              </Button.StartIcon>
              Export
            </StyledButton>
            <StyledButton disabled={creating} onClick={duplicateLine}>
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
            border-radius: 5px;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `}
        >
          {line.takes?.length > 0 &&
            <div
              css={css`
                border-top: 1px solid rgba(255,255,255,.1);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: ${p => p.theme.space.sm} ${p => p.theme.space.md};
              `}
            >
              <PlayButton src={line.takes[0].audio_url} />
            </div>
          }
          <div
            css={css`
              border-top: 1px solid rgba(255,255,255,.1);
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
              border-top: 1px solid rgba(255,255,255,.1);
              display: flex;
              align-items: center;
              justify-content: center;
              padding: ${p => p.theme.space.sm} ${p => p.theme.space.md};
            `}
          >
            <Tooltip content="Duplicate Line">
              <Button
                disabled={creating}
                isBasic
                onClick={duplicateLine}
              >
                <Copy
                  size="24"
                  color="#5eae91"
                />
              </Button>
            </Tooltip>
            <Tooltip content="Delete Line">
              <StyledButton disabled>
                <Trash
                  size="24"
                  color="#cc3340"
                  variant="Bold"
                />
              </StyledButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </li>
  );
};

export default LineEditor;
