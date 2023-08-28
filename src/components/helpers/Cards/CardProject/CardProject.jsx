import PropTypes from 'prop-types';
import { DivStyled, PtextProject, LinkProject } from './styles';
import { useState } from 'react';

function CardProject(props) {
  const { project, image, alt, description, click, text } = props;

  const [hover, setHover] = useState(true);

  return (
    <DivStyled 
      onMouseEnter={ () => setHover(false) } 
      onMouseLeave={ () => setHover(true) }
    >
      { hover ? (
          <div>
            <PtextProject>{ project }</PtextProject>
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
  project: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
  click: PropTypes.func,
  text: PropTypes.string
};

export default CardProject;
