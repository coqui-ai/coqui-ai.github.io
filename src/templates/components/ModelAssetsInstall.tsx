/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import React, { useState, useEffect } from 'react';
import { postModelMetaDataToServer } from './utils';
import { Message } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Stepper } from '@zendeskgarden/react-accordions';
import { tagNameMap } from '../../layouts/Models/components/TagNameMap';
import { ReactComponent as SignpostIcon } from '@zendeskgarden/svg-icons/src/16/signpost-stroke.svg';

interface INode {
  contentType: string;
  downloadCount: number;
  downloadUrl: string;
  name: string;
  size: number;
  url: string;
}

const StyledContainer = styled.div`
  margin: ${p => p.theme.space.md} 0 0 0;
`;

const capitalize = s => {
  if (typeof s !== 'string') {
    return '';
  }

  return s.charAt(0).toUpperCase() + s.slice(1);
};

const getModelURL = (extension: string, nodes: INode[]) => {
  // "There can be only one!" -The Kurgan
  for (const node of nodes) {
    if (node.name.endsWith(extension)) {
      return node.downloadUrl;
    }
  }

  return undefined;
};

const getModelMetaData = (
  data: Record<string, unknown>,
  location: Record<string, unknown>,
  parsedParameters: Record<string, unknown>
) => {
  const dataArray = [];

  const tagName = location.pathname.substring(1);

  const desiredModelExtension = parsedParameters.prefer_tflite === '1' ? '.tflite' : '.pbmm';

  dataArray.push(parsedParameters.name);
  dataArray.push(capitalize(tagName.split('/')[0]));
  dataArray.push(parsedParameters.callback_url);
  dataArray.push(tagNameMap[tagName][0]);
  dataArray.push(tagName.split('/')[2]);
  dataArray.push(getModelURL(desiredModelExtension, data.pathContext.releaseAssets.nodes));
  dataArray.push(getModelURL('.scorer', data.pathContext.releaseAssets.nodes));

  return dataArray;
};

const ModelAssetsInstall: React.FC<Record<string, unknown>> = ({ data }) => {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState(null);

  const location = useLocation();
  const parsedParameters = queryString.parse(location.search);

  const modelMetaData = getModelMetaData(data, location, parsedParameters);

  useEffect(() => {
    setStep(1);
    setStatus('installing');
    postModelMetaDataToServer(...modelMetaData).then(
      response => {
        setStep(2);
        setStatus('installed');
        setTimeout(() => {
          window.location = response.request.responseURL;
        }, 500);
      },
      () => {
        setStatus('installError');
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row justifyContent="center">
      <Col sm={10} textAlign="center">
        <Stepper activeIndex={step} isHorizontal>
          <Stepper.Step key="step-1">
            <Stepper.Label icon={<SignpostIcon />}>About to Install</Stepper.Label>
          </Stepper.Step>
          <Stepper.Step key="step-2">
            <Stepper.Label icon={<SignpostIcon />}>Installing</Stepper.Label>
          </Stepper.Step>
          <Stepper.Step key="step-3">
            <Stepper.Label icon={<SignpostIcon />}>Finished Installing</Stepper.Label>
          </Stepper.Step>
        </Stepper>
        <StyledContainer>
          {status === 'installError' && (
            <Message validation="error">
              Install error, please ensure your server is running.
            </Message>
          )}
        </StyledContainer>
      </Col>
    </Row>
  );
};

export default ModelAssetsInstall;
