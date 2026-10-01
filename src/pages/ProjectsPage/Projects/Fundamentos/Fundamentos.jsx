import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import CardProject from '../../../../components/helpers/Cards/CardProject/CardProject';
import { projectsFundamentals } from '../../../../mocks/projectsFundamentals';

function Fundamentos() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto grid w-full max-w-6xl flex-1 gap-5 px-4 py-14 sm:grid-cols-2 sm:px-8 sm:py-20 lg:grid-cols-3">{projectsFundamentals.map((project) => <CardProject key={project.id} project={project} />)}</main>
      <Footer />
    </div>
  );
}

export default Fundamentos;
