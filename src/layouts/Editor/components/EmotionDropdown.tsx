/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';

import { Dropdown, Field, Item, Label, Menu, Select } from '@zendeskgarden/react-dropdowns';

const EmotionDropdown = ({ emotions, emotion }) => {
  const neutral = emotions?.find(e => e.name === 'Neutral');

  const [selectedItem, setSelectedItem] = useState(emotion || neutral);

  return (
    <Dropdown
      selectedItem={selectedItem}
      onSelect={setSelectedItem}
      downshiftProps={{ itemToString: (item) => item && item.name }}
    >
      <Field>
        <Label hidden>Select emotion</Label>
        <Select>
          {selectedItem ? selectedItem.name : 'Emotion'}
        </Select>
      </Field>
      <Menu>
        {emotions?.map(item => <Item key={item.id} value={item}>{item.name}</Item>)}
      </Menu>
    </Dropdown>
  );
};

export default EmotionDropdown;
