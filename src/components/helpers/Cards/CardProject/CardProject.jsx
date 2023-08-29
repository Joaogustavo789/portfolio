import PropTypes from 'prop-types';
import { DivStyled, PtextProject, LinkProject } from './styles';
import { useState } from 'react';

function CardProject(props) {
  const { project } = props;

  const { title, image, alt, description, click, text } = project;

  const [hover, setHover] = useState(true);

  return (
    <DivStyled 
      onMouseEnter={ () => setHover(false) } 
      onMouseLeave={ () => setHover(true) }
    >
      { hover ? (
          <div>
            <PtextProject>{ title }</PtextProject>
            <img src={ image } alt={ alt } />
          </div>
        ) : (
          <div>
            <p>{ description }</p>
            <LinkProject
              href={ click }
              target="_blank" 
              rel="noopener noreferrer" 
            >
              { text }
            </LinkProject>
          </div>
        )
      }
    </DivStyled>
  )
}

CardProject.propTypes = {
  project: PropTypes.shape(
    {
      title: PropTypes.string,
      image: PropTypes.string,
      alt: PropTypes.string,
      description: PropTypes.string,
      click: PropTypes.func,
      text: PropTypes.string
    }
  ),
};

export default CardProject;
