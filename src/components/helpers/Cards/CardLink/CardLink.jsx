import PropTypes from 'prop-types';
import { DivStyled, PtextFooterStyled, ImageStyled } from './styles';

function CardLink(props) {
  const { contact } = props;

  const { text, link, image, alt } = contact;

  return (
      <DivStyled>
        <a 
          href={ link } 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <ImageStyled src={ image } alt={ alt } />
        </a>
        <PtextFooterStyled>{ text }</PtextFooterStyled>
      </DivStyled>
  )
}

CardLink.propTypes = {
  contact: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string
  })
};

export default CardLink;
