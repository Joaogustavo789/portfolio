import Header from "../../../../components/Header/Header";
import Footer from '../../../../components/Footer/Footer';
import CardProject from "../../../../components/helpers/Cards/CardProject/CardProject";
import { DivmainStyled, SectionStyled } from "./styles";

// onmouseenter
// onmouseleave
function Fundamentos() {
  return (
    <DivmainStyled>
      <Header />
        <SectionStyled>
          <CardProject
            project='Lessons Learned' 
            image=''
            alt=''
            description='OII'
            click='https://github.com/Joaogustavo789/Lessons-Learned'
            text='Repositório'
          />
          <CardProject
            project='Playground Functions' 
            image=''
            alt=''
            description='OII'
            click='https://github.com/Joaogustavo789/Playground-Functions'
            text='Repositório'
          />
          <CardProject
            project='Pixels Art' 
            image=''
            alt=''
            description='OII'
            click='https://github.com/Joaogustavo789/Pixels-Art'
            text='Repositório'
          />
          <CardProject
            project='Meme Generator' 
            image=''
            alt=''
            description='OII'
            click='https://github.com/Joaogustavo789/Meme-Generator'
            text='Repositório'
          />
          <CardProject
            project='Color-Guess' 
            image=''
            alt=''
            description='OII'
            click='https://github.com/Joaogustavo789/Color-Guess'
            text='Repositório'
          />
          <CardProject
            project='Mistery Letter' 
            image=''
            alt=''
            description='OII'
            click='https://github.com/Joaogustavo789/Mistery-Letter'
            text='Repositório'
          />
          <CardProject
            project='Todo List' 
            image=''
            alt=''
            description='OII'
            click='https://github.com/Joaogustavo789/Todo-List'
            text='Repositório'
          />
          <CardProject
            project='Trybewarts' 
            image=''
            alt=''
            description='OII'
            click='https://github.com/Joaogustavo789/Trybewarts'
            text='Repositório'
          />
          {/* <CardProject
            project='JS Tests Unit' 
            image=''
            alt=''
            description='OII'
            click='https://github.com/Joaogustavo789/JS-Unit-Tests'
            text='Repositório'
          /> */}
          <CardProject
            project='Zoo Functions' 
            image=''
            alt=''
            description='OII'
            click='https://github.com/Joaogustavo789/Zoo-Functions'
            text='Repositório'
          />
        </SectionStyled>
      <Footer />
    </DivmainStyled>
  )
}

export default Fundamentos;
