import { mediaQuery } from '@zendeskgarden/react-theming';
import { Link } from 'gatsby';
import styled from 'styled-components';

type FooterContainerProps = {
  hasBanner: boolean;
};

export const FooterContainer = styled.div<FooterContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${({ hasBanner }) => (hasBanner ? '15rem 10rem 10rem 10rem' : '10rem 10rem 5rem 10rem')};
  gap: 30px;
  background-color: #03363d;
`;

export const SaveTimeContainer = styled(FooterContainer)`
  background-color: #1f73b7;
  position: absolute;
  width: 80%;
  left: 0;
  top: 0;
  transform: translate(10rem, -21rem);
`;

export const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  gap: 32px;
  padding-bottom: 64px;
  border-bottom: 1px solid #f9f9f9;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    padding-bottom: 48px;
  }
`;

export const FooterSectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    align-items: center;
  }
`;

export const FooterSectionColumnLeft = styled(FooterSectionColumn)`
  align-items: flex-start;
  gap: 16px;
`;

export const FooterSectionColumnMiddle = styled(FooterSectionColumn)`
  align-items: center;
  gap: 32px;
`;

export const FooterSectionColumnRight = styled(FooterSectionColumn)`
  align-items: flex-end;
`;

export const FooterLinksRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    gap: 30px;
    justify-content: space-between;
  }
`;

export const FooterSocialsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const FooterSocialsImg = styled.img`
  height: 32px;
  width: 32px;
`;

export const FooterStyledLinksItem = styled(Link)`
  color: ${p => p.theme.palette.white};
  font-weight: 400;

  &:hover,
  &:focus {
    color: #ffffff;
  }
`;

export const FooterSignUpTitle = styled.p`
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 1px;
  color: #ffffff;
  font-weight: 600;
`;

export const FooterSignatureRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    align-items: center;
    justify-content: center;
  }
`;

export const FooterSignatureText = styled.p`
  line-height: 28px;
  font-size: 14px;
  color: #ffffff;
`;
