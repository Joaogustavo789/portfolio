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
  font-size: 1.5rem;
  letter-spacing: 0.10rem;
  text-transform: uppercase;
  padding: 8px;
`

const DivSocialStyled = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  padding: 8px;
`

export {
  FooterStyled,
  H1Styled,
  DivSocialStyled,
}
