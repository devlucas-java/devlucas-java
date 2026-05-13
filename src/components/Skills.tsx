import { useLanguage } from '../context/LanguageContext';
import skillsData from '../data/skills.json';
import type { LocalizedString } from '../types';

interface SkillCategory {
  category: LocalizedString;
  icon: string;
  note?: LocalizedString;
  skills: string[];
}

const skills = skillsData as SkillCategory[];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            {t({ es: 'Lo que sé hacer', en: 'What I know' })}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t({ es: 'Habilidades', en: 'Skills' })}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div
              key={category.icon}
              className="rounded-2xl border border-white/5 bg-[#1a1a24] p-6 hover:border-violet-500/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <div>
                  <h3 className="text-white font-semibold text-base">
                    {t(category.category)}
                  </h3>
                  {category.note && (
                    <span className="text-xs text-amber-400/80 font-medium">
                      ⚠ {t(category.note)}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
