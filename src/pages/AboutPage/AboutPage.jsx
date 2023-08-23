import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ImageAboutStyled, H1AboutStyled, PtextAbout } from './styles';
import JoaoGustavoPhoto from '../../images/joao.jpeg';

function AboutPage() {
  return (
    <main>
      <Header />
        <H1AboutStyled>Sobre mim</H1AboutStyled>
        <ImageAboutStyled src={ JoaoGustavoPhoto } alt="" />
        <PtextAbout>Desenvolvedor Full-Stack formado na <strong>Trybe</strong> (escola de programação online). Durante meu período na Trybe eu aprendi diversas tecnologias voltadas para o desenvolvimento web que podia ir do Front-End até o Back-End. Possuo conhecimento de Front-End como: HTML, CSS, JavaScript, TypeScript, Jest, React, RTL (React Testing Library), Redux. Para Back-End possuo conhecimento em: Docker, MySQL, Sequelize.js, Node.js, Express.js, Mocha, Sinon, Chai, MongoDB, Mongoose. Outros conhecimetos: Git, GitHub, Python, Pytest, Metodologias Ageis (Kanban e Scrum), Styled-Components.</PtextAbout>
      <Footer />
    </main>
  )
}

export default AboutPage;
