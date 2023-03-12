import React, { FC } from 'react';
import { PrimaryButton, SecondaryButton } from '../../Buttons';
import {
  PricingCardButtonContainer,
  PricingCardChip,
  PricingCardContainer,
  PricingCardListContainer,
  PricingCardSummary,
  PricingCardSummaryContainer,
  PricingCartFeatureRow
} from './styled';
import CheckCircle from './check_circle.png';
import { css } from 'styled-components';

type PricingCardType = {
  top: JSX.Element;
  summary: string;
  buttonType: 'primary' | 'secondary';
  buttonText: string;
  buttonPath: string;
  bgColor: string;
  textColor: string;
  summaryTextColor?: string;
  cardBorderColor?: string;
  featureList: string[];
  chipText?: string;
};

export const PricingCard: FC<PricingCardType> = ({
  top,
  summary,
  buttonType,
  buttonText,
  textColor,
  bgColor,
  buttonPath,
  cardBorderColor,
  featureList,
  summaryTextColor,
  chipText
}) => {
  const renderButton: () => JSX.Element = () => {
    switch (buttonType) {
      case 'primary':
        return <PrimaryButton text={buttonText} path={buttonPath} fullWidth />;
      default:
        return (
          <SecondaryButton text={buttonText} path={buttonPath} textColor={textColor} fullWidth />
        );
    }
  };

  return (
    <PricingCardContainer
      bgColor={bgColor}
      cardBorderColor={cardBorderColor}
      primaryColor={textColor}
    >
      <PricingCardSummaryContainer primaryColor={textColor}>
        {chipText && <PricingCardChip>{chipText}</PricingCardChip>}
        {top}
        <PricingCardSummary summaryTextColor={summaryTextColor}>{summary}</PricingCardSummary>
      </PricingCardSummaryContainer>
      <PricingCardButtonContainer>{renderButton()}</PricingCardButtonContainer>
      <PricingCardListContainer>
        {featureList.map((f, i) => (
          <PricingCartFeatureRow key={i}>
            <img
              height={20}
              width={20}
              src={CheckCircle}
              alt="check icon"
              css={css`
                transform: translateY(6px);
              `}
            />
            {f}
          </PricingCartFeatureRow>
        ))}
      </PricingCardListContainer>
    </PricingCardContainer>
  );
};
