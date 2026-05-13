import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-sm font-medium text-slate-300 hover:text-white"
      title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className={lang === 'es' ? 'text-violet-400' : 'text-slate-400'}>ES</span>
      <span className="text-slate-600">/</span>
      <span className={lang === 'en' ? 'text-violet-400' : 'text-slate-400'}>EN</span>
    </button>
  );
}
