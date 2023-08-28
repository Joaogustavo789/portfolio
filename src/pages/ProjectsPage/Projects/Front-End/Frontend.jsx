import Header from "../../../../components/Header/Header";
import Footer from '../../../../components/Footer/Footer';
import CardProject from "../../../../components/helpers/Cards/CardProject/CardProject";
import { DivmainStyled, SectionStyled } from "./styles";

function Frontend() {
  return (
    <DivmainStyled>
      <Header />
        <SectionStyled>
          <CardProject
            project='Shopping Cart' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Shopping-Cart'
            text='Repositório'
          />
          <CardProject
            project='Solar System' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Solar-System'
            text='Repositório'
          />
          {/* <CardProject
            project='Tryunfo' 
            image=''
            description=''
            click=''
            text='Repositório'
          /> */}
          {/* <CardProject
            project='Trybetunes' 
            image=''
            description=''
            click=''
            text='Repositório'
          /> */}
          <CardProject
            project='Frontend Online Store' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Frontend-Online-Store'
            text='Repositório'
          />
          <CardProject
            project='Testes em React' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Testes-Em-React'
            text='Repositório'
          />
          <CardProject
            project='Gold Wallet' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Gold-Wallet'
            text='Repositório'
          />
          <CardProject
            project='Jogo de Trívia' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Trivia-Game'
            text='Repositório'
          />
          {/* <CardProject
            project='Star Wars' 
            image=''
            description=''
            click=''
            text='Repositório'
          /> */}
          <CardProject
            project='App de Receitas' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Recipes-App'
            text='Repositório'
          />
        </SectionStyled>
      <Footer />
    </DivmainStyled>
  )
}

export default Frontend;
