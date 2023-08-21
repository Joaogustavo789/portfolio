import Button from "../helpers/Buttons/Button";
import { useHistory } from 'react-router-dom';
import { ImageHeaderStyled, HeaderStyled } from './styles.jsx';
import PersonalPhoto from '../../images/joao.jpeg'

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
      <ImageHeaderStyled src={ PersonalPhoto } alt="" />

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
