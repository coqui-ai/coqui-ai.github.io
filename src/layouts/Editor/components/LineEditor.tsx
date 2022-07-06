/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { css } from 'styled-components';

import { useMutation } from '@apollo/client';
import { Add as AddIcon, Copy, Menu as MenuIcon, Microphone2, Trash } from 'iconsax-react';

import { Button, IconButton } from '@zendeskgarden/react-buttons';
import { Field as DropdownField, Item, Dropdown, Menu, Select } from '@zendeskgarden/react-dropdowns';
import { getColor } from '@zendeskgarden/react-theming';
import { Tooltip } from '@zendeskgarden/react-tooltips';

import EmotionDropdown from './EmotionDropdown';
import LineTextInput from './LineTextInput';
import * as mutations from './Mutations';
import PlayButton from './PlayButton';
import SpeedRange from './SpeedRange';

export const getDefaultEmotion = (emotions) => {
  return emotions?.find(e => e.name === 'Neutral');
};

export const getDefaultSpeaker = (speakers) => {
  return speakers?.find(s => s.name === 'ESD_0011');
};

const LineEditor = ({ scene, line, speakers, emotions }) => {
  const [lineText, setLineText] = useState(line?.text || '');
  const [lineSpeed, setLineSpeed] = useState(line?.speed || 1.0);

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
        emotion_id: getDefaultEmotion(emotions)?.id,
        speaker_id: getDefaultSpeaker(speakers)?.id,
        emotion_intensity: 1.0,
      }
    });
  };

  const newLine = () => {
    createLine({
      variables: {
        scene_id: scene.id,
        text: "New line",
        speed: 1.0,
        emotion_id: getDefaultEmotion(emotions)?.id,
        speaker_id: getDefaultSpeaker(speakers)?.id,
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
            background-color: ${p => getColor('kale', 700, p.theme)};
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
            Character 1
          </div>
          <div
            css={css`
              border-top: 1px solid rgba(255,255,255,.1);
              padding: ${p => p.theme.space.sm} ${p => p.theme.space.md};
            `}
          >
            <Dropdown>
              <DropdownField>
                <Select start={<Microphone2 color="#ed8f1c" variant="Bold" />}>Speaker</Select>
              </DropdownField>
              <Menu>
                {speakers?.map(s => (<Item key={s.name} value={s.name}>{s.name}</Item>))}
              </Menu>
            </Dropdown>
          </div>
        </div>

        <div
          css={css`
            background-color: #F6F4F4};
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
            <LineTextInput text={lineText} />
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
              emotions={emotions}
              emotion={emotions?.find(e => e.id === line.emotion?.id)}
            />
            <SpeedRange
              value={lineSpeed}
              onChange={setLineSpeed}
            />
            <Button
              isBasic
              onClick={newLine}
            >
              <Button.StartIcon>
                <AddIcon color="#ed8f1c" />
              </Button.StartIcon>
              New Line
            </Button>
          </div>
        </div>

        <div
          css={css`
            background-color: ${p => getColor('kale', 700, p.theme)};
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
                isBasic
                onClick={duplicateLine}
              >
                <Copy
                  size="24"
                  color="#ed8f1c"
                />
              </Button>
            </Tooltip>
            <Tooltip content="Delete Line">
              <Button isBasic>
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
