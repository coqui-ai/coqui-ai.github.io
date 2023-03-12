import styled from 'styled-components';

type PricingCardContainerType = {
  bgColor: string;
  primaryColor: string;
  cardBorderColor: string | undefined;
};

type PricingCardPrimaryColorType = {
  primaryColor: string;
};

type PricingCardSummaryTextColorType = {
  summaryTextColor: string | undefined;
};

export const PricingCardContainer = styled.div<PricingCardContainerType>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
  padding: 70px 33px 33px;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  border: ${({ cardBorderColor }) => `3px solid ${cardBorderColor}` || 'none'};
  /* border: 2px solid orange; */
  border-radius: 25px;
  height: 840px;
  width: 340px;
  color: ${({ primaryColor }) => primaryColor || '#000000'};
`;

export const PricingCardSummaryContainer = styled.div<PricingCardPrimaryColorType>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 160px;
  border-bottom: 1px solid ${({ primaryColor }) => primaryColor || '#000000'};
  width: 100%;
  position: relative;
`;

export const PricingCardSummary = styled.p<PricingCardSummaryTextColorType>`
  font-size: 16px;
  line-height: 32.4px;
  color: ${({ summaryTextColor }) => summaryTextColor || '#fff'};
`;

export const PricingCardDivider = styled.div`
  height: 1px;
  border: 1px solid #000;
`;

export const PricingCardButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PricingCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PricingCartFeatureRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  font-size: 16px;
  line-height: 32.4px;
  letter-spacing: 0.02em;
`;

export const PricingCardChip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #468d6a;
  color: #ffffff;
  border-radius: 5px;
  width: 110px;
  padding: 5px 20px;
  position: absolute;
  top: -40px;
`;
