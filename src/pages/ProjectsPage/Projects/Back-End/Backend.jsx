import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import CardProject from '../../../../components/helpers/Cards/CardProject/CardProject';
import { DivmainStyled, SectionStyled } from "./styles";
import { projectsBack } from '../../../../mocks/projectsBack';

function Backend() {
  return (
    <DivmainStyled>
      <Header />
        <SectionStyled>
          {
            projectsBack.map((project) => (
              <CardProject
                key={ project.id }
                project={ project }
              />
            ))
          }
        </SectionStyled>
      <Footer />
    </DivmainStyled>
  )
}

export default Backend;
