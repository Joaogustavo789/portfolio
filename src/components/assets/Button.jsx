import PropTypes from 'prop-types';

function Button(props) {
  const { click, text } = props;

  return (
    <button type="button" onClick={ click }>{ text }</button>
  )
}

Button.propTypes = {
  click: PropTypes.func,
  text: PropTypes.string
};

export default Button;
