import Header from "../../../../components/Header/Header";
import Footer from '../../../../components/Footer/Footer';
import CardProject from "../../../../components/helpers/Cards/CardProject/CardProject";
import { SectionStyled } from "./styles";

function Backend() {
  return (
    <>
      <Header />
        <SectionStyled>
          <CardProject
            project='Docker Todo List' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Docker-Todo-List'
            text='Repositório'
          />
          <CardProject
            project='All For One' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/All-For-One'
            text='Repositório'
          />
          <CardProject
            project='One For All' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/One-For-All'
            text='Repositório'
          />
          <CardProject
            project='Talker Manager' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Talker-Manager'
            text='Repositório'
          />
          {/* <CardProject
            project='Store Manager' 
            image=''
            description=''
            click=''
            text='Repositório'
          /> */}
          {/* <CardProject
            project='Blogs Api' 
            image=''
            description=''
            click=''
            text='Repositório'
          /> */}
          <CardProject
            project='The Warrior Store' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/The-Warrior-Store'
            text='Repositório'
          />
          {/* <CardProject
            project='Trybers and Dragons' 
            image=''
            description=''
            click=''
            text='Repositório'
          /> */}
          <CardProject
            project='Football League' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Football-League'
            text='Repositório'
          />
          <CardProject
            project='Commerce' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Commerce-Mongo'
            text='Repositório'
          />
          <CardProject
            project='Car Shop' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Car-Shop'
            text='Repositório'
          />
          <CardProject
            project='Delivery App' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Delivery-App'
            text='Repositório'
          />
        </SectionStyled>
      <Footer />
    </>
  )
}

export default Backend;
