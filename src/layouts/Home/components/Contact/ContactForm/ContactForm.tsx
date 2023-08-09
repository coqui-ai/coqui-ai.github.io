/* eslint-disable react/jsx-curly-newline */
import { Button } from '@zendeskgarden/react-buttons';
import { Field, Label, Message } from '@zendeskgarden/react-forms';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import React, { useState } from 'react';
import { css } from 'styled-components';
import { ContactFormContainer, InputStyled, SelectStyled, TextareaStyled } from './styled';

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
    const path =
      'https://docs.google.com/forms/d/e/1FAIpQLSfjgbyut8Ptcn1OZ-6COJ2BPMVgSDPBuw3PCjiypzi5nbljXA/viewform?usp=pp_url&';
    const query = `entry.669377778=${encodeURIComponent(
      formData.name
    )}&entry.264191649=${encodeURIComponent(
      formData.company
    )}&entry.1362561919=${encodeURIComponent(formData.title)}&entry.467657495=${encodeURIComponent(
      formData.reason
    )}&entry.919102681=${encodeURIComponent(formData.message)}`.replaceAll('%20', '+');
    window.open(`${path}${query}`, '_BLANK');
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
        <SelectStyled
          onChange={e =>
            inputChangeHandler(e.target.value, 'reason', true, reasonRequiredFieldValidation)
          }
        >
          <option>Select</option>
          <option>Video games</option>
          <option>Motion pictures, series, post-production</option>
          <option>Animation</option>
          <option>Video (YouTube, TikTok etc.)</option>
          <option>Podcasts, audiobooks</option>
          <option>Corporate training, e-learning, education</option>
          <option>Voice-over, localization</option>
          <option>Personal use</option>
          <option>Other</option>
        </SelectStyled>
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
        <TextareaStyled
          onChange={e => inputChangeHandler(e.target.value, 'message', false)}
          minRows={2}
          maxRows={12}
        />
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
          ${p => mediaQuery('down', 'md', p.theme)} {
            margin-top: 2rem;
            width: 100%;
          }
        `}
      >
        Send a message
      </Button>
    </ContactFormContainer>
  );
};
