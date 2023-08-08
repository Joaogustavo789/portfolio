import Button from "./assets/Button";
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();

  const handleHome = () => {
    history.push('/')
  }

  const handleAbout = () => {
    history.push('/sobre-mim')
  }

  const handleSkills = () => {
    history.push('/skills')
  }

  const handleProjects = () => {
    history.push('/projetos')
  }

  const handleContact = () => {
    history.push('/contato')
  }

  return (
    <main>
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
        text="Skills" 
      />

      <Button
        click={ handleProjects }
        text="Projetos" 
      />

      <Button
        click={ handleContact }
        text="Contato" 
      />
    </main>
  )
}

export default Header;
