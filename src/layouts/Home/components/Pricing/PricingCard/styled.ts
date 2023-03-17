import { mediaQuery } from '@zendeskgarden/react-theming';
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
  position: relative;
  justify-content: flex-start;
  gap: 24px;
  padding: 33px 33px 33px;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  border: ${({ cardBorderColor }) => `3px solid ${cardBorderColor}` || 'none'};
  /* border: 2px solid orange; */
  border-radius: 25px;
  height: 840px;
  width: 340px;
  color: ${({ primaryColor }) => primaryColor || '#000000'};
  ${p => mediaQuery('down', 'sm', p.theme)} {
    height: auto;
    padding: 2rem;
  }
`;

export const PricingCardSummaryContainer = styled.div<PricingCardPrimaryColorType>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid ${({ primaryColor }) => primaryColor || '#000000'};
  width: 100%;
  height: 200px;
  align-items: ${({ primaryColor }) => (primaryColor === '#000000' ? 'center' : 'flex-start')};
  ${p => mediaQuery('down', 'sm', p.theme)} {
    height: auto;
    padding-bottom: 1rem;
  }
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
  ${p => mediaQuery('down', 'sm', p.theme)} {
    font-size: 12px;
  }
`;

export const PricingCardChip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e35b66;
  color: #ffffff;
  width: 100%;
  padding: 5px 20px;
  position: absolute;
  top: 0;
  left: 0;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  text-transform: uppercase;
`;
