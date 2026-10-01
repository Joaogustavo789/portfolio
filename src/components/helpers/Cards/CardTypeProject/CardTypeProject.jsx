import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function CardTypeProject({ typepro }) {
  const navigate = useNavigate();

  const { image, description, click, text } = typepro;

  return (
    <button className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/70 text-left shadow-lg shadow-black/10 hover:-translate-y-1 hover:border-cyan-300/70" type="button" onClick={() => navigate(click)}>
      <img className="h-44 w-full object-cover opacity-80 transition group-hover:opacity-100" src={image} alt={description.replace(/<[^>]+>/g, '')} />
      <span className="block px-5 py-4 text-lg font-extrabold text-white">{text}</span>
    </button>
  );
}

CardTypeProject.propTypes = {
  typepro: PropTypes.shape({
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    click: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardTypeProject;
