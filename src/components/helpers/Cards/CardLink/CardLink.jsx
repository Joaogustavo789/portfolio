import PropTypes from 'prop-types';
import { DivStyled, PtextFooterStyled } from './styles';

function CardLink(props) {
  const { text, link, image } = props;

  return (
      <DivStyled>
        <a href={ link } target="_blank" rel="noopener noreferrer">{ image }</a>
        <PtextFooterStyled>{ text }</PtextFooterStyled>
      </DivStyled>
  )
}

CardLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.func,
  image: PropTypes.string
};

export default CardLink;
