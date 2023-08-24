import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import { DivmainStyled, DivHomeStyled, PtextHomeStyled, ButtonCVStyled } from "./styles";

function HomePage() {
  // const downloadCV = () => {

  // }

  return (
    <DivmainStyled>
      <Header />
        <DivHomeStyled>
            <PtextHomeStyled>Olá, meu nome é João Gustavo!</PtextHomeStyled>
            <PtextHomeStyled>Sou Desenvolvedor Full-Stack!</PtextHomeStyled>
            <PtextHomeStyled>Formado pela Trybe!</PtextHomeStyled>
            <ButtonCVStyled type='button'>Baixar CV</ButtonCVStyled>
        </DivHomeStyled>
      <Footer />
    </DivmainStyled>
  )
}

export default HomePage;
