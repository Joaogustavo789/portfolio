import PropTypes from 'prop-types';
import { DivStyled,  ImageProject, PtextProject, DivHover, PtextDescription, LinkProject  } from './styles';
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
            <ImageProject src={ image } alt={ alt } />
            <PtextProject>{ title }</PtextProject>
          </div>
        ) : (
          <DivHover>
            <PtextDescription>{ description }</PtextDescription>
            <LinkProject
              href={ click }
              target="_blank" 
              rel="noopener noreferrer" 
            >
              { text }
            </LinkProject>
          </DivHover>
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
