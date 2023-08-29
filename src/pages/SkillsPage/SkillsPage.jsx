import Header from "../../components/Header/Header";
import CardSkill from "../../components/helpers/Cards/CardSkill/CardSkill";
import Footer from '../../components/Footer/Footer';
import { SectionStyled } from "./styles";
import { skills } from "../../mocks/skills";

function SkillsPage() {
  return (
    <>
      <Header />
        <SectionStyled>
          {
            skills.map((skill) => (
              <CardSkill
                key={ skill.id }
                skill={ skill }
              />
            ))
          }
        </SectionStyled>
      <Footer />
    </>
  )
}

export default SkillsPage;
