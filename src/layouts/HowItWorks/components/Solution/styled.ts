import { mediaQuery } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

type SolutionContainerProps = {
  index: number;
};

export const SolutionContainer = styled.div<SolutionContainerProps>`
  display: flex;
  flex-direction: ${({ index }) => (index % 2 === 0 ? 'row' : 'row-reverse')};
  justify-content: space-between;
  flex-wrap: ${({ index }) => (index % 2 === 0 ? 'wrap' : 'wrap-reverse')};
  background-color: ${({ index }) => (index % 2 === 0 ? '#FFFFFF' : '#F9FAFC')};
  align-items: center;
  position: relative;
  padding: 5rem 10rem;
  gap: 30px;
  ${p => mediaQuery('down', 'md', p.theme)} {
    padding: 2rem;
    flex-direction: column-reverse;
  }
`;

export const SolutionSegmentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  gap: 24px;
  [data-garden-container-id='containers.accordion'] {
    align-items: flex-start;
    svg {
      margin-top: 20px;
    }
  }
  [data-garden-id='accordions.step_inner_panel'] {
    color: #68737d;
    font-size: 16px;
    ${p => mediaQuery('down', 'sm', p.theme)} {
      font-size: 14px;
    }
    span {
      color: #2f3941;
      font-weight: 600;
      cursor: pointer;
    }
  }
  button {
    color: #68737d;
    line-height: 180%;
    font-size: 22px;
    font-weight: 400;
    ${p => mediaQuery('down', 'sm', p.theme)} {
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

export const SolutionSegmentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  align-items: center;
`;

export const SolutionSection = styled.p`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
`;

export const SolutionSectionTitle = styled.h2`
  font-size: 48px;
  line-height: 67.2px;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    text-align: center;
  }
`;

export const SolutionsCaptionContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #fff7ed;
  max-width: 75%;
  ${p => mediaQuery('down', 'lg', p.theme)} {
    max-width: 100%;
  }
`;

export const SolutionsCaptionText = styled.p`
  font-size: 16px;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    font-size: 14px;
  }
`;
