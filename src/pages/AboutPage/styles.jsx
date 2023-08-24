import styled from 'styled-components';

const DivAboutStyled = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 20px 80px;
`

const ImageAboutStyled = styled.img `
  border-bottom: 3px solid rgb(56, 189, 248);
  border-right: 3px solid rgb(56, 189, 248);
  border-left: 3px solid rgb(14, 116, 144);
  border-top: 3px solid rgb(14, 116, 144);
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.25);
  height: 300px;
`

const H1AboutStyled = styled.h1 `
  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 2.45rem;
  text-transform: uppercase;
`

const PtextAbout = styled.p `
  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 1.1rem;
  text-transform: uppercase;
  text-align: justify;
`

const StrongAbout = styled.strong `
  color: rgb(6, 182, 212);
  font-family: 'Italic';
  text-decoration: underline;
`

export {
  DivAboutStyled,
  ImageAboutStyled,
  H1AboutStyled,
  PtextAbout,
  StrongAbout
}
