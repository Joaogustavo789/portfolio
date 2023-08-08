import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ProjectsPage from '../pages/ProjectsPage';
import SkillsPage from '../pages/SkillsPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/sobre-mim" component={ AboutPage }/>
      <Route exact path="/skills" component={ SkillsPage }/>
      <Route exact path="/projetos" component={ ProjectsPage }/>
      <Route exact path="/contato" component={ ContactPage }/>
    </Switch>
  )
}

export default Routes;
