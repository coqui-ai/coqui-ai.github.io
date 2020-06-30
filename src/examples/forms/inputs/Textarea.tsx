/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Textarea } from '@zendeskgarden/react-forms';

const StyledCol = styled(Col)`
  @media (max-width: ${p => p.theme.breakpoints.sm}) {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <Field>
        <Label>Plant</Label>
        <Textarea />
      </Field>
    </Col>
    <StyledCol sm={5}>
      <Field>
        <Label>Plant</Label>
        <Textarea isResizable />
      </Field>
    </StyledCol>
  </Row>
);

export default Example;