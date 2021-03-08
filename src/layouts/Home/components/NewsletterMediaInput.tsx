/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import DOMPurify from 'dompurify';
import { MediaInput, Message } from '@zendeskgarden/react-forms';
import { ReactComponent as MailIcon } from '@zendeskgarden/svg-icons/src/16/email-stroke.svg';

interface INewsletterMediaInputProps {
  status: string;
  message: string;
  onSubmitted: (formData: Record<string, string>) => void;
}

export const NewsletterMediaInput = ({
  status,
  message,
  onSubmitted
}: INewsletterMediaInputProps) => {
  const inputElement = useRef();

  const submit = event => {
    event.preventDefault();
    inputElement.current &&
      inputElement.current.value.indexOf('@') > -1 &&
      onSubmitted({
        EMAIL: inputElement.current.value
      });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <MediaInput
          start={<MailIcon />}
          type="email"
          name="member[email]"
          ref={inputElement}
          wrapperProps={{ style: { overflow: 'visible' } }}
        />
        {status === 'sending' && <Message validation="success">Sending...</Message>}
        {status === 'error' && (
          <Message validation="error">
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message) }} />
          </Message> // eslint-disable-line react/no-danger, @typescript-eslint/naming-convention
        )}
        {status === 'success' && (
          <Message validation="success">
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message) }} />
          </Message> // eslint-disable-line react/no-danger, @typescript-eslint/naming-convention
        )}
      </form>
    </div>
  );
};

export default NewsletterMediaInput;
