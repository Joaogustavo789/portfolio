import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import CardTypeProject from "../../components/helpers/Cards/CardTypeProject/CardTypeProject";
import { DivmainStyled, SectionStyled } from "./styles";
import { typeproject } from "../../mocks/typeproject";

function ProjectsPage() {
  return (
    <DivmainStyled>
      <Header />
        <SectionStyled>
          {
            typeproject.map((typepro) => (
              <CardTypeProject
                key={ typepro.id }
                typepro={ typepro }
              />
            ))
          }
        </SectionStyled>
      <Footer />
    </DivmainStyled>
  )
}

export default  ProjectsPage;
