import Button from "../helpers/Button/Button";
import { useHistory } from 'react-router-dom';
import { HeaderStyled } from './styles.jsx';

function Header() {
  const history = useHistory();

  const handleHome = () => {
    history.push('/')
  }

  const handleAbout = () => {
    history.push('/sobre-mim')
  }

  const handleSkills = () => {
    history.push('/habilidades')
  }

  const handleProjects = () => {
    history.push('/projetos')
  }

  return (
    <HeaderStyled>
       <Button
        click={ handleHome }
        text="Inicio" 
      />

      <Button
        click={ handleAbout }
        text="Sobre" 
      />

      <Button
        click={ handleSkills }
        text="Habilidades" 
      />

      <Button
        click={ handleProjects }
        text="Projetos" 
      />
    </HeaderStyled>
  )
}

export default Header;
