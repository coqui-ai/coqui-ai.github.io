/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import { putEmailOnList, postTagToEmailOnList } from './utils';
import { MediaInput, Message } from '@zendeskgarden/react-forms';
import { Modal, Header, Body, Footer, FooterItem, Close } from '@zendeskgarden/react-modals';
import { ReactComponent as MailIcon } from '@zendeskgarden/svg-icons/src/16/email-stroke.svg';

type OnRegisteration = () => void;

type OnNoRegisteration = () => void;

const ModelModal: React.FC<string, OnRegisteration, OnNoRegisteration> = ({
  tagName,
  onRegisteration,
  onNoRegisteration
}) => {
  const inputElement = useRef();
  const [status, setStatus] = useState(null);

  const onSubmit = () => {
    if (inputElement.current && inputElement.current.value.indexOf('@') === -1) {
      setStatus('emailFormatError');

      return;
    }
    setStatus('sending');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    putEmailOnList(inputElement.current.value, '0216b6525c').then(
      putValue => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        postTagToEmailOnList(tagName, inputElement.current.value, '0216b6525c').then(
          postValue => {
            setStatus('success');
            onRegisteration();
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          },
          postReason => {
            setStatus('tagAdditionError');
          }
        );
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      },
      putReason => {
        setStatus('emailAdditionError');
      }
    );
  };

  return (
    <Modal onClose={onNoRegisteration}>
      <Header>Please enter your email for model download</Header>
      <Body>
        <MediaInput
          start={<MailIcon />}
          type="email"
          name="member[email]"
          ref={inputElement}
          wrapperProps={{ style: { overflow: 'visible' } }}
        />
        {status === 'sending' && <Message validation="success">Sending...</Message>}
        {status === 'emailFormatError' && (
          <Message validation="error">Invalid email format</Message>
        )}
        {status === 'emailAdditionError' && (
          <Message validation="error">Unable to save email to regsitration list</Message>
        )}
        {status === 'tagAdditionError' && (
          <Message validation="error">Unable to register email as downloading model</Message>
        )}
        {status === 'success' && <Message validation="success">Registered successfully</Message>}
      </Body>
      <Footer>
        <FooterItem>
          <Button onClick={onNoRegisteration} isBasic>
            Cancel
          </Button>
        </FooterItem>
        <FooterItem>
          <Button isPrimary onClick={onSubmit}>
            Submit
          </Button>
        </FooterItem>
      </Footer>
      <Close aria-label="Close modal" />
    </Modal>
  );
};

export default ModelModal;
