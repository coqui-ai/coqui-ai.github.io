/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Formik, Form } from 'formik';
import { gql, useMutation } from '@apollo/client';
import { CenterWell, Loading } from 'layouts/Root/components/Styled';
import { Submit, Field } from 'layouts/Root/components/Forms';
import { Input } from '@zendeskgarden/react-forms';

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
  const [updateProfile, { loading }] = useMutation(UPDATE_PROFILE);

  return (
    <CenterWell title="Complete your profile!">
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
                Object.fromEntries(
                  data.errors.map(({ field, errors }) => [field, errors.join(' ')])
                )
              );
            } else {
              return data;
            }
          })
        }
      >
        {({ status }) => (
          <Form>
            {status?.__all__ ? <div>{status.__all__}</div> : null}

            <Field name="personal_name" label="Enter your name here:" as={Input} />
            <Field name="organization_name" label="Name of Organization:" as={Input} />

            {loading ? <Loading /> : <Submit>Sign Up & Login</Submit>}
          </Form>
        )}
      </Formik>
    </CenterWell>
  );
};
