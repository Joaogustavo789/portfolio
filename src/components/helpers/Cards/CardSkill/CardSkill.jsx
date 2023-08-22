import PropTypes from 'prop-types';
import { DivStyled, ImageSkillStyled, PStyled  } from './styles';

function CardSkill(props) {
  const { text, image, description } = props;

  return (
    <DivStyled>
      <PStyled>{ text }</PStyled>
      <ImageSkillStyled src={ image } alt={ description } />
    </DivStyled>
  )
}

CardSkill.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
};

export default CardSkill;
