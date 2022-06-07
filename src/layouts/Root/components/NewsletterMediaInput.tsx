/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import DOMPurify from 'dompurify';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { MediaInput, Message } from '@zendeskgarden/react-forms';

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
          end={
            <span // eslint-disable-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
              onClick={submit}
              role="button"
              css={css`
                border: 1.5px solid ${p => p.theme.palette.pumpkin};
                border-radius: 50%;
                width: 20px;
                height: 20px;
                text-align: center;
                color: ${p => p.theme.palette.pumpkin};
                font-size: 13px;

                &:hover {
                  cursor: pointer;
                }

                ${p => mediaQuery('down', 'sm', p.theme)} {
                  margin-top: auto;
                  margin-bottom: auto;
                }
              `}
            >
              →
            </span>
          }
          type="email"
          name="member[email]"
          placeholder="Enter your email address here"
          ref={inputElement}
          wrapperProps={{
            style: {
              overflow: 'visible',
              border: '2px solid rgba(70, 141, 106, 0.2)',
              background: 'rgba(70, 141, 106, 0.1)',
              borderRadius: '10px'
            }
          }}
          css={css`
            color: #fff;

            &::placeholder {
              color: #fff;
            }

            ${p => mediaQuery('down', 'sm', p.theme)} {
              padding-top: 10px;
              padding-bottom: 10px;
            }
          `}
        />
        {status === 'sending' && <Message validation="success">Sending...</Message>}
        {status === 'error' && (
          <Message validation="error">
            {/* eslint-disable-next-line react/no-danger, @typescript-eslint/naming-convention */}
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message) }} />{' '}
          </Message>
        )}
        {status === 'success' && (
          <Message validation="success">
            {/* eslint-disable-next-line react/no-danger, @typescript-eslint/naming-convention */}
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message) }} />{' '}
          </Message>
        )}
      </form>
    </div>
  );
};

export default NewsletterMediaInput;
