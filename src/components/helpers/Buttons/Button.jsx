import PropTypes from 'prop-types';
import { ButtonStyled, PtextStyled } from './styles';
import { useHistory } from 'react-router-dom';

function Button(props) {
  const history = useHistory();

  const { route } = props;

  const { click, text } = route;

  return (
    <ButtonStyled 
      type="button" 
      onClick={ () => history.push(click) }
    >
      <PtextStyled>{ text }</PtextStyled>
    </ButtonStyled>
  )
}

Button.propTypes = {
  route: PropTypes.shape({
    click: PropTypes.func,
    text: PropTypes.string
  })
};

export default Button;
