import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import CardTypeProject from "../../components/helpers/Cards/CardTypeProject/CardTypeProject";
import { useHistory } from 'react-router-dom';

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
    <main>
      <Header />
        <CardTypeProject 
          click={ handleFundamentos }
          text='Fundamentos' 
        />
        <CardTypeProject 
          click={ handleFrontend }
          text='Front-End' 
        />
        <CardTypeProject 
          click={ handleBackend }
          text='Back-End' 
        />
        <CardTypeProject 
          click={ handleComputerScience }
          text='Computer Science' 
        />
      <Footer />
    </main>
  )
}

export default  ProjectsPage;
