import { Route, Routes as RouterRoutes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
import SkillsPage from '../pages/SkillsPage/SkillsPage';
import Fundamentos from '../pages/ProjectsPage/Projects/Fundamentos/Fundamentos';
import Frontend from '../pages/ProjectsPage/Projects/Front-End/Frontend';
import Backend from '../pages/ProjectsPage/Projects/Back-End/Backend';
import ComputerScience from '../pages/ProjectsPage/Projects/Computer-Science/ComputerScience';

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-mim" element={<AboutPage />} />
      <Route path="/habilidades" element={<SkillsPage />} />
      <Route path="/projetos" element={<ProjectsPage />} />
      <Route path="/projetos/fundamentos" element={<Fundamentos />} />
      <Route path="/projetos/frontend" element={<Frontend />} />
      <Route path="/projetos/backend" element={<Backend />} />
      <Route path="/projetos/computerscience" element={<ComputerScience />} />
    </RouterRoutes>
  );
}

export default Routes;
