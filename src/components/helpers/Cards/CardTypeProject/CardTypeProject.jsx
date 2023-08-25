import PropTypes from 'prop-types';
import { DivStyled, ImageTypeProject, ButtonTypeProject } from './styles';

function CardTypeProject(props) {
  const { image, description, click, text } = props;

  return (
    <DivStyled>
      <ButtonTypeProject 
        type='button' 
        onClick={ click }
      >
      <ImageTypeProject src={ image } alt={ description } />
      { text }
      </ButtonTypeProject>
    </DivStyled>
  )
}

CardTypeProject.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  click: PropTypes.func,
  text: PropTypes.string
};

export default CardTypeProject;
