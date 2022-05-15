/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useQuery, gql, useMutation } from '@apollo/client';
import { RequireAuth, ProfileContext } from './RequireAuth';

const UPDATE_PROFILE = gql`
  mutation updateProfile($personal_name: String!, $organization_name: String!) {
    updateProfile(personal_name: $personal_name, organization_name: $organization_name) {
      errors {
        field
        errors
      }
      profile {
        organization_name
        personal_name
        terms_accepted
      }
    }
  }
`;

export const CompleteProfile = ({ profile }) => {
  const [updateProfile, { data, loading, error }] = useMutation(UPDATE_PROFILE);

  return (
    <Formik
      initialValues={{
        personal_name: profile.personal_name,
        organization_name: profile.organization_name
      }}
      validate={values => {
        const errors = {};

        ['personal_name', 'organization_name'].forEach(k => {
          if (!values[k]) errors[k] = 'Required.';
        });

        return errors;
      }}
      onSubmit={({ personal_name, organization_name }, formik) =>
        updateProfile({ variables: { personal_name, organization_name } }).then(({ data }) => {
          if (data.errors) {
            formik.setStatus(
              Object.fromEntries(data.errors.map(({ field, errors }) => [field, errors.join(' ')]))
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

          <label htmlFor="personal_name">Enter your name here:</label>
          <Field id="personal_name" name="personal_name" type="personal_name" placeholder="" />
          {errors.personal_name && touched.personal_name ? <div>{errors.personal_name}</div> : null}
          {status?.personal_name ? <div>{status.personal_name}</div> : null}

          <label htmlFor="organization_name">Name of organization:</label>
          <Field
            id="organization_name"
            name="organization_name"
            type="organization_name"
            placeholder=""
          />
          {errors.organization_name && touched.organization_name ? (
            <div>{errors.organization_name}</div>
          ) : null}
          {status?.organization_name ? <div>{status.organization_name}</div> : null}

          <button type="submit">Sign Up & Login</button>
        </Form>
      )}
    </Formik>
  );
};
