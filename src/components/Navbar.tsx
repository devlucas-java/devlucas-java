import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang } = useLanguage();

  const links = {
    es: [
      { label: 'Inicio', href: '#hero' },
      { label: 'Experiencia', href: '#experience' },
      { label: 'Educación', href: '#education' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Habilidades', href: '#skills' },
      { label: 'Contacto', href: '#contact' },
    ],
    en: [
      { label: 'Home', href: '#hero' },
      { label: 'Experience', href: '#experience' },
      { label: 'Education', href: '#education' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0f0f13]/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-violet-400 font-bold text-lg tracking-tight">
          {'<devLucas-Java />'}
        </span>

        <div className="hidden md:flex items-center gap-8">
          {links[lang].map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <LanguageToggle />
      </div>
    </nav>
  );
}
