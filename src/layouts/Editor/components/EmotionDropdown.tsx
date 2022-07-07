/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';

import { Dropdown, Field, Item, Label, Menu, Select } from '@zendeskgarden/react-dropdowns';

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
  return (
    <Dropdown
      selectedItem={selectedItem}
      onSelect={onSelect}
      downshiftProps={{ itemToString: (item) => item && item.name }}
    >
      <Field>
        <Label hidden>Select emotion</Label>
        <Select
          emotionColor={getEmotionColor(selectedItem)}
          css={css`
            background-color: transparent;
            ${p => p.emotionColor && `color: ${p.emotionColor};`};
          `}
        >
          {selectedItem?.name || 'Emotion'}
        </Select>
      </Field>
      <Menu>
        {items?.map(item =>
          <Item
            key={item.id}
            value={item}
            emotionColor={getEmotionColor(item)}
            css={css`
              background-color: transparent;
              ${p => p.emotionColor && `color: ${p.emotionColor};`};
            `}
          >
            {item.name}
          </Item>
        )}
      </Menu>
    </Dropdown>
  );
};

export default EmotionDropdown;
