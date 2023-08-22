import PropTypes from 'prop-types';

function CardTypeProject(props) {
  const { click, text } = props;

  return (
    <main>
      <button type='button' onClick={ click }>{ text }</button>
    </main>
  )
}

CardTypeProject.propTypes = {
  click: PropTypes.func,
  text: PropTypes.string
};

export default CardTypeProject;
