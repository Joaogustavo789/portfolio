import styled from 'styled-components';

const ButtonStyled = styled.button `
  background-color: transparent;
  border: none;
  border: 4px solid rgb(23, 37, 84);
  padding: 5px 12px;

  &:hover {
    border-color: white;
    border-radius: 60px;
    color: white;
    cursor: pointer;
    scale: 1.1;
  }
`

const PtextStyled = styled.p `
  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.24rem;
  text-transform: uppercase;
  text-shadow:
   -2px -2px 0 rgb(2, 44, 34),
    2px -2px 0 rgb(2, 44, 34),
    -2px 2px 0 rgb(2, 44, 34),
     2px 2px 0 rgb(2, 44, 34);
`

export {
  ButtonStyled,
  PtextStyled
}
