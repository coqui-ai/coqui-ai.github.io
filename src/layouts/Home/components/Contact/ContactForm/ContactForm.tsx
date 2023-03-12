/* eslint-disable react/jsx-curly-newline */
import { Button } from '@zendeskgarden/react-buttons';
import { Field, Label, Message, Textarea } from '@zendeskgarden/react-forms';
import { getColor } from '@zendeskgarden/react-theming';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { css } from 'styled-components';
import { ContactFormContainer, InputStyled, TextareaStyled } from './styled';

type ContactFormType = {
  name: string;
  company: string;
  title: string;
  reason: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    company: '',
    title: '',
    reason: '',
    email: '',
    message: ''
  });
  const [emailError, setEmailError] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [companyError, setCompanyError] = useState<string>('');
  const [titleError, setTitleError] = useState<string>('');
  const [reasonError, setReasonError] = useState<string>('');

  const emailValidate: (value: string) => void = value => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/iu.test(value)) {
      error = 'Invalid email address';
    }
    setEmailError(error || '');
  };

  const nameRequiredFieldValidation: (value: string) => boolean = value => {
    const err = !value ? 'Name is required' : '';
    setNameError(err);
    return !!err;
  };

  const companyRequiredFieldValidation: (value: string) => boolean = value => {
    const err = !value ? 'Company is required' : '';
    setCompanyError(err);
    return !!err;
  };

  const titleRequiredFieldValidation: (value: string) => boolean = value => {
    const err = !value ? 'Title is required' : '';
    setTitleError(err);
    return !!err;
  };

  const reasonRequiredFieldValidation: (value: string) => boolean = value => {
    const err = !value ? 'Reason is required' : '';
    setReasonError(err);
    return !!err;
  };

  const inputChangeHandler: (
    val: string,
    key: string,
    required: boolean,
    validationFn?: any
  ) => void = (val, key, required, validationFn) => {
    if (required) validationFn(val);
    setFormData({ ...formData, [key]: val });
  };

  const formNotValid: () => boolean = () => {
    if (formData.name.length === 0) setNameError('Required');
    if (formData.email.length === 0) setEmailError('Required');
    if (formData.company.length === 0) setCompanyError('Required');
    if (formData.title.length === 0) setTitleError('Required');
    if (formData.reason.length === 0) setReasonError('Required');
    return (
      Boolean(nameError) ||
      Boolean(titleError) ||
      Boolean(companyError) ||
      Boolean(reasonError) ||
      Boolean(emailError) ||
      formData.name.length === 0 ||
      formData.email.length === 0 ||
      formData.company.length === 0 ||
      formData.title.length === 0 ||
      formData.reason.length === 0
    );
  };

  const submitForm: () => void = () => {
    if (formNotValid()) return;
    console.log('SUBITTING FORM');
  };

  return (
    <ContactFormContainer
      onSubmit={e => {
        e.preventDefault();
        submitForm();
      }}
    >
      <Field>
        <Label>Name*</Label>
        <InputStyled
          onChange={e =>
            inputChangeHandler(e.target.value, 'name', true, nameRequiredFieldValidation)
          }
        />
        {nameError && <Message validation="error">{nameError}</Message>}
      </Field>
      <Field>
        <Label>Company*</Label>
        <InputStyled
          onChange={e =>
            inputChangeHandler(e.target.value, 'company', true, companyRequiredFieldValidation)
          }
        />
        {companyError && <Message validation="error">{companyError}</Message>}
      </Field>
      <Field>
        <Label>Title*</Label>
        <InputStyled
          onChange={e =>
            inputChangeHandler(e.target.value, 'title', true, titleRequiredFieldValidation)
          }
        />
        {titleError && <Message validation="error">{titleError}</Message>}
      </Field>
      <Field>
        <Label>What will you use Coqui Studio for?*</Label>
        <InputStyled
          onChange={e =>
            inputChangeHandler(e.target.value, 'reason', true, reasonRequiredFieldValidation)
          }
        />
        {reasonError && <Message validation="error">{reasonError}</Message>}
      </Field>
      <Field>
        <Label>Email*</Label>
        <InputStyled
          onChange={e => inputChangeHandler(e.target.value, 'email', true, emailValidate)}
        />
        {emailError && <Message validation="error">{emailError}</Message>}
      </Field>
      <Field>
        <Label>Message</Label>
        <TextareaStyled minRows={2} maxRows={12} />
        {/* <Message validation="error">A cactus is a beautiful plant</Message> */}
      </Field>
      <Button
        type="submit"
        css={css`
          border-width: 0;
          background-color: ${p => getColor('yellow', 600, p.theme)};
          color: #fff;
          border-radius: 30px;
          font-weight: 400;
          padding: 18px 24px;
          width: fit-content;
        `}
      >
        Send a message
      </Button>
    </ContactFormContainer>
  );
};
