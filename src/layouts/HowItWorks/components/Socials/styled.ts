import { mediaQuery } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

export const SocialsContainer = styled.div`
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

export const SocialsSectionTitle = styled.h2`
  font-size: 48px;
  line-height: 67.2px;
  span {
    background: linear-gradient(89.27deg, #ed8f1c -1.56%, #468d6a 102.75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  text-align: center;
`;

export const SocialsDescription = styled.p`
  color: #68737d;
  font-size: 18px;
  line-height: 32.4px;
  text-align: center;
`;
