import React, { FC, useState } from 'react';
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
import { PricingCardPriceSummary, PricingCardPriceTitle, PricingCardTopRow } from '../styled';

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
  hasToggle?: boolean;
};

type PriceTab = 'standard' | 'discount';

const PriceSelector = ({
  selectedTab,
  setSelectedTab
}: {
  selectedTab: PriceTab;
  setSelectedTab: (v: PriceTab) => void;
}) => {
  return (
    <div
      css={`
        width: 100%;
        margin-top: 16px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          gap: 16px;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        `}
      >
        <PricingCardPriceTitle textColor="#000000">
          ${selectedTab === 'standard' ? '20' : '175'}
        </PricingCardPriceTitle>
        <PricingCardPriceSummary textColor="#000000">
          {selectedTab === 'standard' ? '/ 4 hours' : '/ 50 hours'}
        </PricingCardPriceSummary>
        {selectedTab !== 'standard' && (
          <div
            css={`
              background-color: #186146;
              color: #fff;
              border-radius: 4px;
              padding: 2px 4px;
              font-size: 12px;
            `}
          >
            Save 30%
          </div>
        )}
      </div>
      <div
        css={`
          border-radius: 23px;
          background-color: #e9ebed;
          display: flex;
          width: 100%;
          height: 26px;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
        `}
      >
        <div
          onClick={() => setSelectedTab('standard')}
          css={`
            flex-grow: 1;
            padding: 8px 8px;
            border-radius: 23px;
            cursor: pointer;
            font-size: 12px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;

            ${selectedTab === 'standard' &&
            `
              font-size: 14px;
              background-color: #186146;
              color: #FFFFFF;
            `}
          `}
        >
          Standard
        </div>
        <div
          onClick={() => setSelectedTab('discount')}
          css={`
            flex-grow: 1;
            padding: 8px 8px;
            border-radius: 23px;
            cursor: pointer;
            font-size: 12px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;

            ${selectedTab === 'discount' &&
            `
              font-size: 14px;
              background-color: #186146;
              color: #FFFFFF;
            `}
          `}
        >
          Discount
        </div>
      </div>
    </div>
  );
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
  chipText,
  hasToggle
}) => {
  const [selectedTab, setSelectedTab] = useState<PriceTab>('standard');
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
      {chipText && <PricingCardChip>{chipText}</PricingCardChip>}
      <PricingCardSummaryContainer primaryColor={textColor}>
        {!hasToggle && top}
        {hasToggle && <PriceSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />}
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
