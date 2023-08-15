import Header from "../../components/Header/Header";
import Card from "../../components/helpers/Cards/Card";
import Footer from '../../components/Footer/Footer';
import GitLogo from '../../images/assets/git.svg';
import GitHubLogo from '../../images/assets/github.svg';
import HTMLLogo from '../../images/assets/html.svg';
import CSSLogo from '../../images/assets/css.svg';
import JavaScriptLogo from '../../images/assets/javascript.svg';
import JestLogo from '../../images/assets/jest.svg';
import ReactLogo from '../../images/assets/react.svg';
import ReduxLogo from '../../images/assets/redux.svg';
import DockerLogo from '../../images/assets/docker.svg';
import MySQLLogo from '../../images/assets/mysql.svg';
import NodejsLogo from '../../images/assets/nodejs.svg';
import ExpressjsLogo from '../../images/assets/expressjs.svg';
import TypeScriptLogo from '../../images/assets/typescript.svg';
import MongoDBLogo from '../../images/assets/mongodb.svg';
import PythonLogo from '../../images/assets/python.svg';
import PytestLogo from '../../images/assets/pytest.svg';
import MochaLogo from '../../images/assets/mocha.svg';

function SkillsPage() {
  return (
    <main>
      <Header />
        <Card
          text='Git'
          image={ GitLogo }
          description='Logo do Git'
        />
        <Card
          text='GitHub'
          image={ GitHubLogo }
          description='Logo do GitHub'
        />
        <Card
          text='HTML'
          image={ HTMLLogo }
          description='Logo do HTML'
        />
        <Card
          text='CSS'
          image={ CSSLogo }
          description='Logo do CSS'
        />
        <Card
          text='JavaScript'
          image={ JavaScriptLogo }
          description='Logo do JavaScript'
        />
        <Card
          text='TypeScript'
          image={ TypeScriptLogo }
          description='Logo do TypeScript'
        />
        <Card
          text='Jest'
          image={ JestLogo }
          description='Logo do Jest'
        />
        <Card
          text='React'
          image={ ReactLogo }
          description='Logo do React'
        />
        {/* <Card
          text='RTL'
          image={ DockerLogo }
          description='Logo do Docker'
        /> */}
        <Card
          text='Redux'
          image={ ReduxLogo }
          description='Logo do Redux'
        />
        <Card
          text='Docker'
          image={ DockerLogo }
          description='Logo do Docker'
        />
        <Card
          text='MySQL'
          image={ MySQLLogo }
          description='Logo do MySQL'
        />
        <Card
          text='Node.js'
          image={ NodejsLogo }
          description='Logo do Node.js'
        />
        <Card
          text='Express.js'
          image={ ExpressjsLogo }
          description='Logo do Express.js'
        />
        <Card
          text='Mocha'
          image={ MochaLogo }
          description='Logo do Mocha'
        />
        {/* <Card
          text='Sinon'
          image={ ExpressjsLogo }
          description='Logo do Express.js'
        /> */}
        {/* <Card
          text='Chai'
          image={ ExpressjsLogo }
          description='Logo do Express.js'
        /> */}
        <Card
          text='MongoDB'
          image={ MongoDBLogo }
          description='Logo do MongoDB'
        />
        {/* <Card
          text='Mongoose'
          image={ DockerLogo }
          description='Logo do Docker'
        /> */}
        <Card
          text='Python'
          image={ PythonLogo }
          description='Logo do Python'
        />
        <Card
          text='Pytest'
          image={ PytestLogo }
          description='Logo do Pytest'
        />
      <Footer />
    </main>
  )
}

export default SkillsPage;
