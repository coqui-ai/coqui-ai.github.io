import { mediaQuery } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

export const SyntheticVoicesContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  padding: 5rem 10rem;
  background-color: #f9fafc;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    padding: 2rem;
  }
  ${p => mediaQuery('down', 'md', p.theme)} {
    flex-direction: column;
  }
`;

export const SyntheticVoicesDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 40px;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    align-items: center;
  }
`;

export const SyntheticVoicesDetailsTitle = styled.p`
  font-family: 'Manrope', sans-serif;
  color: #468d6a;
  font-size: 16px;
`;

export const SyntheticVoicesDetailsTitleDescription = styled.h2`
  font-size: 48px;
  line-height: 67.2px;
  span {
    background: linear-gradient(89.27deg, #ed8f1c -1.56%, #468d6a 102.75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  ${p => mediaQuery('down', 'sm', p.theme)} {
    text-align: center;
  }
`;

export const SyntheticVoicesDetailsDescription = styled.p`
  font-size: 18px;
  line-height: 32.4px;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    text-align: center;
  }
`;

export const SyntheticVoicesButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  padding-top: 20px;
`;

export const SyntheticVoicesVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
