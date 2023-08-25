import styled from 'styled-components';

const DivStyled = styled.div `
  /* border: 1px solid red; */
  border: 3px solid rgb(55, 65, 81);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;

  &:hover {
    border-color: rgb(56, 189, 248);
    scale: 1.1;
  }
`

const PtextProject = styled.div `
  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 1.3rem;
  text-transform: uppercase;
`

const LinkProject = styled.a `
  border: black;
  color: #0284c7;
  font-family: 'Arsenal', sans-serif;
  font-size: 1.1rem;
  /* text-decoration: none; */
`

export {
  DivStyled,
  PtextProject,
  LinkProject
}
