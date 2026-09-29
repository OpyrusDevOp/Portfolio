import React from 'react';
import { Github, ExternalLink, Play, Image } from 'lucide-react';
import type { Project } from '../types';
import { getCategoryStyle, STATUS_STYLES } from '../utilities';
import { getCategories } from '../Information';
import { useLanguage } from '../i18n';

const MAX_TAGS = 4;

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const { lang, t } = useLanguage();
  const description = lang === 'en' && project.description_en ? project.description_en : project.description;
  const dateLocale = lang === 'fr' ? 'fr-FR' : 'en-US';
  const category = getCategories(t).find(c => c.id === project.category);
  const CategoryIcon = category?.icon;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      className={`panel panel-hover group cursor-pointer flex flex-col overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-primary ${
        project.featured ? 'border-primary/30' : 'panel-secondary'
      }`}
    >
      {project.featured && (
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      )}

      {/* Visual header */}
      <div className="relative h-40 overflow-hidden rounded-t-[5px] border-b border-line bg-surface-2">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition duration-500"
          />
        ) : (
          <div className="absolute inset-0 grid-bg bg-gradient-to-br from-primary/5 via-transparent to-violet/10 flex items-center justify-center">
            {CategoryIcon && <CategoryIcon size={44} className={`${category?.color} opacity-60 group-hover:opacity-90 transition-opacity`} />}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {project.featured && (
            <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm border border-primary/40 bg-bg/70 text-primary">
              ★ {t.projects.featuredBadge}
            </span>
          )}
          <span className={`font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm border bg-bg/70 ${STATUS_STYLES[project.status]}`}>
            {t.projects.statuses[project.status]}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className={`inline-block px-2 py-0.5 rounded-sm text-[11px] font-mono uppercase tracking-wider ${getCategoryStyle(project.category)}`}>
            {category?.name ?? project.category}
          </span>
          <span className="font-mono text-xs text-ink-faint">
            {new Date(project.date).toLocaleDateString(dateLocale, { month: 'short', year: 'numeric' })}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold text-ink group-hover:text-primary transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-ink-muted text-sm leading-relaxed mb-4 flex-1">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, MAX_TAGS).map(tech => (
            <span key={tech} className="tag">{tech}</span>
          ))}
          {project.technologies.length > MAX_TAGS && (
            <span className="font-mono text-[11px] text-ink-faint self-center">+{project.technologies.length - MAX_TAGS}</span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-line mt-auto">
          <div className="flex items-center gap-3 text-ink-faint">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
                onClick={e => e.stopPropagation()}
              >
                <Github size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="hover:text-primary transition-colors"
                onClick={e => e.stopPropagation()}
              >
                <ExternalLink size={16} />
              </a>
            )}
            {project.videoUrl && <Play size={16} />}
            {project.imageUrl && <Image size={16} />}
          </div>
          <span className="font-mono text-[11px] text-ink-faint group-hover:text-primary transition-colors tracking-wider uppercase">
            {t.projects.expand} ↗
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
