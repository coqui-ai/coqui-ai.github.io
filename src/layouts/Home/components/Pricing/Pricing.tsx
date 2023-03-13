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
import { css } from 'styled-components';
import { Toggle, Label, Field } from '@zendeskgarden/react-forms';

export const Pricing: FC = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(false);

  const freeTrialJsx: JSX.Element = (
    <PricingCardTopRow>
      <PricingCardPriceTitle textColor="#FFFFFF">$0</PricingCardPriceTitle>
      <PricingCardPriceSummary textColor="#FFFFFF">Free trial</PricingCardPriceSummary>
    </PricingCardTopRow>
  );

  const starterJsx: JSX.Element = (
    <PricingCardTopRow>
      <PricingCardPriceTitle textColor="#000000">${isMonthly ? '20' : '20'}</PricingCardPriceTitle>
      <PricingCardPriceSummary textColor="#000000">
        {isMonthly ? '/ 4 hours' : '/ 4 hours'}
      </PricingCardPriceSummary>
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
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
        `}
      >
        <PricingSubtitle>Annually save up to 25% </PricingSubtitle>
        <Field>
          <Toggle
            css={css`
              [data-garden-id='forms.toggle_svg'] {
                color: #468d6a !important;
              }
            `}
            onChange={e => setIsMonthly(e.target.checked)}
          >
            <Label
              css={css`
                color: #ffffff;
                font-weight: 400;
                font-size: 16px;
                [data-garden-id='forms.toggle_svg'] {
                  color: #468d6a !important;
                }
                ::before {
                  background-color: #ffffff !important;
                  border: 1px solid #468d6a !important;
                }
              `}
            >
              Monthly
            </Label>
          </Toggle>
        </Field>
      </div>
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
        />
        <PricingCard
          top={proJsx}
          buttonPath="/"
          summary="For larger businesses and creative teams"
          buttonType="secondary"
          buttonText="Join the waiting list"
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
          buttonPath="/"
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
      </PricingRow>
    </PricingContainer>
  );
};
