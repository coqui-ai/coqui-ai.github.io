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
  padding: ${({ hasBanner }) => (hasBanner ? '15rem 10rem 10rem 10rem' : '2rem 1rem')};
  gap: 30px;
  background-color: #03363d;
  ${p => mediaQuery('up', 'lg', p.theme)} {
    padding: ${({ hasBanner }) =>
      hasBanner ? '15rem 10rem 10rem 10rem' : '10rem 10rem 5rem 10rem'};
  }
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
  padding-bottom: 40px;
  border-bottom: 1px solid #f9f9f9;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    padding-bottom: 48px;
  }
  ${p => mediaQuery('down', 'md', p.theme)} {
    flex-direction: column;
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
  align-items: center;
  gap: 16px;
`;

export const FooterSectionColumnMiddle = styled(FooterSectionColumn)`
  align-items: center;
  gap: 40px;
`;

export const FooterSectionColumnRight = styled(FooterSectionColumn)`
  align-items: center;
  ${p => mediaQuery('up', 'lg', p.theme)} {
    align-items: flex-end;
  }
  ${p => mediaQuery('up', 'xl', p.theme)} {
    align-items: flex-end;
  }
`;

export const FooterLinksRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
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
  span {
    cursor: pointer;
  }
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
  ${p => mediaQuery('up', 'lg', p.theme)} {
    align-self: flex-end;
  }
  ${p => mediaQuery('up', 'xl', p.theme)} {
    align-self: center;
  }
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
  a {
    color: #ffffff;
    &:hover {
      color: #ffffff;
    }
  }
`;
