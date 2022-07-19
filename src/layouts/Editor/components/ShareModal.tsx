/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';

import { Field, Input, Label, Textarea } from '@zendeskgarden/react-forms';
import { Modal, Header, Body, Close } from '@zendeskgarden/react-modals';

import { Submit } from 'layouts/Root/components/Forms';

const ShareModal = ({ projectId, isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = () => {
    if (!email) {
      return false;
    }

    const params = new URLSearchParams({
      subject: 'Coqui Project',
      body: message,
    });

    console.log(`mailto:${email}?${params.toString()}`);

    return true;
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Modal onClose={onClose}>
      <Header>Share</Header>
      <Body>
        <form
          onSubmit={e => {
            e.preventDefault();
            submitForm();
          }}
        >
          <Field css={css`margin-bottom: ${p => p.theme.space.sm};`}>
            <Label hidden>Email Address</Label>
            <Input
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Field>
          <Field>
            <Label hidden>Message (Optional)</Label>
            <Textarea
              placeholder="Message (Optional)"
              value={message}
              onChange={e => setMessage(e.target.value)}
              minRows={10}
              maxRows={10}
            />
          </Field>
          <Submit>Send Invite</Submit>
        </form>
      </Body>
      <Close aria-label="Close" />
    </Modal>
  );
};

export default ShareModal;
