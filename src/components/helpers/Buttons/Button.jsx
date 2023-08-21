import PropTypes from 'prop-types';
import { ButtonStyled, PtextStyled } from './styles';

function Button(props) {
  const { click, text } = props;

  return (
    <ButtonStyled type="button" onClick={ click }><PtextStyled>{ text }</PtextStyled></ButtonStyled>
  )
}

Button.propTypes = {
  click: PropTypes.func,
  text: PropTypes.string
};

export default Button;
