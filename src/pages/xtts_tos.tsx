/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import pdf from '../data/pdfs/xtts_tos.pdf';
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

const ToS: React.FC = () => {
  const docs = [{ uri: pdf }];

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
};

export default ToS;
