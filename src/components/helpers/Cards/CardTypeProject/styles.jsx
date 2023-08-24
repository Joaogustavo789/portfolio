import styled from 'styled-components';

const DivStyled = styled.div `
  border-radius: 10px;
  border-bottom: 3px solid rgb(56, 189, 248);
  background-color: rgb(55, 65, 81);
  /* box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.25); */
  width: 10%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`

export {
  DivStyled
}
