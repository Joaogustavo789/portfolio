import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Button({ route }) {
  const navigate = useNavigate();
  const { click, text } = route;

  return (
    <button
      className="rounded-full border border-transparent px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-300 hover:border-cyan-300 hover:text-cyan-200 sm:px-4 sm:text-sm"
      type="button"
      onClick={() => navigate(click)}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  route: PropTypes.shape({
    click: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Button;
