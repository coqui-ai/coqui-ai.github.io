/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import DOMPurify from 'dompurify';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { Input, Label, Message } from '@zendeskgarden/react-forms';

interface ISignUpInputProps {
  status: string;
  message: string;
  onSubmitted: (formData: Record<string, string>) => void;
}

export const SignUpInput = ({ status, message, onSubmitted }: ISignUpInputProps) => {
  const fnameElement = useRef();
  const lnameElement = useRef();
  const orgElement = useRef();
  const emailElement = useRef();

  const submit = event => {
    event.preventDefault();
    onSubmitted({
      FNAME: fnameElement.current.value,
      LNAME: lnameElement.current.value,
      ORG: orgElement.current.value,
      EMAIL: emailElement.current.value,
      tags: '4203575',
      b_6faea2f1f19c814566173ffb0_29217798a3: ''
    });
  };

  const translate = rawMessage => {
    if (rawMessage === '0 - Please enter a value') {
      return 'Please enter your email address';
    }
    if (rawMessage === '1 - Please enter a value') {
      return 'Please enter your first name';
    }
    if (rawMessage === '2 - Please enter a value') {
      return 'Please enter your last name';
    }
    if (rawMessage === '5 - Please enter a value') {
      return 'Please enter your organization';
    }

    return rawMessage;
  };

  return (
    <div>
      <form onSubmit={submit}>
        <Label>
          First Name
          <Tooltip content="Required field">
            <sup>*</sup>
          </Tooltip>
        </Label>
        <Input
          type="text"
          name="FNAME"
          id="mce-FNAME"
          ref={fnameElement}
          placeholder="John"
          wrapperProps={{ style: { overflow: 'visible' } }}
        />
        <Label>
          Last Name
          <Tooltip content="Required field">
            <sup>*</sup>
          </Tooltip>
        </Label>
        <Input
          type="text"
          name="LNAME"
          id="mce-LNAME"
          ref={lnameElement}
          placeholder="Doe"
          wrapperProps={{ style: { overflow: 'visible' } }}
        />
        <Label>
          Organization
          <Tooltip content="Required field">
            <sup>*</sup>
          </Tooltip>
        </Label>
        <Input
          type="text"
          name="ORG"
          id="mce-ORG"
          ref={orgElement}
          placeholder="Organization"
          wrapperProps={{ style: { overflow: 'visible' } }}
        />
        <Label>
          Email
          <Tooltip content="Required field">
            <sup>*</sup>
          </Tooltip>
        </Label>
        <Input
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          placeholder="jdoe@organization.com"
          ref={emailElement}
          wrapperProps={{ style: { overflow: 'visible' } }}
        />
        <Label />
        <Input type="submit" value="Subscribe" />
        {status === 'sending' && <Message validation="success">Sending...</Message>}
        {status === 'error' && (
          <Message validation="error">
            {/* eslint-disable-next-line react/no-danger, @typescript-eslint/naming-convention */}
            <div
              dangerouslySetInnerHTML={{ __html: translate(DOMPurify.sanitize(message)) }}
            />{' '}
          </Message>
        )}
        {status === 'success' && (
          <Message validation="success">
            {/* eslint-disable-next-line react/no-danger, @typescript-eslint/naming-convention */}
            <div
              dangerouslySetInnerHTML={{ __html: translate(DOMPurify.sanitize(message)) }}
            />{' '}
          </Message>
        )}
      </form>
    </div>
  );
};

export default SignUpInput;
