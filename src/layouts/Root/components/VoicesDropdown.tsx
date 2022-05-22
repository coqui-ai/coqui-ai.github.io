/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect } from 'react';
import { Item, Menu, Field, Dropdown, Combobox } from '@zendeskgarden/react-dropdowns';
import { SearchNormal1 } from 'iconsax-react';
import { gql, useLazyQuery, useApolloClient } from '@apollo/client';

const VOICE_SEARCH = gql`
  query voiceSearch($query: String!) {
    voiceSearch(query: $query) {
      id
      name
    }
  }
`;

export const VoicesDropdown = ({ value, onSelect, style = null }) => {
  const client = useApolloClient();
  const [searchVoices, { data, loading }] = useLazyQuery(VOICE_SEARCH);

  // will look up in the Apollo cache, no request
  const lookupVoice = id =>
    client.readFragment({
      id: `Voice:${id}`,
      fragment: gql`
        fragment SubVoice on Voice {
          id
          name
        }
      `
    });

  const matchingVoices = data?.voiceSearch || [];

  const [inputValue, setInputValue] = useState(value?.name || '');

  useEffect(() => {
    if (inputValue) {
      searchVoices({ variables: { query: inputValue } });
    }
  }, [inputValue]);

  const renderOptions = () => {
    if (loading) {
      return <Item disabled>Loading items...</Item>;
    }

    if (matchingVoices.length === 0) {
      return <Item disabled>No matches found</Item>;
    }

    return matchingVoices.map(voice => (
      <Item key={voice.id} value={voice.id}>
        <span>{voice.name}</span>
      </Item>
    ));
  };

  return (
    <Dropdown
      inputValue={inputValue}
      onInputValueChange={value => setInputValue(value)}
      onSelect={id => onSelect(lookupVoice(id))}
    >
      <Field>
        <Combobox
          placeholder="Search for a voice"
          end={<SearchNormal1 color="#ED8F1C" />}
          style={style}
        />
      </Field>
      <Menu>{renderOptions()}</Menu>
    </Dropdown>
  );
};
