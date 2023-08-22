import styled from 'styled-components';

const MainStyled = styled.main `
  border: 2px solid blue;
`

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

const ImageSkillStyled = styled.img `
  height: 100px;
  margin-bottom: 10px;
`

export {
  MainStyled,
  DivStyled,
  PStyled,
  ImageSkillStyled
}
