import styled from 'styled-components';

export const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 470px;
  max-width: 380px;
`;

export const BlogCardMetaRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const BlogCardTag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 14px;
  line-height: 140%;
  background-color: #ed8f1c;
`;

export const BlogCardReadTime = styled.p`
  color: #68737d;
  font-size: 14px;
  line-height: 26px;
`;

export const BlogCardTitle = styled.p`
  font-size: 22px;
  font-weight: 600px;
  line-height: 180%;
  letter-spacing: 0.02em;
`;

export const BlogCardSummary = styled.p`
  font-size: 18px;
  line-height: 180%;
  letter-spacing: 0.02em;
`;
