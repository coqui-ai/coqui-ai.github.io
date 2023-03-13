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
  ${p => mediaQuery('down', 'sm', p.theme)} {
    padding: 2rem;
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
  align-items: flex-end;
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
