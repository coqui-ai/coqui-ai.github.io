/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import queryString from 'query-string';
import React from 'react';
import ModelAssets from './ModelAssets';
import { useLocation } from '@reach/router';
import { StyledH2, ModelCardHr } from 'components/MarkdownProvider/components/Typography';

const ModelDownload: React.FC<Record<string, unknown>> = ({ data }) => {
  const location = useLocation();
  const parsedParameters = queryString.parse(location.search);
  const isDownloading = parsedParameters.callback_url === undefined;
  const mode = isDownloading ? 'Download' : 'Install';

  return (
    <>
      <StyledH2 id="download">{mode}</StyledH2>
      <ModelCardHr />
      <ModelAssets data={data} />
    </>
  );
};

export default ModelDownload;
