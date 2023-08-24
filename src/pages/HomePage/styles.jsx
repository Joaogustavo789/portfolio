import styled from "styled-components";

const DivmainStyled = styled.div `
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const DivHomeStyled = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 8px;
  gap: 0.7rem;
  /* min-height: 60vh; */
`

const PtextHomeStyled = styled.p `
  color: white;
  font-family: 'Arsenal', serif;
  font-size: 2.5rem;
  text-transform: uppercase;
`
// rgb(49, 46, 129)
const ButtonCVStyled = styled.button `
  background-color: #0ea5e9;
  border-radius: 40px;
  border: 1px solid #0ea5e9;
  color: black;
  height: 50px;
  width: 200px;
  margin-top: 20px;


  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  /* text-shadow:
   -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
     1px 1px 0 black; */

  &:hover {
    background-color: #0284c7;
    border-color: #0284c7;
    cursor: pointer;
    scale: 1.1;
  }
`

export {
  DivmainStyled,
  DivHomeStyled,
  PtextHomeStyled,
  ButtonCVStyled
}
