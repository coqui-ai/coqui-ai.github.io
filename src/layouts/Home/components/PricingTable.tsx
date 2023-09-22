/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { track } from '@amplitude/analytics-browser';
import { Button } from '@zendeskgarden/react-buttons';
import { Body, Header, Modal } from '@zendeskgarden/react-modals';
import { ThemeProvider, mediaQuery } from '@zendeskgarden/react-theming';
import NewsletterForm from 'layouts/Root/components/NewsletterForm';
import { OrangeButton } from 'layouts/Root/components/Styled';
import React, { ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';
import ClientSide from 'utils/ClientSide';
import { TryNowButton } from './Buttons';
import { useSignupLink } from './SignUpLink';

const PlanContainer = ({
  children,
  inverse = false,
  tall = false
}: {
  children: ReactNode[];
  inverse?: boolean;
  tall?: boolean;
}) => {
  return (
    <div
      css={css`
        width: 345px;
        height: ${tall ? '693px' : '643px'};
        min-height: ${tall ? '693px' : '643px'};
        max-height: ${tall ? '693px' : '643px'};
        border-radius: 10px;
        ${inverse && 'border: 1.32px solid #5EAE91;'}
        background: ${inverse ? '#012b30' : '#fff'};
        ${inverse && 'color: #fff;'}
        display: flex;
        flex-direction: column;
        padding: 25px 25px;

        ${p => mediaQuery('down', 'sm', p.theme)} {
          height: '553px';
          min-height: '553px';
          max-height: '553px';
        }
      `}
    >
      <div
        css={css`
          min-height: ${tall ? '177px' : '127px'};
          max-height: ${tall ? '177px' : '127px'};
          display: flex;
          align-items: end;
        `}
      >
        {children[0]}
      </div>
      <div
        css={css`
          margin: 22px 0;
          border: 1.32px solid ${inverse ? 'rgba(255, 255, 255, 0.1)' : '#eaebec'};
        `}
      />
      {children[1]}
      <div css="flex: 1;" />
      {children[2]}
    </div>
  );
};

const PlanHeader = ({
  header,
  subheader,
  inverse = false
}: {
  header: ReactNode;
  subheader: ReactNode;
  inverse?: boolean;
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          font-size: 42px;
          font-weight: 700;
          line-height: 120%;
        `}
      >
        {header}
      </div>
      <div
        css={css`
          font-size: 16px;
          color: ${inverse ? 'rgba(255, 255, 255, 0.3)' : '#a0a0a0'};
        `}
      >
        {subheader}
      </div>
    </div>
  );
};

const CheckMarkIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ minWidth: '13px', maxWidth: '13px', marginRight: '4px' }}
    >
      <path
        d="M7.31997 0.15332C3.68337 0.15332 0.719971 3.11672 0.719971 6.75332C0.719971 10.3899 3.68337 13.3533 7.31997 13.3533C10.9566 13.3533 13.92 10.3899 13.92 6.75332C13.92 3.11672 10.9566 0.15332 7.31997 0.15332ZM10.4748 5.23532L6.73257 8.97752C6.64017 9.06992 6.51477 9.12272 6.38277 9.12272C6.25077 9.12272 6.12537 9.06992 6.03297 8.97752L4.16517 7.10972C3.97377 6.91832 3.97377 6.60152 4.16517 6.41012C4.35657 6.21872 4.67337 6.21872 4.86477 6.41012L6.38277 7.92812L9.77517 4.53572C9.96657 4.34432 10.2834 4.34432 10.4748 4.53572C10.6662 4.72712 10.6662 5.03732 10.4748 5.23532Z"
        fill="#ED8F1C"
      />
    </svg>
  );
};

const FeatureList = ({ children, extraCss = '' }: { children: ReactNode[]; extraCss?: string }) => {
  return (
    <ul
      css={css`
        font-size: 15px;
        line-height: 20px;
        font-weight: 500;

        ${extraCss}
      `}
    >
      {children.map((feature, idx) => (
        <li
          key={idx}
          css={css`
            display: flex;
            align-items: center;

            &:not(:first-of-type) {
              margin-top: 8px;
            }
          `}
        >
          <CheckMarkIcon />
          {feature}
        </li>
      ))}
    </ul>
  );
};

const InvertedOrangeButton = styled(Button)`
  &:hover:enabled {
    background-color: #ed8f1c;
    color: #fff;
    border: none;
  }
  width: 100%;
  font-weight: 700;
  background-color: #fff;
  color: black;
  border-color: #ed8f1c;
  font-size: 18px;
  padding: 24px;
`;

export const Close = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div
      onClick={closeModal}
      css={css`
        position: absolute;
        top: 26px;
        right: 36.31px;
        cursor: pointer;
      `}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.84397 17C13.1582 17 16.6879 13.4 16.6879 9C16.6879 4.6 13.1582 1 8.84397 1C4.52979 1 1 4.6 1 9C1 13.4 4.52979 17 8.84397 17Z"
          stroke="#ED8F1C"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.62402 11.2663L11.0637 6.73828"
          stroke="#ED8F1C"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.0637 11.2663L6.62402 6.73828"
          stroke="#ED8F1C"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const ModalBox = styled(Modal)`
  width: 623px;
  height: fit-content;
  padding: 12px 59px;
`;

const WaitingListModal = ({ closeModal }: { closeModal: () => void }) => {
  const theme = (parentTheme: any) => ({
    ...parentTheme,
    components: {
      'forms.faux_input': css`
        background-color: white !important;
      `,
      'forms.media_input': css`
        color: #000 !important;
        &::placeholder {
          color: #000 !important;
        }
      `
    }
  });

  return (
    <ModalBox onClose={closeModal}>
      <Header
        css={css`
          height: fit-content;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 31px 0 19px 0;
        `}
      >
        Get early access to Coqui Studio Pro
      </Header>
      <Body
        css={`
          display: flex;
          flex-direction: column;
        `}
      >
        <ThemeProvider focusVisibleRef={null} theme={theme as any}>
          <NewsletterForm url="https://coqui.us1.list-manage.com/subscribe/post?u=6faea2f1f19c814566173ffb0&amp;id=f9b303df7f&amp;tags=5204107" />
        </ThemeProvider>
      </Body>

      <Close closeModal={closeModal} />
    </ModalBox>
  );
};

const PriceDisplay = ({ price, credits }: { price: ReactNode; credits: ReactNode }) => {
  return (
    <div
      css={`
        width: 100%;
        margin-top: 16px;
      `}
    >
      <div
        css={`
          width: 100%;
          height: 70px;
          max-height: 70px;
          min-height: 70px;
          display: flex;
          flex-direction: column;
          align-items: start;
        `}
      >
        <div
          css={`
            display: flex;
            justify-content: center;
            align-items: baseline;
            column-gap: 16px;
          `}
        >
          <div
            css={`
              font-size: 42px;
              font-weight: 700;
              line-height: 100%;
            `}
          >
            {price}
          </div>
          <div
            css={`
              font-size: 20px;
              font-weight: 700;
              line-height: 100%;
            `}
          >
            /mo
          </div>
        </div>
        <div
          css={css`
            font-weight: 700;
            font-size: 17px;
            color: rgb(179, 191, 193);
            margin-top: 4px;
          `}
        >
          {credits}
        </div>
      </div>
    </div>
  );
};

const StandardFeatures = ({ additionalCredits }: { additionalCredits: ReactNode }) => (
  <FeatureList>
    {additionalCredits}
    <span>V1: 1 credit per 1s of speech</span>
    <span>XTTS: 2 credits per 1s of speech</span>
    <span>Paraphrase: 1 credit per usage</span>
    <span>Unlimited Voice Cloning</span>
    <span>Generative AI Voices</span>
    <span>Generative AI Emotions</span>
    <span>Unlimited Projects & Scripts</span>
    <span>Directable Voice Pacing</span>
    <span>Directable Voice Intonation</span>
    <span>Directable Voice Intensity</span>
    <span>API Access</span>
    <span>Support for 7 languages</span>
  </FeatureList>
);

const UsablePlanContainer = ({
  name,
  price,
  credits,
  additionalCredits,
  badge = null
}: {
  name: ReactNode;
  price: ReactNode;
  credits: ReactNode;
  additionalCredits: ReactNode;
  badge?: ReactNode;
}) => {
  const signupLink = useSignupLink();

  return (
    <PlanContainer>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          position: relative;
        `}
      >
        <div
          css={`
            border-radius: 6px;
            background: #ed8f1c;
            padding: 2px 8px;
            width: fit-content;
            font-size: 18px;
            font-weight: 500;
            line-height: 130%;
            color: #fff;
          `}
        >
          {name}
        </div>
        {badge && (
          <div
            css={`
              background-color: #5eae91;
              position: absolute;
              top: 2px;
              right: 2px;
              color: #fff;
              border-radius: 4px;
              padding: 2px 4px;
              font-size: 12px;
              width: fit-content;
            `}
          >
            {badge}
          </div>
        )}
        <PriceDisplay price={price} credits={credits} />
      </div>
      <StandardFeatures additionalCredits={additionalCredits} />
      <ClientSide>
        <a href={signupLink}>
          <OrangeButton css="font-size: 18px; width: 100%; padding: 24px;">
            Get Started
          </OrangeButton>
        </a>
      </ClientSide>
    </PlanContainer>
  );
};

