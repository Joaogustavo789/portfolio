import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-4 py-16 sm:px-8 lg:py-24">
        <section className="max-w-4xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">Campina Grande, PB • Disponível para criar</p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">Construo produtos digitais que funcionam no mundo real.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">Sou João Gustavo, desenvolvedor de software full stack. Transformo ideias, layouts e demandas de negócio em aplicações web e mobile confiáveis.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a className="rounded-full bg-cyan-300 px-6 py-3 font-extrabold text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-200" href="/projetos">Ver projetos</a>
            <a className="rounded-full border border-slate-600 px-6 py-3 font-bold text-slate-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200" href="/Joao_Gustavo_Desenvolvedor_Software.pdf" target="_blank" rel="noreferrer">Baixar currículo</a>
          </div>
          <div className="mt-16 grid max-w-3xl grid-cols-1 gap-4 border-t border-slate-800 pt-6 sm:grid-cols-3">
            <div><p className="font-mono text-xs uppercase tracking-widest text-slate-500">Atualmente</p><p className="mt-2 font-bold text-slate-200">MS Soluções Digitais</p></div>
            <div><p className="font-mono text-xs uppercase tracking-widest text-slate-500">Especialidade</p><p className="mt-2 font-bold text-slate-200">Web, APIs e mobile</p></div>
            <div><p className="font-mono text-xs uppercase tracking-widest text-slate-500">Formação</p><p className="mt-2 font-bold text-slate-200">ADS em andamento</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
