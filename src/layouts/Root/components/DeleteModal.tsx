/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Loading, OrangeButton } from 'layouts/Root/components/Styled';
import { css } from 'styled-components';
import { Button } from '@zendeskgarden/react-buttons';
import { Modal, Header, Body, Close } from '@zendeskgarden/react-modals';

export const DeleteModal = ({ children, onCancel, onDelete, loading }) => (
  <Modal
    onClose={onCancel}
    css={css`
      width: 477px;
    `}
  >
    <Header>{children}</Header>
    <Body>
      {loading ? (
        <Loading />
      ) : (
        <OrangeButton
          onClick={onDelete}
          css={css`
            width: 100%;
          `}
        >
          Yes, delete
        </OrangeButton>
      )}

      <Button
        onClick={onCancel}
        css={css`
          width: 100%;
          border: none;
          color: black;
          margin-top: 10px;
        `}
      >
        Cancel
      </Button>
    </Body>
    <Close aria-label="Close modal" />
  </Modal>
);
