import PropTypes from 'prop-types';
import { PStyled, ImageSkillStyled, MainStyled } from './styles';

function Card(props) {
  const { text, image, description } = props;

  return (
    <MainStyled>
      <PStyled>{ text }</PStyled>
      <ImageSkillStyled src={ image } alt={ description } />
    </MainStyled>
  )
}

Card.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
};

export default Card;
