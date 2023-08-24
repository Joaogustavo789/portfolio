import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { DivAboutStyled, ImageAboutStyled, H1AboutStyled, PtextAbout, StrongAbout } from './styles';
import JoaoGustavoPhoto from '../../images/assets/joao_smile.jpg';

function AboutPage() {
  return (
    <>
      <Header />
        <DivAboutStyled>
            <H1AboutStyled>Sobre mim</H1AboutStyled>
            <ImageAboutStyled src={ JoaoGustavoPhoto } alt="" />
            <PtextAbout>Sou um Desenvolvedor Web Full-Stack formado pela <StrongAbout>Trybe</StrongAbout>, uma escola de programação online. Minha jornada na Trybe foi repleta de aprendizados, onde explorei uma ampla gama de tecnologias voltadas para o desenvolvimento web, abrangendo desde o Front-End até o Back-End.</PtextAbout>

            <PtextAbout>Na área de Front-End, domino tecnologias como <StrongAbout>HTML</StrongAbout>, <StrongAbout>CSS</StrongAbout>, <StrongAbout>JavaScript</StrongAbout> e <StrongAbout>TypeScript</StrongAbout>, além de ferramentas essenciais como <StrongAbout>Jest</StrongAbout>, <StrongAbout>React</StrongAbout> e a biblioteca de testes <StrongAbout>RTL</StrongAbout> (React Testing Library), e <StrongAbout>Redux</StrongAbout> para gerenciamento de estado. Minhas habilidades no Back-End abrangem <StrongAbout>Docker</StrongAbout>, <StrongAbout>MySQL</StrongAbout>, <StrongAbout>Sequelize.js</StrongAbout>, <StrongAbout>Node.js</StrongAbout> e <StrongAbout>Express.js</StrongAbout>, juntamente com bancos de dados NoSQL como <StrongAbout>MongoDB</StrongAbout> e <StrongAbout>Mongoose</StrongAbout>. Meu conhecimento também inclui versionamento com <StrongAbout>Git</StrongAbout>, hospedagem de projetos no <StrongAbout>GitHub</StrongAbout> e experiência em <StrongAbout>Python</StrongAbout> e suas estruturas, como <StrongAbout>Pytest</StrongAbout>. Sou adepto das metodologias ágeis, em especial <StrongAbout>Kanban</StrongAbout> e <StrongAbout>Scrum</StrongAbout>, que valorizo por sua capacidade de manter a produtividade e colaboração.</PtextAbout>

            <PtextAbout>Minha abordagem é comunicativa e colaborativa, características que desenvolvi através do trabalho em equipe em projetos individuais e em grupo durante meu ano de estudos na Trybe. Tenho paixão por enfrentar desafios complexos, sempre em busca de oportunidades para aplicar minhas habilidades de maneira criativa e eficaz. Atualmente, estou entusiasmado em explorar minha primeira oportunidade no mercado de tecnologia e ansioso para contribuir com o crescimento e sucesso da empresa que faço parte.</PtextAbout>

            <PtextAbout>Minha visão profissional é direcionada para a criação de soluções abrangentes e eficazes no desenvolvimento web. E minha abordagem pessoal é orientada para aprender de forma contínua, sempre disposto a expandir meu conjunto de habilidades para melhor contribuir com a evolução constante da organização.</PtextAbout>

            <PtextAbout>Será um prazer discutir como minha paixão pelo desenvolvimento e minha mentalidade orientada para o aprendizado podem se alinhar com os objetivos da empresa. Estou ansioso para fazer parte de uma equipe dedicada a superar desafios e alcançar resultados excepcionais.</PtextAbout>
        </DivAboutStyled>
      <Footer />
    </>
  )
}

export default AboutPage;
