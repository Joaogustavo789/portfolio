import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import JoaoGustavoPhoto from '../../images/assets/joao_smile.jpg';

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto grid w-full max-w-6xl flex-1 gap-12 px-4 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:py-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">Perfil profissional</p>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Sobre mim</h1>
          <img className="mt-8 aspect-[4/5] w-full max-w-sm rounded-3xl object-cover grayscale transition hover:grayscale-0" src={JoaoGustavoPhoto} alt="João Gustavo sorrindo" />
        </div>
        <div className="space-y-6 text-base leading-8 text-slate-400">
          <p>Sou desenvolvedor de software com experiência profissional no desenvolvimento e manutenção de aplicações web e mobile para clientes. Atualmente trabalho na <strong className="text-slate-200">MS Soluções Digitais</strong>, atuando da interface à integração com APIs e bancos de dados.</p>
          <p>Trabalho principalmente com <strong className="text-slate-200">React, Vite, Next.js, Node.js, Express.js, PostgreSQL e React Native</strong>. Também tenho experiência com autenticação JWT, controle de acesso, Docker, Vercel, Neon e Cloudinary.</p>
          <p>Gosto de transformar designs em experiências funcionais, colaborar com pull requests e code review e entender o problema antes de escolher a solução. No desenvolvimento mobile, já trabalhei com aplicações Android e impressão térmica via USB-OTG.</p>
          <div className="border-l-2 border-cyan-300 pl-5 text-slate-300"><p>Também estou cursando Análise e Desenvolvimento de Sistemas na UNIFACISA, depois de concluir minha formação em Desenvolvimento Web Full Stack pela Trybe.</p></div>
          <a className="inline-flex rounded-full border border-slate-600 px-5 py-3 font-bold text-slate-200 hover:border-cyan-300 hover:text-cyan-200" href="https://www.linkedin.com/in/joao-gustavo-mn/" target="_blank" rel="noreferrer">Ver LinkedIn ↗</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
