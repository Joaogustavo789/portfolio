import PropTypes from 'prop-types';

function CardTypeProject(props) {
  const { click, text } = props;

  return (
    <div>
      <img src="" alt="" />
      <button type='button' onClick={ click }>{ text }</button>
    </div>
  )
}

CardTypeProject.propTypes = {
  click: PropTypes.func,
  text: PropTypes.string
};

export default CardTypeProject;
