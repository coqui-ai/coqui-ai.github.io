import React, { FC, useState } from 'react';
import { PricingCard } from './PricingCard/PricingCard';
import voiceImg from './voice.png';
import {
  PricingCardPriceSummary,
  PricingCardPriceTitle,
  PricingCardTopRow,
  PricingContainer,
  PricingRow,
  PricingSubtitle,
  PricingTitle
} from './styled';
import styled, { css } from 'styled-components';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Modal, Header } from '@zendeskgarden/react-modals';
import { Body } from '@zendeskgarden/react-tables';
import NewsletterForm from 'layouts/Root/components/NewsletterForm';

const ModalBox = styled(Modal)`
  width: 623px;
  height: fit-content;
  padding: 12px 59px;
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
    <ModalBox
      css={css`
        padding: 24px;
        border-radius: 20px;
      `}
      onClose={closeModal}
    >
      <Header
        css={css`
          height: fit-content;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: 24px;
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

export const Pricing: FC = () => {
  const [showWaitingListModal, setShowWaitingListModal] = useState<boolean>(false);

  const freeTrialJsx: JSX.Element = (
    <PricingCardTopRow>
      <PricingCardPriceTitle textColor="#FFFFFF">$0</PricingCardPriceTitle>
      <PricingCardPriceSummary textColor="#FFFFFF">Free trial</PricingCardPriceSummary>
    </PricingCardTopRow>
  );

  const starterJsx: JSX.Element = (
    <PricingCardTopRow>
      <PricingCardPriceTitle textColor="#000000">20</PricingCardPriceTitle>
      <PricingCardPriceTitle textColor="#000000">/ 4 hours</PricingCardPriceTitle>
    </PricingCardTopRow>
  );

  const proJsx: JSX.Element = (
    <PricingCardTopRow>
      <PricingCardPriceTitle textColor="#FFFFFF">Pro</PricingCardPriceTitle>
    </PricingCardTopRow>
  );

  const enterpriseJsx: JSX.Element = (
    <PricingCardTopRow>
      <PricingCardPriceTitle textColor="#FFFFFF">Enterprise</PricingCardPriceTitle>
    </PricingCardTopRow>
  );

  return (
    <PricingContainer>
      <img
        src={voiceImg}
        alt="voice wave"
        css={css`
          position: absolute;
          top: 25%;
        `}
      />
      <PricingTitle>Pricing that delivers value to match your needs.</PricingTitle>
      <PricingSubtitle>Pick a plan that suits your requirements.</PricingSubtitle>
      <PricingRow>
        <PricingCard
          top={freeTrialJsx}
          buttonPath={`${process.env.GATSBY_BACKEND_URL}/auth/signup`}
          summary="See what Coqui Studio can do"
          buttonType="primary"
          buttonText="Try now for free"
          textColor="#F9F9F9"
          bgColor="#073D3E"
          featureList={[
            'Generate AI Voices (English)',
            'Generative AI Emotions',
            'Unlimited Voice Cloning (English)',
            'Unlimited Projects & Scripts',
            'Directable Generative AI Voice Pacing',
            'Directable Generative AI Voice Intonation',
            'Directable Generative AI  Voice Intensity'
          ]}
        />
        <PricingCard
          top={starterJsx}
          buttonPath={`${process.env.GATSBY_BACKEND_URL}/auth/signup`}
          summary="For personal projects and small businesses"
          buttonType="primary"
          buttonText="Get started"
          textColor="#000000"
          summaryTextColor="#68737D"
          cardBorderColor="#ed8f1c"
          bgColor="#FFFFFF"
          chipText="Starter"
          featureList={[
            'Generate AI Voices (English)',
            'Generative AI Emotions',
            'Unlimited Voice Cloning (English)',
            'Unlimited Projects & Scripts',
            'Directable Generative AI Voice Pacing',
            'Directable Generative AI Voice Intonation',
            'Directable Generative AI  Voice Intensity'
          ]}
          hasToggle
        />
        <PricingCard
          top={proJsx}
          buttonPath=""
          summary="For larger businesses and creative teams"
          buttonType="modal"
          buttonText="Join the waiting list"
          buttonClickHandler={() => {
            setShowWaitingListModal(true);
          }}
          textColor="#F9F9F9"
          bgColor="#073D3E"
          featureList={[
            'Everything from the starter package',
            'Multi-user',
            'Team Collaboration Tools',
            'Higher Quality Voice Clones',
            'Multi-lingual synthesis',
            'Pro-Level Support'
          ]}
        />
        <PricingCard
          top={enterpriseJsx}
          buttonPath="mailto:info@coqui.ai"
          summary="Bespoke solutions built for large organisations"
          buttonType="secondary"
          buttonText="Contact us"
          textColor="#F9F9F9"
          bgColor="#073D3E"
          featureList={[
            'Everything from the Pro package',
            'Single Sign On (SSO)',
            'Role-Based Access (RBAC)',
            'Team Management Tools',
            'Premium Quality Voice Clones',
            'All Supported Languages',
            'Script Versioning',
            'Audit Logs',
            'Virtual Private Cloud Hosting',
            'Custom Integrations',
            'API access'
          ]}
        />
        {showWaitingListModal && (
          <WaitingListModal
            closeModal={() => {
              setShowWaitingListModal(false);
            }}
          />
        )}
      </PricingRow>
    </PricingContainer>
  );
};
