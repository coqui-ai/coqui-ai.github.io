/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import { useAuth, useLoginEffect, useRedirectToNewDomain } from 'utils/auth';
import { Formik, Form } from 'formik';
import { useMutation, gql } from '@apollo/client';
import { navigate } from 'gatsby';
import { CenterWell } from 'layouts/Root/components/Styled';
import { Input } from '@zendeskgarden/react-forms';
import { Field, Submit } from 'layouts/Root/components/Forms';

const SIGN_UP = gql`
  mutation SignUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      errors {
        field
        errors
      }
      date_joined
    }
  }
`;

export const SignUpForm = () => {
  useRedirectToNewDomain();

  return <>...</>;
};
