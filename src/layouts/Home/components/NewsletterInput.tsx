/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { MediaInput } from '@zendeskgarden/react-forms';
import { ReactComponent as StartIcon } from '@zendeskgarden/svg-icons/src/16/email-stroke.svg';

export const NewsletterInput = React.forwardRef<HTMLInputElement, HTMLAttributes<HTMLInputElement>>(
  ({ ...props }, ref) => {
    return (
      <div>
        <MediaInput
          disabled
          start={<StartIcon />}
          ref={ref}
          type="email"
          id="member_email"
          name="member[email]"
          wrapperProps={{ style: { overflow: 'visible' } }}
          {...props}
        />
      </div>
    );
  }
);
