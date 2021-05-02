/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import gfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { MODEL_CARD_COMPONENTS } from '../../components/MarkdownProvider/components/Markdown';

const ModelCard: React.FC<Record<string, unknown>> = ({ data }) => {
  return (
    <ReactMarkdown
      renderers={{
        ...MODEL_CARD_COMPONENTS
      }}
      plugins={[gfm]}
    >
      {data.pathContext.description}
    </ReactMarkdown>
  );
};

export default ModelCard;
