/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState } from 'react';
import { css, DefaultTheme } from 'styled-components';

import { DocumentText } from 'iconsax-react';
import { Autocomplete, Dropdown, Field, Item, Label, Menu } from '@zendeskgarden/react-dropdowns';
import { getColor, ThemeProvider } from '@zendeskgarden/react-theming';

const SceneDropdown = ({ items, selectedItem, onSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(items);
  const [matchingOptions, setMatchingOptions] = useState(items);

  const theme = (parentTheme: DefaultTheme) => ({
    ...parentTheme,
    components: {
      'forms.faux_input': css`
        align-items: center;
        background-color: #012b30;
        border-color: #144543;
        color: #fff;
        padding-top: ${p => p.theme.space.base}px;
        padding-bottom: ${p => p.theme.space.base}px;
      `,
      'forms.input': css`
        color: #fff;
        flex-grow: 1;
        width: 60px;
      `,
      'forms.media_figure': css`
        color: #ed8f1c;
        margin-bottom: 0;
      `,
      'dropdowns.menu': css`
        scrollbar-color: #ed8f1c transparent;
        width: auto !important;
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
        &:not(:last-child) {
          border-bottom: ${p => p.theme.borderWidths.sm} ${p => p.theme.borderStyles.solid} ${p => getColor('neutralHue', 200, p.theme)};
        }
      `,
      'dropdowns.item_icon': css`
        color: ${p => p.isDisabled ? 'inherit' : '#ed8f1c'};
      `,
    }
  });

  useEffect(() => {
    setOptions(items);
  }, [items]);

  useEffect(() => {
    const normalize = (s) => s.trim().toLowerCase();
    setMatchingOptions(options?.filter(
      item => normalize(item.name).includes(normalize(inputValue))
    ));
  }, [inputValue, options]);

  return (
    <ThemeProvider focusVisibleRef={null} theme={theme as any}>
      <Dropdown
        inputValue={inputValue}
        selectedItem={selectedItem}
        onSelect={onSelect}
        onInputValueChange={setInputValue}
        downshiftProps={{
          itemToString: (item) => item && item.name,
        }}
      >
        <Field>
          <Label hidden>Select scene</Label>
          <Autocomplete
            start={
              <DocumentText
                color="#ed8f1c"
                variant="Bold"
                css={css`
                  width: 24px;
                  height: 24px;
                `}
              />
            }
          >
            {selectedItem?.name || 'Scene'}
          </Autocomplete>
        </Field>
        <Menu>
          {matchingOptions?.length ? (
            matchingOptions.map(item => <Item key={item.id} value={item}>{item.name}</Item>)
          ) : (
            <Item disabled>No matches found</Item>
          )}
        </Menu>
      </Dropdown>
    </ThemeProvider>
  );
};

export default SceneDropdown;
