/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Paragraph, Span } from '@zendeskgarden/react-typography';
import { CenterWell } from 'layouts/Root/components/Styled';
import { Submit } from 'layouts/Root/components/Forms';
import { css } from 'styled-components';
import { Checkbox, Field, Label } from '@zendeskgarden/react-forms';

const ACCEPT_TERMS = gql`
  mutation {
    updateProfile(terms_accepted: true) {
      errors {
        field
        errors
      }
      profile {
        terms_accepted
      }
    }
  }
`;

export const AcceptTerms: React.FC = () => {
  const [acceptTerms, { loading }] = useMutation(ACCEPT_TERMS);
  const [isChecked, setChecked] = useState(false);

  return (
    <CenterWell
      title="Before you get started"
      css={css`
        width: 603px;
        & p {
          text-align: left;
        }
      `}
    >
      <Paragraph>
        <Span isBold>Restricted Content</Span> <br />
        You may not use Coqui.ai for defamation, scams, illicit content, or other use cases where
        you are “hiding behind a fake voice”. Content flags are used for enforcing our terms of
        service. All flagged content is monitored by our team for breaches and actioned directly
        with the account holder. Our terms of service cover both commercial and private usage of
        generated audio.
      </Paragraph>
      <Paragraph>
        We recommend reading our Terms of Service for a more concise list - feel free to reach out
        to us directly if you aren’t sure.
      </Paragraph>

      <Field
        css={css`
          margin-top: 39px;
        `}
      >
        <Checkbox checked={isChecked} onChange={() => setChecked(!isChecked)}>
          <Label>I have read and understood the Terms and Conditions</Label>
        </Checkbox>
      </Field>

      <Submit loading={loading} disabled={!isChecked} onClick={acceptTerms}>
        I Agree
      </Submit>
    </CenterWell>
  );
};
