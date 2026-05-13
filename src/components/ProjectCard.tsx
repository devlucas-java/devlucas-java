import { useState } from 'react';
import type { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  project: Project;
  activeTech: string | null;
}

export default function ProjectCard({ project, activeTech }: ProjectCardProps) {
  const { t } = useLanguage();
  const [showDiagram, setShowDiagram] = useState(false);

  const isFiltered = activeTech !== null && !project.technologies.includes(activeTech);

  if (isFiltered) return null;

  return (
    <div
      className={`relative group rounded-2xl border bg-[#1a1a24] transition-all duration-300 overflow-hidden
        ${project.featured
          ? 'border-violet-500/40 shadow-lg shadow-violet-500/10'
          : 'border-white/5 hover:border-white/10'
        }
      `}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="flex items-center gap-1 px-2.5 py-1 bg-violet-500/20 border border-violet-500/40 rounded-full text-violet-300 text-xs font-medium">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {t({ es: 'Destacado', en: 'Featured' })}
          </span>
        </div>
      )}

      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-3 pr-20 leading-snug">
          {t(project.title)}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {t(project.description)}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map(tech => (
            <TechBadge
              key={tech}
              tech={tech}
              active={activeTech === tech}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          {/* GitHub */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-sm text-slate-300 hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>

          {/* Live URL */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40 rounded-lg text-sm text-emerald-400 hover:text-emerald-300 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t({ es: 'Ver en vivo', en: 'Live demo' })}
            </a>
          )}

          {/* README */}
          <a
            href={project.readmeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-sm text-slate-300 hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            README
          </a>

          {/* Diagram toggle — só mostra se tiver URL */}
          {project.diagramUrl && (
          <button
            onClick={() => setShowDiagram(v => !v)}
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm transition-all
              ${showDiagram
                ? 'bg-violet-500/20 border-violet-500/40 text-violet-300'
                : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-slate-300 hover:text-white'
              }
            `}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
            </svg>
            {t({ es: 'Diagrama', en: 'Diagram' })}
          </button>
          )}
        </div>

        {/* Diagram panel */}
        {showDiagram && (
          <div className="mt-5 p-4 rounded-xl bg-white/3 border border-white/5">
            {project.diagramUrl ? (
              <div>
                <p className="text-slate-400 text-xs mb-3">{t(project.diagramDescription)}</p>
                <img
                  src={project.diagramUrl}
                  alt={t(project.title) + ' diagram'}
                  className="w-full rounded-lg border border-white/10"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <svg className="w-10 h-10 text-slate-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
                <p className="text-slate-500 text-sm">
                  {t({ es: 'Agrega la URL del diagrama en projects.json', en: 'Add the diagram URL in projects.json' })}
                </p>
                <p className="text-slate-600 text-xs mt-1">
                  {t(project.diagramDescription)}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
