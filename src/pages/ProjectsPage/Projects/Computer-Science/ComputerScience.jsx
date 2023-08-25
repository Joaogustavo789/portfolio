import Header from "../../../../components/Header/Header";
import Footer from '../../../../components/Footer/Footer';
import CardProject from "../../../../components/helpers/Cards/CardProject/CardProject";

function ComputerScience() {
  return (
    <>
      <Header />
        <div>
          <CardProject
            project='Job Insights' 
            image=''
            description=''
            click=''
            text='Repositório'
          />
          <CardProject
            project='Inventory Reports' 
            image=''
            description=''
            click=''
            text='Repositório'
          />
          <CardProject
            project='Tech News' 
            image=''
            description=''
            click=''
            text='Repositório'
          />
          <CardProject
            project='Algorithms' 
            image=''
            description=''
            click=''
            text='Repositório'
          />
          <CardProject
            project='TING' 
            image=''
            description=''
            click=''
            text='Repositório'
          />
          <CardProject
            project='Restaurant Orders' 
            image=''
            description=''
            click=''
            text='Repositório'
          />
        </div>
      <Footer />
    </>
  )
}

export default ComputerScience;
