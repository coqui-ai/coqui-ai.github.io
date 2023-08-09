/* eslint-disable @typescript-eslint/indent */
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
import { Button } from '@zendeskgarden/react-buttons';
import { getColor } from '@zendeskgarden/react-theming';

type PricingCardType = {
  top: JSX.Element;
  summary: string;
  buttonType: 'primary' | 'secondary' | 'modal';
  buttonText: string;
  buttonPath?: string;
  bgColor: string;
  textColor: string;
  summaryTextColor?: string;
  cardBorderColor?: string;
  featureList: string[];
  chipText?: string;
  hasToggle?: boolean;
  buttonClickHandler?: () => void;
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
          gap: 8px;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        `}
      >
        <PricingCardPriceTitle textColor="#000000">
          ${selectedTab === 'standard' ? '20' : '175'}
        </PricingCardPriceTitle>
        <PricingCardPriceTitle textColor="#000000">
          {selectedTab === 'standard' ? '/ 4 hours' : '/ 50 hours'}
        </PricingCardPriceTitle>
        {selectedTab !== 'standard' && (
          <div
            css={`
              background-color: #186146;
              color: #fff;
              border-radius: 4px;
              padding: 2px 4px;
              margin-left: 8px;
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
  hasToggle,
  buttonClickHandler
}) => {
  const [selectedTab, setSelectedTab] = useState<PriceTab>('standard');
  const renderButton: () => JSX.Element = () => {
    switch (buttonType) {
      case 'primary':
        return <PrimaryButton text={buttonText} path={buttonPath || '/'} fullWidth />;
      case 'modal':
        return (
          <Button
            onClick={e => {
              if (!buttonClickHandler) {
                e.preventDefault();
                return;
              }
              buttonClickHandler();
            }}
            css={css`
              border: 2px solid ${p => getColor('yellow', 600, p.theme)};
              background-color: transparent;
              color: #fff;
              border-radius: 30px;
              font-weight: 400;
              padding: 18px 24px;
            `}
          >
            {buttonText}
          </Button>
        );
      default:
        return (
          <SecondaryButton
            text={buttonText}
            path={buttonPath || ''}
            textColor={textColor}
            fullWidth
          />
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
            {f?.toLowerCase().includes('everything from the starter package') ||
            f?.toLowerCase().includes('everything from the pro package') ? (
              <span>{f}</span>
            ) : (
              f
            )}
          </PricingCartFeatureRow>
        ))}
      </PricingCardListContainer>
    </PricingCardContainer>
  );
};
