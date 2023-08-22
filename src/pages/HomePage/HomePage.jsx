import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import { ButtonCVStyled, DivHomeStyled, PtextHomeStyled, PButtonStyled } from "./styles";

function HomePage() {
  // const downloadCV = () => {

  // }

  return (
    <DivHomeStyled>
      <Header />
        <PtextHomeStyled>Olá, meu nome é João Gustavo!</PtextHomeStyled>
        <PtextHomeStyled>Sou Desenvolvedor Full-Stack!</PtextHomeStyled>
        <PtextHomeStyled>Formado pela Trybe!</PtextHomeStyled>
        <ButtonCVStyled type='button'><PButtonStyled>Baixar CV</PButtonStyled></ButtonCVStyled>
      <Footer />
    </DivHomeStyled>
  )
}

export default HomePage;
