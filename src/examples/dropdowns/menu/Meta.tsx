/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Dropdown, Menu, Item, ItemMeta, Trigger } from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as ChevronIcon } from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

const Example = () => {
  const [rotated, setRotated] = useState<boolean | undefined>();

  return (
    <Row>
      <Col textAlign="center">
        <Dropdown
          onSelect={item => alert(`You planted a ${item}`)}
          onStateChange={options =>
            Object.prototype.hasOwnProperty.call(options, 'isOpen') && setRotated(options.isOpen)
          }
        >
          <Trigger>
            <Button>
              Menu
              <Button.EndIcon isRotated={rotated}>
                <ChevronIcon />
              </Button.EndIcon>
            </Button>
          </Trigger>
          <Menu>
            <Item value="cactus">
              Cactus
              <ItemMeta>10 available</ItemMeta>
            </Item>
            <Item value="flower">
              Flower
              <ItemMeta>20 available</ItemMeta>
            </Item>
            <Item value="succulent">
              Succulent
              <ItemMeta>30 available</ItemMeta>
            </Item>
          </Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default Example;