import PropTypes from 'prop-types';
import { DivStyled, ImageSkillStyled, PStyled  } from './styles';

function CardSkill(props) {
  const { skill } = props;

  const { text, image, description } = skill;

  return (
    <DivStyled>
      <PStyled>{ text }</PStyled>
      <ImageSkillStyled src={ image } alt={ description } />
    </DivStyled>
  )
}

CardSkill.propTypes = {
  skill: PropTypes.shape({
    text: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string
  })
};

export default CardSkill;
