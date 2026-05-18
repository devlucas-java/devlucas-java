import { useLanguage } from '../context/LanguageContext';
import experienceData from '../data/experience.json';
import type { Experience } from '../types';

const experiences = experienceData as Experience[];

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            {t({ es: 'Trayectoria', en: 'Career' })}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t({ es: 'Experiencia', en: 'Experience' })}
          </h2>
        </div>

        <div className="space-y-4">
          {experiences.map(exp => (
            <div key={exp.id} className="rounded-2xl border border-white/5 bg-[#1a1a24] p-6 hover:border-white/10 transition-all">
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="text-white font-semibold text-base leading-snug">{exp.company}</h3>
                <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400">
                  {t(exp.type)}
                </span>
              </div>
              <p className="text-violet-300 text-sm font-medium mb-3">{t(exp.role)}</p>
              <div className="flex flex-col gap-1 mb-4">
                <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {t(exp.period)}
                </span>
                <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t(exp.location)}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{t(exp.description)}</p>
              {exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
