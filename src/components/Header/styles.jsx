import styled from 'styled-components';

const ImageHeaderStyled = styled.img `
  border-radius: 50%;
  border-bottom: 3px solid rgb(56, 189, 248);
  border-right: 3px solid rgb(56, 189, 248);
  border-left: 3px solid rgb(14, 116, 144);
  border-top: 3px solid rgb(14, 116, 144);
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.25);
  height: 100px;
`

const HeaderStyled = styled.header `
  background-color: rgb(23, 37, 84);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 8px;
`

export {
  ImageHeaderStyled,
  HeaderStyled
}
