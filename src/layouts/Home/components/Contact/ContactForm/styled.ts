import { Input, Textarea } from '@zendeskgarden/react-forms';
import styled from 'styled-components';

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
`;

export const InputStyled = styled(Input)`
  border-color: transparent;
  border-bottom: 1px solid #000000;
  padding: 0;
  min-height: 30px;
  background-color: transparent;
  border-radius: 0;
  :hover {
    border-color: transparent;
    border-bottom: 1px solid #000000;
    cursor: pointer;
  }
  :focus {
    border-color: transparent;
    border-bottom: 1px solid #5293c7;
    box-shadow: 0 4px 2px -2px #5293c7;
  }
  :focus-visible {
    border-color: transparent;
    border-bottom: 1px solid #5293c7;
    box-shadow: 0 4px 2px -2px #5293c7;
  }
`;

export const TextareaStyled = styled(Textarea)`
  border-color: transparent;
  border-bottom: 1px solid #000000;
  padding: 0;
  min-height: 30px;
  background-color: transparent;
  border-radius: 0;
  :hover {
    border-color: transparent;
    border-bottom: 1px solid #000000;
    cursor: pointer;
  }
  :focus {
    border-color: transparent;
    border-bottom: 1px solid #5293c7;
    box-shadow: 0 4px 2px -2px #5293c7;
  }
  :focus-visible {
    border-color: transparent;
    border-bottom: 1px solid #5293c7;
    box-shadow: 0 4px 2px -2px #5293c7;
  }
`;
