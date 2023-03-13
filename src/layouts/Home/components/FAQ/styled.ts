import { mediaQuery } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

export const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10rem;
  gap: 30px;
  ${p => mediaQuery('down', 'md', p.theme)} {
    padding: 2rem;
  }
`;

export const FAQSection = styled.p`
  font-family: 'Manrope', sans-serif;
  color: #468d6a;
  font-size: 16px;
`;

export const FAQSectionTitle = styled.h2`
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

export const FAQRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  ${p => mediaQuery('down', 'md', p.theme)} {
    flex-direction: column;
  }
`;

export const FAQColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  [data-garden-container-id='containers.accordion'] {
    align-items: flex-start;
    svg {
      margin-top: 20px;
    }
  }
  [data-garden-id='accordions.step_inner_panel'] {
    font-size: 16px;
    ${p => mediaQuery('down', 'sm', p.theme)} {
      font-size: 14px;
    }
  }
  button {
    line-height: 140%;
    font-size: 32px;
    font-weight: 400;
    ${p => mediaQuery('down', 'lg', p.theme)} {
      font-size: 24px;
    }
  }
  button:hover {
    color: #5293c7;
  }
  [aria-expanded='true'] {
    color: #5293c7;
  }
`;
