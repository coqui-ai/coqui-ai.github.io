import { mediaQuery } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

export const AIVoiceCardContainer = styled.div`
  flex-direction: row;
  align-items: center;
  gap: 35px;
  border-radius: 20px;
  width: 510px;
  height: 215px;
  padding: 33px 25px;
  background-color: #e9ebed;
  ${p => mediaQuery('up', 'sm', p.theme)} {
    display: flex;
  }
  ${p => mediaQuery('down', 'sm', p.theme)} {
    display: none;
  }
`;

export const AIVoiceCardContainerMobile = styled.div`
  flex-direction: column;
  align-items: center;
  gap: 35px;
  border-radius: 20px;
  padding: 33px 25px;
  background-color: #e9ebed;
  ${p => mediaQuery('up', 'sm', p.theme)} {
    display: none;
  }
  ${p => mediaQuery('down', 'sm', p.theme)} {
    display: flex;
    width: 250px;
    gap: 24px;
  }
`;

export const AvatarImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const AvatarMetaDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AvatarName = styled.p`
  font-size: 22px;
  font-weight: 600;
`;

export const AvatarTag = styled.div`
  background-color: #adcce4;
  border-radius: 5px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #ffffff;
  width: fit-content;
`;

export const AvatarCharacteristics = styled.p`
  font-size: 16px;
  color: #68737d;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    text-align: center;
  }
`;
