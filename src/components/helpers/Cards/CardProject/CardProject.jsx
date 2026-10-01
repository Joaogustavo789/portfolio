import PropTypes from 'prop-types';
import { useState } from 'react';

function CardProject({ project }) {

  const { title, image, alt, description, click, text } = project;

  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/70">
      <img className="h-44 w-full object-cover" src={image} alt={alt} />
      <div className="flex flex-1 flex-col gap-4 p-5">
        <h2 className="text-lg font-extrabold text-white">{title}</h2>
        <p className={`text-sm leading-6 text-slate-400 ${expanded ? '' : 'line-clamp-3'}`}>{description}</p>
        <div className="mt-auto flex items-center justify-between gap-3">
          <button className="text-xs font-bold uppercase tracking-[0.12em] text-cyan-300 hover:text-cyan-200" type="button" onClick={() => setExpanded((value) => !value)}>
            {expanded ? 'Ver menos' : 'Ler descrição'}
          </button>
          <a className="rounded-full bg-cyan-300 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-slate-950 hover:bg-cyan-200" href={click} target="_blank" rel="noopener noreferrer">{text}</a>
        </div>
      </div>
    </article>
  );
}

CardProject.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    click: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardProject;
