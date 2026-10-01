import CardLink from '../helpers/Cards/CardLink/CardLink.jsx';
import { contacts } from '../../mocks/contacts.js';

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0b1720] px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">Vamos conversar</p>
          <h2 className="mt-1 text-xl font-extrabold text-white">Encontre-me na internet</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {contacts.map((contact) => <CardLink key={contact.id} contact={contact} />)}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
