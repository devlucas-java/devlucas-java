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
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  // Collect all unique technologies
  const allTechs = useMemo(() => {
    const set = new Set<string>();
    projects.forEach(p => p.technologies.forEach(tech => set.add(tech)));
    return Array.from(set).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      if (showFeaturedOnly && !p.featured) return false;
      if (activeTech && !p.technologies.includes(activeTech)) return false;
      return true;
    });
  }, [activeTech, showFeaturedOnly]);

  const featuredProjects = projects.filter(p => p.featured);

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
              es: `${projects.length} proyectos · ${featuredProjects.length} destacados`,
              en: `${projects.length} projects · ${featuredProjects.length} featured`,
            })}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 space-y-4">
          {/* Featured toggle */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setShowFeaturedOnly(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${!showFeaturedOnly
                  ? 'bg-violet-600 text-white'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                }
              `}
            >
              {t({ es: 'Todos', en: 'All' })}
            </button>
            <button
              onClick={() => setShowFeaturedOnly(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${showFeaturedOnly
                  ? 'bg-violet-600 text-white'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                }
              `}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {t({ es: 'Destacados', en: 'Featured' })}
            </button>
          </div>

          {/* Tech filter */}
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
              {t({ es: 'Todas las tecnologías', en: 'All technologies' })}
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
