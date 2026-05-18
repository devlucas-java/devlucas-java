import { useLanguage } from '../context/LanguageContext';
import experienceData from '../data/experience.json';
import type { Experience } from '../types';

const experiences = experienceData as Experience[];

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            {t({ es: 'Trayectoria', en: 'Career' })}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t({ es: 'Experiencia', en: 'Experience' })}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex md:gap-8">

                {/* Dot */}
                <div className="relative shrink-0 flex-col items-center hidden md:flex">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ring-4 ring-[#0f0f13] z-10
                    ${index === 0
                      ? 'bg-violet-500 shadow-lg shadow-violet-500/40'
                      : 'bg-[#1a1a24] border border-white/10'
                    }`}
                  >
                    {index === 0 ? (
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-slate-600" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 pb-2">
                  <div className="rounded-2xl border border-white/5 bg-[#1a1a24] p-6 hover:border-violet-500/20 hover:bg-[#1e1e2a] transition-all duration-300 group">

                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-white font-bold text-base leading-snug group-hover:text-violet-200 transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-violet-400 text-sm font-medium mt-0.5">
                          {t(exp.role)}
                        </p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                      <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <svg className="w-3.5 h-3.5 flex-shrink-0 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {t(exp.period)}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <svg className="w-3.5 h-3.5 flex-shrink-0 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {t(exp.location)}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {t(exp.description)}
                    </p>

                    {/* Skills */}
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map(skill => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-slate-400 hover:border-violet-500/30 hover:text-violet-300 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
