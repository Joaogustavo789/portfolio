import { FooterStyled, H1Styled, DivSocialStyled } from './styles.jsx';
import CardLink from '../helpers/Cards/CardLink/CardLink.jsx';
import { contacts } from '../../mocks/contacts.js';

function Footer() {
  return (
    <FooterStyled>
      <H1Styled>Contatos</H1Styled>
      <DivSocialStyled>
        {
          contacts.map((contact) => (
            <CardLink
              key={ contact }
              contact={ contact }
            />
          ))
        }
      </DivSocialStyled>
    </FooterStyled>
  )
}

export default Footer;
