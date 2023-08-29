import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import CardProject from '../../../../components/helpers/Cards/CardProject/CardProject';
import { DivmainStyled, SectionStyled } from './styles';
import { projectsFundamentals } from '../../../../mocks/projectsFundamentals';

// onmouseenter
// onmouseleave
function Fundamentos() {
  return (
    <DivmainStyled>
      <Header />
        <SectionStyled>
          {
            projectsFundamentals.map((project) => (
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

export default Fundamentos;
