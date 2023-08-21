import PropTypes from 'prop-types';
import { PtextFooterStyled } from '../../Footer/styles';

function CardLink(props) {
  const { text, link, image } = props;

  return (
      <section>
        <PtextFooterStyled>{ text }</PtextFooterStyled>
        <a href={ link } target="_blank" rel="noopener noreferrer">{ image }</a>
      </section>
  )
}

CardLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.func,
  image: PropTypes.string
};

export default CardLink;
