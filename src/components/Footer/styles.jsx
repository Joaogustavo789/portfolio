import styled from 'styled-components';

const FooterStyled = styled.footer `
  background-color: rgb(23, 37, 84);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const H1Styled = styled.h1 `
  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 3rem;
  letter-spacing: 0.24rem;
  text-transform: uppercase;
  padding: 8px;
`

const DivSocialStyled = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`

const ImageStyled = styled.img `
  height: 70px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`

const PtextFooterStyled = styled.p `
  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.24rem;
  text-transform: uppercase;
`

export {
  FooterStyled,
  H1Styled,
  DivSocialStyled,
  ImageStyled,
  PtextFooterStyled
}
