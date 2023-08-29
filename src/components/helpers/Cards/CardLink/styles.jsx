import styled from 'styled-components';

const DivStyled = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PStyled = styled.p `
  font-family: 'Roboto';
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
`

const PtextFooterStyled = styled.p `
  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.14rem;
  text-transform: uppercase;
`

const ImageStyled = styled.img `
  height: 50px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`

export {
  DivStyled,
  PStyled,
  PtextFooterStyled,
  ImageStyled
}
