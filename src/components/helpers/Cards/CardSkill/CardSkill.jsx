import PropTypes from 'prop-types';

function CardSkill({ skill }) {

  const { text, image } = skill;

  return (
    <article className="flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center hover:border-cyan-300/60">
      {image && <img className="h-12 w-12 object-contain" src={image} alt={`Logo de ${text}`} />}
      <p className="font-semibold text-slate-200">{text}</p>
    </article>
  );
}

CardSkill.propTypes = {
  skill: PropTypes.shape({
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default CardSkill;
