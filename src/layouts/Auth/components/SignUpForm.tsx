/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import { useAuth, useLoginEffect } from '../../../../utils/auth';
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
  const user = useAuth();
  const [login] = useLoginEffect();
  const [signUp, { loading }] = useMutation(SIGN_UP);

  useEffect(() => {
    if (user) navigate('/auth/profile');
  }, [user]);

  return (
    <CenterWell title="Sign Up">
      <Formik
        initialValues={{
          email: '',
          password: '',
          password2: ''
        }}
        validate={values => {
          const errors = {};

          ['email', 'password', 'password2'].forEach(k => {
            if (!values[k]) errors[k] = 'Required.';
          });

          if (values.password != values.password2) errors.password2 = 'Passwords must match';

          return errors;
        }}
        onSubmit={({ email, password }, formik) =>
          signUp({ variables: { email, password } }).then(({ data }) => {
            if (data.signUp.errors) {
              formik.setStatus(
                Object.fromEntries(
                  data.signUp.errors.map(({ field, errors }) => [field, errors.join(' ')])
                )
              );
            } else {
              login(email, password);
            }
          })
        }
      >
        {({ status }) => (
          <Form>
            {status?.__all__ ? <div>{status.__all__}</div> : null}

            <Field name="email" label="E-Mail" as={Input} type="email" />

            <Field name="password" label="Password" as={Input} type="password" />

            <Field name="password2" label="Please repeat the password" as={Input} type="password" />

            <Submit loading={loading || user}>Sign Up</Submit>
          </Form>
        )}
      </Formik>
    </CenterWell>
  );
};
