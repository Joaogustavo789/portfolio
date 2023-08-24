import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import { DivmainStyled, DivHomeStyled, PtextHomeStyled, LinkCVStyled } from "./styles";
import DownloadCV from '/Currículo_João_Gustavo_Full-Stack.pdf';

function HomePage() {
  return (
    <DivmainStyled>
      <Header />
        <DivHomeStyled>
            <PtextHomeStyled>Olá, meu nome é João Gustavo!</PtextHomeStyled>
            <PtextHomeStyled>Sou Desenvolvedor Full-Stack!</PtextHomeStyled>
            <PtextHomeStyled>Formado pela Trybe!</PtextHomeStyled>
            <LinkCVStyled 
              href={ DownloadCV } 
              target="_blank" 
              rel="noreferrer">
                Baixar CV
            </LinkCVStyled>
        </DivHomeStyled>
      <Footer />
    </DivmainStyled>
  )
}

export default HomePage;
