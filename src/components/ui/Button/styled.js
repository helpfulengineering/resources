import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 4px 12px;
  margin: 0;
  background: none;
  border: none;
  border: 2px solid #663399;
  border-radius: 2px;
  color: #663399;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.4px;
  line-height: 24px;
  text-transform: uppercase;
  transition: all ease-in-out 0.2s;
  transition-property: color, background-color;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #663399;
  }
`;
