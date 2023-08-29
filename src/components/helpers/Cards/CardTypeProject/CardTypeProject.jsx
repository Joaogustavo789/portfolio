import PropTypes from 'prop-types';
import { DivStyled, ImageTypeProject, ButtonTypeProject } from './styles';
import { useHistory } from 'react-router-dom';

function CardTypeProject(props) {
  const history = useHistory();

  const { typepro } = props;

  const { image, description, click, text } = typepro;

  return (
    <DivStyled>
      <ButtonTypeProject 
        type='button' 
        onClick={ () => history.push(click) }
      >
      <ImageTypeProject src={ image } alt={ description } />
      { text }
      </ButtonTypeProject>
    </DivStyled>
  )
}

CardTypeProject.propTypes = {
  typepro: PropTypes.shape({
    image: PropTypes.string,
    description: PropTypes.string,
    click: PropTypes.func,
    text: PropTypes.string
  })
};

export default CardTypeProject;
