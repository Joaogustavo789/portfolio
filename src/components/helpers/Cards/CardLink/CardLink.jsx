import PropTypes from 'prop-types';

function CardLink({ contact }) {

  const { text, link, image } = contact;

  return (
    <a className="flex items-center gap-2 rounded-full border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-300 hover:border-cyan-300 hover:text-cyan-200" href={link} target="_blank" rel="noopener noreferrer">
      <img className="h-5 w-5 object-contain" src={image} alt="" />
      <span>{text}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

CardLink.propTypes = {
  contact: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardLink;
