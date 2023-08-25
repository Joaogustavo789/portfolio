import Header from "../../../../components/Header/Header";
import Footer from '../../../../components/Footer/Footer';
import CardProject from "../../../../components/helpers/Cards/CardProject/CardProject";
import { SectionStyled } from "./styles";

function ComputerScience() {
  return (
    <>
      <Header />
        <SectionStyled>
          {/* <CardProject
            project='Job Insights' 
            image=''
            description=''
            click=''
            text='Repositório'
          /> */}
          {/* <CardProject
            project='Inventory Reports' 
            image=''
            description=''
            click=''
            text='Repositório'
          /> */}
          {/* <CardProject
            project='Tech News' 
            image=''
            description=''
            click=''
            text='Repositório'
          /> */}
          <CardProject
            project='Algorithms' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Algorithms'
            text='Repositório'
          />
          <CardProject
            project='TING' 
            image=''
            description=''
            click='https://github.com/Joaogustavo789/Data-Structure'
            text='Repositório'
          />
          {/* <CardProject
            project='Restaurant Orders' 
            image=''
            description=''
            click=''
            text='Repositório'
          /> */}
        </SectionStyled>
      <Footer />
    </>
  )
}

export default ComputerScience;
