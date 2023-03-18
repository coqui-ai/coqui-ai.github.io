import { mediaQuery } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

export const SavingTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10rem 2rem 10rem;
  ${p => mediaQuery('down', 'lg', p.theme)} {
    padding: 2rem;
  }
`;

export const SavingTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 30px;
  background-color: #1f73b7;
  width: 100%;
  padding: 10rem;
  position: relative;
  overflow: hidden;
  ${p => mediaQuery('down', 'lg', p.theme)} {
    padding: 2rem;
  }
`;

export const SavingTimeTitle = styled.h2`
  font-size: 48px;
  line-height: 67.2px;
  color: #ffffff;
  font-weight: 400;
`;

export const SavingTimeDescription = styled.p`
  font-size: 16px;
  line-height: 24.4px;
  color: #ffffff;
  margin-bottom: 16px;
`;
