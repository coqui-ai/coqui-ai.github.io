import React, { FC } from 'react';
import { css } from 'styled-components';
import { ContactForm } from './ContactForm/ContactForm';
import img from './contact_img.png';
import {
  ContactContainer,
  ContactDetailsContainer,
  ContactDetailsTitle,
  ContactDetailsTitleDescription
} from './styled';

export const Contact: FC = () => {
  return (
    <div
      id="contact"
      css={css`
        display: flex;
        flex-direction: row;
        background-color: #f9fafc;
        justify-content: center;
      `}
    >
      <ContactContainer>
        <ContactDetailsContainer>
          <ContactDetailsTitle>CONTACT OUR TEAM</ContactDetailsTitle>
          <ContactDetailsTitleDescription>
            Got a question?
            <span> Let&apos;s chat</span>!
          </ContactDetailsTitleDescription>
          <img
            src={img}
            alt="contact us"
            height="240"
            width="515"
            css={css`
              border-radius: 20px;
            `}
          />
        </ContactDetailsContainer>
        <ContactForm />
      </ContactContainer>
    </div>
  );
};
