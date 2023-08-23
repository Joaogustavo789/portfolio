import styled from 'styled-components';

const ImageAboutStyled = styled.img `
  /* border-radius: 50%; */
  border-bottom: 3px solid #38bdf8;
  border-right: 3px solid #38bdf8;
  border-left: 3px solid #0e7490;
  border-top: 3px solid #0e7490;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.25);
  height: 300px;
`

const H1AboutStyled = styled.h1 `
  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 2.45rem;
  text-transform: uppercase;
  padding: 8px;
`

const PtextAbout = styled.p `
  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 1rem;
  /* text-transform: uppercase; */
  padding: 8px;
`

export {
  ImageAboutStyled,
  H1AboutStyled,
  PtextAbout
}
