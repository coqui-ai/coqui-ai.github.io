/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useAuth, useLoginEffect, useLogoutEffect } from '../../../../utils/auth';
import { Formik, Field, Form } from 'formik';

export const SignInForm = () => {
  const user = useAuth();
  const [login, { data, loading, error }] = useLoginEffect();
  const [logout] = useLogoutEffect();

  if (user)
    return (
      <>
        already logged in
        <button onClick={() => logout()}>sign out</button>
      </>
    );

  if (error) return 'error ' + error;
  if (loading) return 'loading ' + loading;
  if (data) return 'data ' + data;

  return (
    <Formik
      initialValues={{
        username: '',
        password: ''
      }}
      onSubmit={values => {
        login(values.username, values.password);
      }}
    >
      <Form>
        <label htmlFor="username">Username</label>
        <Field id="username" name="username" placeholder="" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" type="password" placeholder="" />

        <button type="submit">Sign In</button>
      </Form>
    </Formik>
  );
};
