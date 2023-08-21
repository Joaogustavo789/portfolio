import styled from 'styled-components';

export const ButtonStyled = styled.button `
  background-color: transparent;
  border: none;
  border: 4px solid rgb(23, 37, 84);


  &:hover {
    border-color: white;
    border-radius: 60px;
    color: white;
    cursor: pointer;
    scale: 1.1;
  }
`

// rgb(2, 44, 34);
export const PtextStyled = styled.p `
  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.24rem;
  text-transform: uppercase;
  text-shadow:
   -2px -2px 0 rgb(2, 44, 34),
    2px -2px 0 rgb(2, 44, 34),
    -2px 2px 0 rgb(2, 44, 34),
     2px 2px 0 rgb(2, 44, 34);
`
