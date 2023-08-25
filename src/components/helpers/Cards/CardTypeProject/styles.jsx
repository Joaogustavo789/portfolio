import styled from 'styled-components';

const ImageTypeProject = styled.img `
  height: 100px;
`

const DivStyled = styled.div `
  background-color: rgb(55, 65, 81);
  border: 1px solid rgb(31, 41, 55);
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

const ButtonTypeProject = styled.button `
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  font-family: 'Arsenal', sans-serif;
  font-size: 1.3rem;
  letter-spacing: 0.10rem;
  text-transform: uppercase;
`

export {
  ImageTypeProject,
  DivStyled,
  ButtonTypeProject
}
