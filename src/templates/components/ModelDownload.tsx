/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import ModelModal from './ModelModal';
import queryString from 'query-string';
import React, { useState } from 'react';
import ModelAssets from './ModelAssets';
import { useLocation } from '@reach/router';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { MD, Span } from '@zendeskgarden/react-typography';
import { StyledH2, ModelCardHr } from 'components/MarkdownProvider/components/Typography';

const ModelDownload: React.FC<Record<string, unknown>> = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [emailRegistered, setEmailRegistered] = useState(false);

  const location = useLocation();
  const parsedParameters = queryString.parse(location.search);
  const isDownloading = parsedParameters.callback_url === undefined;
  const mode = isDownloading ? 'Download' : 'Install';

  const onRegisteration = () => {
    setModalVisible(false);
    setEmailRegistered(true);
  };

  const onNoRegisteration = () => {
    setModalVisible(false);
  };

  return (
    <>
      <StyledH2 id="download">{mode}</StyledH2>
      <ModelCardHr />
      <Row>
        <Col textAlign="center">
          {!emailRegistered && (
            <Button onClick={() => setModalVisible(true)}>Enter Email to {mode}</Button>
          )}
          {modalVisible && (
            <ModelModal
              tagName={data.pathContext.tagName}
              onRegisteration={onRegisteration}
              onNoRegisteration={onNoRegisteration}
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col textAlign="center">
          {!emailRegistered && (
            <MD tag="span">
              <Span isBold>Why an email?</Span> To keep you posted on model and language updates!
            </MD>
          )}
        </Col>
      </Row>
      {emailRegistered && <ModelAssets data={data} />}
    </>
  );
};

export default ModelDownload;
