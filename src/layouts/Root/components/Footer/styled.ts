import { Link } from 'gatsby';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 10rem;
  gap: 30px;
  background-color: #03363d;
`;

export const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
`;

export const FooterSectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
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
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

export const FooterSocialsRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
