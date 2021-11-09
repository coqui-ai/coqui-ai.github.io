/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { MediaInput } from '@zendeskgarden/react-forms';
import { ReactComponent as SearchIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';

const SearchForm: React.FC = ({ searchQuery, setSearchQuery }) => {
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <form action="/ovh" method="get" autoComplete="off" onSubmit={onSubmit}>
      <MediaInput
        name="s"
        isCompact
        type="text"
        start={<SearchIcon />}
        defaultValue={searchQuery}
        placeholder="Search Competition"
        onInput={e => setSearchQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
