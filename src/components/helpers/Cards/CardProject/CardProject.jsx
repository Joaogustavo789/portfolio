import PropTypes from 'prop-types';
import { DivStyled, PtextProject, LinkProject } from './styles';

function CardProject(props) {
  const { project, image, description, click, text } = props;

  return (
    <DivStyled>
      <PtextProject>{ project }</PtextProject>
      <img src={ image } alt={ description } />
      <LinkProject
        href={ click }
        target="_blank" 
        rel="noopener noreferrer" 
      >
        { text }
      </LinkProject>
    </DivStyled>
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
