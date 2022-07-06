/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';

import { DocumentText } from 'iconsax-react';
import { Dropdown, Field, Item, Label, Menu, Select } from '@zendeskgarden/react-dropdowns';

const SceneDropdown = ({ scenes, scene, onSelect }) => {
  return (
    <Dropdown
      selectedItem={scene}
      onSelect={onSelect}
      downshiftProps={{ itemToString: (item) => item && item.name }}
    >
      <Field>
        <Label hidden>Select scene</Label>
        <Select start={<DocumentText color="#ed8f1c" variant="Bold" />}>
          {scene?.name || 'Scene'}
        </Select>
      </Field>
      <Menu>
        {scenes?.map(item => <Item key={item.id} value={item}>{item.name}</Item>)}
      </Menu>
    </Dropdown>
  );
};

export default SceneDropdown;