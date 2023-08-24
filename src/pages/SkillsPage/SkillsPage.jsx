import Header from "../../components/Header/Header";
import CardSkill from "../../components/helpers/Cards/CardSkill/CardSkill";
import Footer from '../../components/Footer/Footer';
import GitLogo from '../../images/svg/git.svg';
import GitHubLogo from '../../images/svg/github.svg';
import HTMLLogo from '../../images/svg/html.svg';
import CSSLogo from '../../images/svg/css.svg';
import JavaScriptLogo from '../../images/svg/javascript.svg';
import JestLogo from '../../images/svg/jest.svg';
import ReactLogo from '../../images/svg/react.svg';
import RTLLogo from '../../images/svg/rtl.svg';
import ReduxLogo from '../../images/svg/redux.svg';
import DockerLogo from '../../images/svg/docker.svg';
import MySQLLogo from '../../images/svg/mysql.svg';
import SequelizeLogo from '../../images/svg/sequelize.svg';
import NodejsLogo from '../../images/svg/nodejs.svg';
import ExpressjsLogo from '../../images/svg/expressjs.svg';
import MochaLogo from '../../images/svg/mocha.svg';
import SinonLogo from '../../images/svg/sinon.png';
import ChaiLogo from '../../images/svg/chai.svg';
import TypeScriptLogo from '../../images/svg/typescript.svg';
import MongoDBLogo from '../../images/svg/mongodb.svg';
import MongooseLogo from '../../images/svg/mongoose.png';
import PythonLogo from '../../images/svg/python.svg';
import PytestLogo from '../../images/svg/pytest.svg';
import { SectionStyled } from "./styles";

function SkillsPage() {
  return (
    <>
      <Header />
        <SectionStyled>
            <CardSkill
              text='Git'
              image={ GitLogo }
              description='Logo do Git'
            />
            <CardSkill
              text='GitHub'
              image={ GitHubLogo }
              description='Logo do GitHub'
            />
            <CardSkill
              text='HTML'
              image={ HTMLLogo }
              description='Logo do HTML'
            />
            <CardSkill
              text='CSS'
              image={ CSSLogo }
              description='Logo do CSS'
            />
            <CardSkill
              text='JavaScript'
              image={ JavaScriptLogo }
              description='Logo do JavaScript'
            />
            <CardSkill
              text='TypeScript'
              image={ TypeScriptLogo }
              description='Logo do TypeScript'
            />
            <CardSkill
              text='Jest'
              image={ JestLogo }
              description='Logo do Jest'
            />
            <CardSkill
              text='React'
              image={ ReactLogo }
              description='Logo do React'
            />
            <CardSkill
              text='RTL'
              image={ RTLLogo }
              description='Logo do Docker'
            />
            <CardSkill
              text='Redux'
              image={ ReduxLogo }
              description='Logo do Redux'
            />
            <CardSkill
              text='Docker'
              image={ DockerLogo }
              description='Logo do Docker'
            />
            <CardSkill
              text='MySQL'
              image={ MySQLLogo }
              description='Logo do MySQL'
            />
            <CardSkill
              text='Sequelize.js'
              image={ SequelizeLogo }
              description='Logo do MySQL'
            />
            <CardSkill
              text='Node.js'
              image={ NodejsLogo }
              description='Logo do Node.js'
            />
            <CardSkill
              text='Express.js'
              image={ ExpressjsLogo }
              description='Logo do Express.js'
            />
            <CardSkill
              text='Mocha'
              image={ MochaLogo }
              description='Logo do Mocha'
            />
            <CardSkill
              text='Sinon'
              image={ SinonLogo }
              description='Logo do Express.js'
            />
            <CardSkill
              text='Chai'
              image={ ChaiLogo }
              description='Logo do Express.js'
            />
            <CardSkill
              text='MongoDB'
              image={ MongoDBLogo }
              description='Logo do MongoDB'
            />
            <CardSkill
              text='Mongoose'
              image={ MongooseLogo }
              description='Logo do Docker'
            />
            <CardSkill
              text='Python'
              image={ PythonLogo }
              description='Logo do Python'
            />
            <CardSkill
              text='Pytest'
              image={ PytestLogo }
              description='Logo do Pytest'
            />
        </SectionStyled>
      <Footer />
    </>
  )
}

export default SkillsPage;
