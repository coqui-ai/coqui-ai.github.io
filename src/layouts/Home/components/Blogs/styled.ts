import { mediaQuery } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

export const BlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 10rem 10rem 15rem 10rem;
  gap: 30px;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    padding: 2rem;
    align-items: center;
  }
`;

export const BlogsTitle = styled.p`
  font-family: 'Manrope', sans-serif;
  color: #468d6a;
  font-size: 16px;
`;

export const BlogsTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${p => mediaQuery('down', 'sm', p.theme)} {
    gap: 32px;
  }
`;

export const BlogsTitleDescription = styled.h2`
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

export const BlogItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-between;
  ${p => mediaQuery('down', 'md', p.theme)} {
    gap: 5rem;
    justify-content: center;
  }
`;

export const BlogButtonContainer = styled.div`
  flex-direction: column;
  ${p => mediaQuery('up', 'md', p.theme)} {
    display: flex;
  }
  ${p => mediaQuery('down', 'md', p.theme)} {
    display: none;
  }
`;

export const BlogButtonContainerMobile = styled.div`
  flex-direction: column;
  width: 100%;
  margin-top: 32px;
  ${p => mediaQuery('up', 'md', p.theme)} {
    display: none;
  }
  ${p => mediaQuery('down', 'md', p.theme)} {
    display: flex;
  }
`;
