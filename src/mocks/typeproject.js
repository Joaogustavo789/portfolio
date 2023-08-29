import FundamentosLogo from '../images/work/fundamentos.png';
import FrontendLogo from '../images/work/frontend.png';
import BackendLogo from '../images/work/backend.png';
import ComputerScienceLogo from '../images/work/computerscience.png';

const typeproject = [
  {
    id: 1,
    image: FundamentosLogo, 
    description: 'Imagem representando Fundamentos', 
    click: '/projetos/fundamentos', 
    text: 'Fundamentos'
  },
  {
    id: 2,
    image: FrontendLogo, 
    description: '<a href="https://www.freepik.com/free-vector/frontend-development-concept-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_28158111.htm#query=frontend&position=7&from_view=search&track=sph">Image by vector4stock</a> on Freepik', 
    click: '/projetos/frontend', 
    text: 'Front-End'
  },
  {
    id: 3,
    image: BackendLogo, 
    description: 'Image by <a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_21901980.htm#query=Database&position=1&from_view=search&track=sph">Freepik</a>', 
    click: '/projetos/backend', 
    text: 'Back-End'
  },
  {
    id: 4,
    image: ComputerScienceLogo, 
    description: 'Imagem representando Computer Science', 
    click: '/projetos/computerscience', 
    text: 'Computer Science'
  },
]

export {
  typeproject
}
