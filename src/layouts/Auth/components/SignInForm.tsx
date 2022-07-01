/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import { useAuth, useLoginEffect } from 'utils/auth';
import { Formik, Form } from 'formik';
import { Link, navigate } from 'gatsby';
import { CenterWell, Loading } from 'layouts/Root/components/Styled';
import { Field, Submit } from 'layouts/Root/components/Forms';
import { Input } from '@zendeskgarden/react-forms';
import { Paragraph, Span } from '@zendeskgarden/react-typography';

export const SignInForm = ({ redirect = true }) => {
  const user = useAuth();
  const [login, { loading, error }] = useLoginEffect();

  useEffect(() => {
    if (user && redirect) navigate('/voices');
  }, [user, redirect]);

  return (
    <CenterWell title="Sign In">
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
          <Field name="username" label="E-Mail" as={Input} type="email" />

          <Field
            name="password"
            label="Password"
            as={Input}
            type="password"
            error={error ? 'Please, enter valid credentials' : null}
          />

          {loading || user ? <Loading /> : <Submit>Sign In</Submit>}

          <Paragraph>
            Don’t have an account yet?{' '}
            <Span isBold>
              <Link to="/auth/signup">Sign Up Here</Link>
            </Span>
          </Paragraph>
        </Form>
      </Formik>
    </CenterWell>
  );
};
