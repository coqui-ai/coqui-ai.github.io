/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';

import { navigate } from 'gatsby';
import { DocumentText } from 'iconsax-react';
import { Dropdown, Field, Item, Label, Menu, Select } from '@zendeskgarden/react-dropdowns';

const SceneDropdown = ({ projectId, scenes, scene }) => {
  const [selectedItem, setSelectedItem] = useState(scene);

  const onSelect = (item) => {
    if (item) {
      setSelectedItem(item);
      navigate(`/editor/project/${projectId}/scene/${item.id}/`);
    }
  };

  return (
    <Dropdown
      selectedItem={selectedItem}
      onSelect={onSelect}
      downshiftProps={{ itemToString: (item) => item && item.name }}
    >
      <Field>
        <Label hidden>Select scene</Label>
        <Select
          start={<DocumentText color="#ed8f1c" variant="Bold" />}
        >
          {selectedItem?.name || 'Scene'}
        </Select>
      </Field>
      <Menu>
        {scenes?.map(item => <Item key={item.id} value={item}>{item.name}</Item>)}
      </Menu>
    </Dropdown>
  );
};

export default SceneDropdown;
