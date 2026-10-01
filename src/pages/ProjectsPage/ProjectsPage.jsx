import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import CardTypeProject from "../../components/helpers/Cards/CardTypeProject/CardTypeProject";
import { typeproject } from "../../mocks/typeproject";

function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 sm:px-8 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">Trabalho e estudos</p>
        <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Projetos</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">Explore os projetos por área e veja como transformei ideias em aplicações.</p>
        <section className="mt-10 grid gap-5 sm:grid-cols-2">{typeproject.map((typepro) => <CardTypeProject key={typepro.id} typepro={typepro} />)}</section>
      </main>
      <Footer />
    </div>
  );
}

export default  ProjectsPage;
