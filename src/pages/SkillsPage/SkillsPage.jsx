import Header from "../../components/Header/Header";
import CardSkill from "../../components/helpers/Cards/CardSkill/CardSkill";
import Footer from '../../components/Footer/Footer';
import GitLogo from '../../images/Svg/git.svg';
import GitHubLogo from '../../images/Svg/github.svg';
import HTMLLogo from '../../images/Svg/html.svg';
import CSSLogo from '../../images/Svg/css.svg';
import JavaScriptLogo from '../../images/Svg/javascript.svg';
import JestLogo from '../../images/Svg/jest.svg';
import ReactLogo from '../../images/Svg/react.svg';
import RTLLogo from '../../images/Svg/rtl.svg';
import ReduxLogo from '../../images/Svg/redux.svg';
import DockerLogo from '../../images/Svg/docker.svg';
import MySQLLogo from '../../images/Svg/mysql.svg';
import SequelizeLogo from '../../images/Svg/sequelize.svg';
import NodejsLogo from '../../images/Svg/nodejs.svg';
import ExpressjsLogo from '../../images/Svg/expressjs.svg';
import MochaLogo from '../../images/Svg/mocha.svg';
import SinonLogo from '../../images/Svg/sinon.png';
import ChaiLogo from '../../images/Svg/chai.svg';
import TypeScriptLogo from '../../images/Svg/typescript.svg';
import MongoDBLogo from '../../images/Svg/mongodb.svg';
import MongooseLogo from '../../images/Svg/mongoose.png';
import PythonLogo from '../../images/Svg/python.svg';
import PytestLogo from '../../images/Svg/pytest.svg';
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
