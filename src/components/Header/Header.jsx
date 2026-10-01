import Button from "../helpers/Buttons/Button";
import PersonalPhoto from '../../images/assets/joao.jpeg';
import { routers } from "../../mocks/routers";

function Header() {
  return (
    <header className="border-b border-slate-800/80 bg-[#0b1720]/90 px-4 py-4 backdrop-blur sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button className="flex items-center gap-3 text-left" type="button" onClick={() => window.location.assign('/')}>
          <img className="h-12 w-12 rounded-full border-2 border-cyan-300/70 object-cover" src={PersonalPhoto} alt="João Gustavo" />
          <span>
            <span className="block text-sm font-extrabold tracking-wide text-white">João Gustavo</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-300">Software Developer</span>
          </span>
        </button>
        <nav className="flex flex-wrap items-center gap-1" aria-label="Navegação principal">
          {routers.map((route) => <Button key={route.id} route={route} />)}
        </nav>
      </div>
    </header>
  );
}

export default Header;
