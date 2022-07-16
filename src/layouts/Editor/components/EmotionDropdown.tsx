/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { css, DefaultTheme } from 'styled-components';

import { Dropdown, Field, Item, Label, Menu, Select } from '@zendeskgarden/react-dropdowns';
import { getColor, ThemeProvider } from '@zendeskgarden/react-theming';
import { ReactComponent as CircleFill } from '@zendeskgarden/svg-icons/src/16/circle-fill.svg';

export const getEmotionColor = (emotion) => {
  const colors = {
    angry: '#cc3340',
    expressive: '#ed8f1c',
    happy: '#028079',
    sad: '#0073b4',
    surprise: '#6a27b8',
  };
  return colors[emotion?.name.toLowerCase()];
};

const EmotionDropdown = ({ items, selectedItem, onSelect }) => {
  const theme = (parentTheme: DefaultTheme) => ({
    ...parentTheme,
    components: {
      'forms.faux_input': css`
        background-color: transparent;
        ${p => p.emotionColor && `color: ${p.emotionColor};`};
      `,
      'forms.media_figure': css`
        color: #ed8f1c;
      `,
      'dropdowns.menu': css`
        scrollbar-color: #ed8f1c transparent;
        &::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        &::-webkit-scrollbar-thumb {
          background: #ed8f1c;
          border-radius: 6px;
        }
      `,
      'dropdowns.item': css`
        background-color: ${p => p.isFocused ? '#eef6f3' : 'inherit'};
        ${p => p.emotionColor && `color: ${p.emotionColor};`};
        &:not(:last-child) {
          border-bottom: ${p => p.theme.borderWidths.sm} ${p => p.theme.borderStyles.solid} ${p => getColor('neutralHue', 200, p.theme)};
        }
      `,
    }
  });

  return (
    <ThemeProvider focusVisibleRef={null} theme={theme as any}>
      <Dropdown
        selectedItem={selectedItem}
        onSelect={onSelect}
        downshiftProps={{ itemToString: (item) => item && item.name }}
      >
        <Field>
          <Label hidden>Select emotion</Label>
          <Select emotionColor={getEmotionColor(selectedItem)}>
            {selectedItem?.name || 'Emotion'}
          </Select>
        </Field>
        <Menu>
          {items?.map(item =>
            <Item
              key={item.id}
              value={item}
              emotionColor={getEmotionColor(item)}
            >
              <CircleFill
                css={css`
                  margin-right: ${p => p.theme.space.base * 2}px;
                  width: 10px;
                  height: 10px;
                `}
              />
              {item.name}
            </Item>
          )}
        </Menu>
      </Dropdown>
    </ThemeProvider>
  );
};

export default EmotionDropdown;
