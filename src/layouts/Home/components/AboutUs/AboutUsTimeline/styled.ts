import { mediaQuery } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

type CardColourType = {
  bgColor: string;
};

export const AboutUsTimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
  ${p => mediaQuery('down', 'md', p.theme)} {
    text-align: center;
  }
`;

export const AboutUsTimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const AboutUsTimelineCard = styled.div<CardColourType>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 50px;
  gap: 20px;
  border-radius: 20px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const AboutUsTimelineYear = styled.p`
  font-size: 14px;
  line-height: 22.4px;
  color: #468d6a;
`;

export const AboutUsTimelineTitle = styled.h3`
  font-size: 32px;
  line-height: 140%;
`;

export const AboutUsTimelineSummary = styled.p`
  line-height: 140%;
  font-size: 14px;
  line-height: 180%;
  letter-spacing: 0.02em;
`;

export const AboutUsTimelineJoiner = styled.div`
  height: 30px;
  width: 4px;
  background-color: #000000;
  position: absolute;
  bottom: -30px;
  left: 50%;
`;
