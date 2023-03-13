import { mediaQuery } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

type PricingCardPriceType = {
  textColor: string;
};

export const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10rem;
  gap: 30px;
  background-color: #03363d;
  ${p => mediaQuery('down', 'md', p.theme)} {
    padding: 2rem;
  }
`;

export const PricingTitle = styled.h2`
  background: linear-gradient(89.27deg, #ed8f1c -1.56%, #468d6a 102.75%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 48px;
  line-height: 67.2px;
  ${p => mediaQuery('down', 'md', p.theme)} {
    text-align: center;
  }
  ${p => mediaQuery('down', 'sm', p.theme)} {
    font-size: 32px;
    line-height: 52.2px;
    text-align: center;
  }
`;

export const PricingSubtitle = styled.p`
  font-size: 16px;
  line-height: 32.4px;
  letter-spacing: 0.02em;
  color: #fff;
  max-width: 50rem;
`;

export const PricingRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-top: 32px;
  z-index: 2;
`;

export const PricingCardTopRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const PricingCardPriceTitle = styled.h3<PricingCardPriceType>`
  font-weight: 700;
  font-size: 32px;
  line-height: 44.8px;
  color: ${({ textColor }) => textColor || '#FFFFFF'};
`;

export const PricingCardPriceSummary = styled.p<PricingCardPriceType>`
  font-size: 16px;
  line-height: 32.4px;
  color: ${({ textColor }) => textColor || '#FFFFFF'};
`;
