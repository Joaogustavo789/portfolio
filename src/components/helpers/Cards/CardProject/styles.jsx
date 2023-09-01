import styled from 'styled-components';

const DivStyled = styled.div `
  border: 3px solid rgb(55, 65, 81);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 180px;
  width: 220px;

  &:hover {
    border: 2px solid rgb(56, 189, 248);
  }
`

const ImageProject = styled.img `
  height: 100px;
`

const PtextProject = styled.div `
  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;
`

const DivHover = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  padding: 10px;
`

const PtextDescription = styled.p `
  color: white;
  font-family: 'Arsenal';
  font-size: 0.9rem;
  text-align: center;
`

const LinkProject = styled.a `
  background-color: #0284c7;
  border: 1px solid #0284c7;
  border-radius: 3px;
  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 0 2px;

  &:hover {
    background-color: #0369a1;
    border: 1px solid #0369a1;
  }
`

export {
  DivStyled,
  ImageProject,
  PtextProject,
  DivHover,
  PtextDescription,
  LinkProject
}