export const PricingTable = () => {
  const [showWaitingListModal, setShowWaitingListModal] = useState(false);
  const signupLink = useSignupLink();

  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 107px;
          padding-bottom: 280px;
          background: ${p => p.theme.palette.oatMilk};

          ${p => mediaQuery('down', 'sm', p.theme)} {
            padding-top: 84px;
          }
        `}
      >
        <h1
          css={css`
            font-size: 64px;
            font-weight: 700;
            line-height: 106.12%;

            ${p => mediaQuery('down', 'sm', p.theme)} {
              font-size: 48px;
              line-height: 51px;
            }
          `}
        >
          Get started!
        </h1>
        <p
          css={css`
            color: rgba(1, 43, 48, 0.7);
            font-size: 20px;
            line-height: 140%;
            max-width: 476px;
            margin-top: 10px;
            text-align: center;

            ${p => mediaQuery('down', 'sm', p.theme)} {
              max-width: 280px;
              font-size: 16px;
              line-height: 22.4px;
            }
          `}
        >
          Choose a plan tailored to your needs or get started with 300 free credits.
        </p>
        <TryNowButton css="margin-top: 30px;" />
      </div>
      <div
        css={css`
          background: #fdf4e8;
          display: flex;
          justify-content: center;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            align-items: end;
            margin-top: -238px;
            padding-bottom: 60px;
          `}
        >
          <PlanContainer>
            <PlanHeader
              header={
                <span>
                  $0{' '}
                  <span css="font-size: 16px; font-weight: 500; line-height: 100%;">
                    Free Trial
                  </span>
                </span>
              }
              subheader="with 300 credits"
            />
            <FeatureList>
              <span>V1: 1 credit per 1s of speech</span>
              <span>XTTS: 2 credits per 1s of speech</span>
              <span>Paraphrase: 1 credit per usage</span>
              <span>Unlimited Voice Cloning</span>
              <span>Generative AI Voices</span>
              <span>Generative AI Emotions</span>
              <span>Unlimited Projects & Scripts</span>
              <span>Directable Voice Pacing</span>
              <span>Directable Voice Intonation</span>
              <span>Directable Voice Intensity</span>
              <span>Support for 7 languages</span>
            </FeatureList>
            <ClientSide>
              <a href={signupLink}>
                <InvertedOrangeButton>Try now for free</InvertedOrangeButton>
              </a>
            </ClientSide>
          </PlanContainer>
          <UsablePlanContainer
            name="Hobbyist"
            price="$5"
            credits="3,600 credits per month"
            additionalCredits="Additional credits: $0.00138 / credit"
          />
          <UsablePlanContainer
            name="Starter"
            price="$20"
            credits="14,400 credits per month"
            additionalCredits="Additional credits: $0.00134 / credit"
          />
          <UsablePlanContainer
            name="Intermediate"
            price="$50"
            credits="36,000 credits per month"
            additionalCredits="Additional credits: $0.00126 / credit"
          />
          <UsablePlanContainer
            name="Advanced"
            price="$175"
            credits="180,000 credits per month"
            additionalCredits="Additional credits: $0.00097 / credit"
            badge="Save 30%"
          />
          <PlanContainer>
            <PlanHeader header="Pro" subheader="Everything in Advanced, plus:" />
            <FeatureList>
              <span>Multi-user</span>
              <span>Team Collaboration Tools</span>
              <span>Higher Quality Voice Clones</span>
              <span>Pro-Level Support</span>
            </FeatureList>
            <a
              href="mailto:Coqui <info@coqui.ai>?subject=Coqui Studio Pro&body=Tell us how you want to use Coqui Studio Pro and we'll reach out for a call."
              css="width: 100%;"
            >
              <InvertedOrangeButton css="width: 100%; font-size: 18px; padding: 24px;">
                Contact us
              </InvertedOrangeButton>
            </a>
          </PlanContainer>
          <PlanContainer>
            <PlanHeader header="Enterprise" subheader="Everything in Pro, plus:" />
            <FeatureList extraCss="margin-top: -8px;">
              <span>Single Sign On (SSO)</span>
              <span>Role-Based Access (RBAC)</span>
              <span>Team Management Tools</span>
              <span>Premium Quality Voice Clones</span>
              <span>All Supported Languages</span>
              <span>Script Versioning</span>
              <span>Audit Logs</span>
              <span>Virtual Private Cloud Hosting</span>
              <span>Custom Integrations</span>
            </FeatureList>
            <a
              href="mailto:Coqui <info@coqui.ai>?subject=Coqui Studio Enterprise&body=Tell us how you want to use Coqui Studio Enterprise and we'll reach out for a call."
              css="width: 100%;"
            >
              <InvertedOrangeButton css="width: 100%; font-size: 18px; padding: 24px;">
                Contact us
              </InvertedOrangeButton>
            </a>
          </PlanContainer>
        </div>
      </div>
      {showWaitingListModal && (
        <WaitingListModal
          closeModal={() => {
            setShowWaitingListModal(false);
          }}
        />
      )}
    </>
  );
};
