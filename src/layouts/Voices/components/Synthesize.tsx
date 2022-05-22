/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Form, Formik, connect, Field as FormikField } from 'formik';
import * as GardenForms from '@zendeskgarden/react-forms';
import { DefaultTheme } from 'styled-components';
import { ThemeProvider } from '@zendeskgarden/react-theming';

import { VoicesDropdown } from 'layouts/Root/components/VoicesDropdown';
import { Field, Submit } from 'layouts/Root/components/Forms';
import { CenterContent, Loading, TitleBar } from 'layouts/Root/components/Styled';
import { navigate } from 'gatsby';
import { Link } from 'layouts/Root/components/StyledNavigationLink';
import { ArrowLeft } from 'iconsax-react';
import { Input, Textarea, Range } from '@zendeskgarden/react-forms';
import { Well } from '@zendeskgarden/react-notifications';
import { css } from 'styled-components';

const VOICE = gql`
  query voice($id: String!) {
    voice(id: $id) {
      id
      name
    }
  }
`;

const CREATE_SAMPLE = gql`
  mutation createSample($name: String!, $voice_id: String!, $text: String!, $speed: String!) {
    createSample(name: $name, voice_id: $voice_id, text: $text, speed: $speed) {
      errors {
        field
        errors
      }
      sample {
        id
        name
        created_at
        voice_id
        audio
      }
    }
  }
`;

const SpeedControl = connect(props => {
  const theme = (parentTheme: DefaultTheme) => ({
    ...parentTheme,
    space: { ...parentTheme.space, base: 3 },
    colors: { ...parentTheme.colors, primaryHue: '#ed8f1c' }
  });

  return (
    <ThemeProvider focusVisibleRef={null} theme={theme as any}>
      <GardenForms.Field>
        <GardenForms.Label
          css={`
            font-weight: 400;
          `}
        >
          Speed
        </GardenForms.Label>
        <Well
          css={css`
            height: 103px;
            padding: 0;
            color: #313940;
            border-color: #186146;
            overflow: hidden;
          `}
        >
          <div
            css={css`
              // border-bottom: 1px solid #c2c8cc;
              background-color: rgba(24, 97, 70, 0.1);
              height: 44px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 -30px;

              & div {
                flex-grow: 1;
                width: 33%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            `}
          >
            <div onClick={() => props.formik.setFieldValue('speed', 0)}>0.5x (2x slower)</div>
            <div onClick={() => props.formik.setFieldValue('speed', 1)}>1x (normal)</div>
            <div onClick={() => props.formik.setFieldValue('speed', 2)}>2x (faster)</div>
          </div>
          <div
            css={css`
              height: 5px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: -2.5px 90px;

              & div {
                flex-grow: 1;
                height: 5px;
                width: 33%;
                margin-left: -1px;
                border-left: 1px #186146 solid;
                border-right: 1px #186146 solid;
              }
            `}
          >
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
          <div
            css={css`
              padding: 20px 83px;
            `}
          >
            <FormikField name="speed" id="speed" as={Range} min={0} max={2} />
          </div>
        </Well>
      </GardenForms.Field>
    </ThemeProvider>
  );
});

export const Synthesize: React.FC = ({ locationState = null, id }) => {
  const { data, loading: voiceLoading, error } = useQuery(VOICE, { variables: { id } });

  const voice = data?.voice;

  const [createSample, createSampleStatus] = useMutation(CREATE_SAMPLE);

  if (voiceLoading) return <Loading />;

  return (
    <>
      <TitleBar>
        <Link to="/voices">
          <ArrowLeft size={24} />
        </Link>
        &nbsp;&nbsp; Synthesize Voice
      </TitleBar>

      <CenterContent>
        <Formik
          initialValues={{
            name: '',
            text: '',
            speed: '1',
            ...locationState?.formValues
          }}
          validate={values => {
            const errors = {};

            ['name', 'text'].forEach(k => {
              if (!values[k]) errors[k] = 'Required.';
            });

            return errors;
          }}
          onSubmit={values => {
            createSample({
              variables: {
                ...values,
                speed: { 0: '0.5', 1: '1', 2: '2' }[values.speed],
                voice_id: voice.id
              }
            });
            // todo: show errors
          }}
        >
          {({ values }) => (
            <Form>
              <Field name="name" label="Name your audio" as={Input} />
              <GardenForms.Field
                css={`
                  min-height: 106px;
                `}
              >
                <GardenForms.Label
                  css={`
                    font-weight: 400;
                  `}
                >
                  Select Voice
                </GardenForms.Label>

                <VoicesDropdown
                  value={voice}
                  onSelect={voice => {
                    navigate(`/voices/${voice.id}/synthesize`, { state: { formValues: values } });
                  }}
                  style={{
                    marginTop: 9,
                    fontWeight: 700,
                    backgroundColor: '#F2F4F5'
                  }}
                />
              </GardenForms.Field>

              <Field
                name="text"
                label="Input your text here"
                as={Textarea}
                style={{ height: 229 }}
                fieldStyle={{ minHeight: 285 }}
              />

              <SpeedControl />

              <Submit loading={createSampleStatus.loading}>Submit</Submit>
            </Form>
          )}
        </Formik>
      </CenterContent>
    </>
  );
};
