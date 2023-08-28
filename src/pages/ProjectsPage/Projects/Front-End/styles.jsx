import styled from 'styled-components';

const DivmainStyled = styled.div `
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SectionStyled = styled.section `
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-block: 20px;
`

export {
  DivmainStyled,
  SectionStyled
}
