import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import SkillsPage from '../pages/SkillsPage/SkillsPage';
import Fundamentos from '../pages/ProjectsPage/Projects/Fundamentos';
import Frontend from '../pages/ProjectsPage/Projects/Frontend';
import Backend from '../pages/ProjectsPage/Projects/Backend';
import ComputerScience from '../pages/ProjectsPage/Projects/ComputerScience';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/sobre-mim" component={ AboutPage }/>
      <Route exact path="/habilidades" component={ SkillsPage }/>
      <Route exact path="/projetos" component={ ProjectsPage }/>
      <Route exact path="/projetos/fundamentos" component={ Fundamentos }/>
      <Route exact path="/projetos/frontend" component={ Frontend }/>
      <Route exact path="/projetos/backend" component={ Backend }/>
      <Route exact path="/projetos/computerscience" component={ ComputerScience }/>
    </Switch>
  )
}

export default Routes;
