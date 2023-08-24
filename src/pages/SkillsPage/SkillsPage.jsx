import Header from "../../components/Header/Header";
import CardSkill from "../../components/helpers/Cards/CardSkill/CardSkill";
import Footer from '../../components/Footer/Footer';
import GitLogo from '../../images/assets/git.svg';
import GitHubLogo from '../../images/assets/github.svg';
import HTMLLogo from '../../images/assets/html.svg';
import CSSLogo from '../../images/assets/css.svg';
import JavaScriptLogo from '../../images/assets/javascript.svg';
import JestLogo from '../../images/assets/jest.svg';
import ReactLogo from '../../images/assets/react.svg';
import RTLLogo from '../../images/assets/rtl.svg';
import ReduxLogo from '../../images/assets/redux.svg';
import DockerLogo from '../../images/assets/docker.svg';
import MySQLLogo from '../../images/assets/mysql.svg';
import NodejsLogo from '../../images/assets/nodejs.svg';
import ExpressjsLogo from '../../images/assets/expressjs.svg';
import MochaLogo from '../../images/assets/mocha.svg';
import SinonLogo from '../../images/assets/sinon.png';
import ChaiLogo from '../../images/assets/chai.svg';
import TypeScriptLogo from '../../images/assets/typescript.svg';
import MongoDBLogo from '../../images/assets/mongodb.svg';
import MongooseLogo from '../../images/assets/mongoose.png';
import PythonLogo from '../../images/assets/python.svg';
import PytestLogo from '../../images/assets/pytest.svg';
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
