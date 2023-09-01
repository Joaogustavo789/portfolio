import PropTypes from 'prop-types';
import { DivStyled, ImageSkillStyled, PStyled  } from './styles';

function CardSkill(props) {
  const { skill } = props;

  const { text, image, description } = skill;

  return (
    <DivStyled>
      <PStyled 
        style={{ fontSize: (text === 'Styled Comp.') && '17px' }}
      >
        { text }
      </PStyled>
      <ImageSkillStyled 
        src={ image } 
        alt={ description }
        style={{ height: (description === 'Logo do Chai') && '60px' }} 
      />
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
