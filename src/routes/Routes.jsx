import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import SkillsPage from '../pages/SkillsPage/SkillsPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/sobre-mim" component={ AboutPage }/>
      <Route exact path="/skills" component={ SkillsPage }/>
      <Route exact path="/projetos" component={ ProjectsPage }/>
    </Switch>
  )
}

export default Routes;
