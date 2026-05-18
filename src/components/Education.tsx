import { useLanguage } from '../context/LanguageContext';
import educationData from '../data/education.json';
import type { Education } from '../types';

const educations = educationData as Education[];

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            {t({ es: 'Formación', en: 'Education' })}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t({ es: 'Educación', en: 'Education' })}
          </h2>
        </div>

        <div className="space-y-4">
          {educations.map(edu => (
            <div key={edu.id} className="rounded-2xl border border-white/5 bg-[#1a1a24] p-6 hover:border-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-base mb-0.5">{edu.institution}</h3>
                  <p className="text-violet-300 text-sm font-medium mb-1">{t(edu.degree)}</p>
                  <p className="text-slate-500 text-xs mb-2">{t(edu.field)}</p>
                  <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {t(edu.period)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
