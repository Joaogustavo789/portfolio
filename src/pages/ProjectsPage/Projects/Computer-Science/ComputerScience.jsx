import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import CardProject from '../../../../components/helpers/Cards/CardProject/CardProject';
import { DivmainStyled, SectionStyled } from './styles';
import { projectsCS } from '../../../../mocks/projectsCS';

function ComputerScience() {
  return (
    <DivmainStyled>
      <Header />
        <SectionStyled>
          {
            projectsCS.map((project) => (
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

export default ComputerScience;
