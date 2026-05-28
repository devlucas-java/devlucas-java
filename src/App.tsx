import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0f0f13]">
        <Navbar />
        <main className='mt-5'>
          <Hero />
          <Projects />
          <Skills />
          <Education />
          <Experience />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}
