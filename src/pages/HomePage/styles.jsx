import styled from "styled-components";

const DivHomeStyled = styled.div `
  /* display: flex;
  justify-content: center;
  align-items: center; */
`

const PtextHomeStyled = styled.p `
  color: white;
  font-family: 'Artifika', serif;
  font-size: 2.5rem;
  text-transform: uppercase;
  padding: 8px;
`

const ButtonCVStyled = styled.button `
  background-color: rgb(49, 46, 129);
  border: 1px solid black;
  color: black;
  height: 50px;
  width: 100px;

  &:hover {
    border-radius: 40px;
    border-color: black;
    color: white;
    cursor: pointer;
    scale: 1.1;
  }
`

const PButtonStyled = styled.p `
  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow:
   -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
     1px 1px 0 black;
`

export {
  DivHomeStyled,
  PtextHomeStyled,
  ButtonCVStyled,
  PButtonStyled
}
