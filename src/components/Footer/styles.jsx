import styled from 'styled-components';

export const FooterStyled = styled.footer `
  background-color: rgb(23, 37, 84);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const ImageStyled = styled.img `
  height: 70px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`

export const PtextFooterStyled = styled.p `
  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.24rem;
  text-transform: uppercase;
`
