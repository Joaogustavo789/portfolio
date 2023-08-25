import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import CardTypeProject from "../../components/helpers/Cards/CardTypeProject/CardTypeProject";
import { useHistory } from 'react-router-dom';
import { SectionStyled } from "./styles";
import FundamentosLogo from '../../images/work/fundamentos.png';
import FrontendLogo from '../../images/work/frontend.png';
import BackendLogo from '../../images/work/backend.png';
import ComputerScienceLogo from '../../images/work/computerscience.png';

function ProjectsPage() {
  const history = useHistory();

  const handleFundamentos = () => {
    history.push('/projetos/fundamentos')
  }

  const handleFrontend = () => {
    history.push('/projetos/frontend')
  }

  const handleBackend = () => {
    history.push('/projetos/backend')
  }

  const handleComputerScience = () => {
    history.push('/projetos/computerscience')
  }

  return (
    <>
      <Header />
        <SectionStyled>
          <CardTypeProject 
            image={ FundamentosLogo }
            description='Imagem representando Fundamentos'
            click={ handleFundamentos }
            text='Fundamentos' 
          />
          <CardTypeProject 
            image={ FrontendLogo }
            description='<a href="https://www.freepik.com/free-vector/frontend-development-concept-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_28158111.htm#query=frontend&position=7&from_view=search&track=sph">Image by vector4stock</a> on Freepik'
            click={ handleFrontend }
            text='Front-End' 
          />
          <CardTypeProject 
            image={ BackendLogo }
            description='Image by <a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_21901980.htm#query=Database&position=1&from_view=search&track=sph">Freepik</a>'
            click={ handleBackend }
            text='Back-End' 
          />
          <CardTypeProject 
            image={ ComputerScienceLogo }
            description='Imagem representando Computer Science'
            click={ handleComputerScience }
            text='Computer Science' 
          />
        </SectionStyled>
      <Footer />
    </>
  )
}

export default  ProjectsPage;
