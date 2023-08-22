import PropTypes from 'prop-types';

function CardProject(props) {
  const { project, image, description, click, text } = props;

  return (
    <main>
      <p>{ project }</p>
      <img src={ image } alt={ description } />
      <button type='button' onClick={ click }>{ text }</button>
    </main>
  )
}

CardProject.propTypes = {
  project: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  click: PropTypes.func,
  text: PropTypes.string
};

export default CardProject;
