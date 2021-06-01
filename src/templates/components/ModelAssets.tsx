/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import ModelAssetsInstall from './ModelAssetsInstall';
import ModelAssetsDownload from './ModelAssetsDownload';

const ModelAssets: React.FC<Record<string, unknown>> = ({ data }) => {
  const location = useLocation();
  const parsedParameters = queryString.parse(location.search);
  const isDownloading = parsedParameters.callback_url === undefined;

  return (
    <>
      {isDownloading && <ModelAssetsDownload data={data} />}
      {!isDownloading && <ModelAssetsInstall data={data} />}
    </>
  );
};

export default ModelAssets;
