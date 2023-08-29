import Button from "../helpers/Buttons/Button";
import { ImageHeaderStyled, HeaderStyled } from './styles.jsx';
import PersonalPhoto from '../../images/assets/joao.jpeg';
import { routers } from "../../mocks/routers";

function Header() {
  return (
    <HeaderStyled>
      <ImageHeaderStyled src={ PersonalPhoto } alt="" />
      {
        routers.map((route) => (
          <Button
            key={ route.id }
            route={ route }
         />
        ))
      }
    </HeaderStyled>
  )
}

export default Header;
