import Header from "../../components/Header/Header";
import CardSkill from "../../components/helpers/Cards/CardSkill/CardSkill";
import Footer from '../../components/Footer/Footer';
import { skills } from "../../mocks/skills";

function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 sm:px-8 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">Ferramentas que uso</p>
        <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Stack técnica</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">Uma seleção das tecnologias e práticas que fazem parte do meu trabalho atual.</p>
        <section className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{skills.map((skill) => <CardSkill key={skill.id} skill={skill} />)}</section>
      </main>
      <Footer />
    </div>
  );
}

export default SkillsPage;
