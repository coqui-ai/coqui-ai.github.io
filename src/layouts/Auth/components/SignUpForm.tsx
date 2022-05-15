/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useAuth, useLoginEffect, useLogoutEffect } from '../../../../utils/auth';
import { Formik, Field, Form } from 'formik';
import { useMutation, gql } from '@apollo/client';

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
  const [signUp, { data, loading, error }] = useMutation(SIGN_UP);
  const [logout] = useLogoutEffect();

  if (user)
    return (
      <>
        already logged in
        <button onClick={() => logout()}>sign out</button>
      </>
    );

  if (error) return 'error ' + error;
  // if (loading) return 'loading ' + loading;
  if (data?.signUp?.date_joined) return 'data ' + data.signUp.date_joined;

  return (
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
            return data;
          }
        })
      }
    >
      {({ errors, touched, status }) => (
        <Form>
          {status?.__all__ ? <div>{status.__all__}</div> : null}

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" placeholder="" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          {status?.email ? <div>{status.email}</div> : null}

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" placeholder="" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          {status?.password ? <div>{status.password}</div> : null}

          <label htmlFor="password2">Password</label>
          <Field id="password2" name="password2" type="password2" placeholder="" />
          {errors.password2 && touched.password2 ? <div>{errors.password2}</div> : null}

          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};
