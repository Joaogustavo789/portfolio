import styled from 'styled-components';

export const ButtonStyled = styled.button `
  background-color: black;
  border-radius: 13px;
  border: 1px solid black;
  color: white;
  font-family: 'Roboto';
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  height: 40px;

  &:hover {
    background-color: red;
    border: 1px solid red;
    color: white;
    cursor: pointer;
    scale: 1.1;
  }
`
