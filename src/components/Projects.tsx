import { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import projectsData from '../data/projects.json';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';
import TechBadge from './TechBadge';

const projects = projectsData as Project[];

export default function Projects() {
  const { t } = useLanguage();
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const allTechs = useMemo(() => {
    const set = new Set<string>();
    projects.forEach(p => p.technologies.forEach(tech => set.add(tech)));
    return Array.from(set).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      if (activeTech && !p.technologies.includes(activeTech)) return false;
      return true;
    });
  }, [activeTech]);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            {t({ es: 'Mi trabajo', en: 'My work' })}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t({ es: 'Proyectos', en: 'Projects' })}
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {t({
              es: `${projects.length} proyectos`,
              en: `${projects.length} projects`,
            })}
          </p>
        </div>

        {/* Tech filter */}
        <div className="mb-10">
          <p className="text-center text-slate-500 text-xs uppercase tracking-widest mb-4">
            {t({ es: 'Tecnologías usadas', en: 'Technologies used' })}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveTech(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border
                ${activeTech === null
                  ? 'bg-violet-500/20 border-violet-500/40 text-violet-300'
                  : 'bg-white/3 border-white/5 text-slate-500 hover:text-slate-300 hover:border-white/10'
                }
              `}
            >
              {t({ es: 'Todas', en: 'All' })}
            </button>
            {allTechs.map(tech => (
              <TechBadge
                key={tech}
                tech={tech}
                active={activeTech === tech}
                clickable
                onClick={() => setActiveTech(activeTech === tech ? null : tech)}
              />
            ))}
          </div>
        </div>

        {/* Projects grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            {t({ es: 'No hay proyectos con ese filtro.', en: 'No projects match that filter.' })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                activeTech={activeTech}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
