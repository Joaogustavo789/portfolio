import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import CardTypeProject from "../../components/helpers/Cards/CardTypeProject/CardTypeProject";
import { useHistory } from 'react-router-dom';
import { SectionStyled } from "./styles";
import FundamentosLogo from '../../images/work/fundamentos.jpeg';
import FrontendLogo from '../../images/work/frontend.jpg';
import BackendLogo from '../../images/work/backend.jpg';
import ComputerScienceLogo from '../../images/work/computerscience.jpeg';

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
            description='Imagem representando Front-End'
            click={ handleFrontend }
            text='Front-End' 
          />
          <CardTypeProject 
            image={ BackendLogo }
            description='Imagem representando Back-End'
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
