import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Github, ExternalLink, X, Play, Image, FileText } from "lucide-react";
import type { Project } from "../types";
import { getCategoryStyle, STATUS_STYLES } from "../utilities";
import { getCategories } from "../Information";
import { useLanguage } from "../i18n";

type Tab = 'overview' | 'media';

const toEmbedUrl = (url: string) =>
  url.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/');

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const { lang, t } = useLanguage();
  const hasMedia = Boolean(project.videoUrl || project.imageUrl);
  const [tab, setTab] = useState<Tab>('overview');

  const longDesc = lang === 'en' && project.longDescription_en
    ? project.longDescription_en
    : (project.longDescription || project.description);
  const dateLocale = lang === 'fr' ? 'fr-FR' : 'en-US';
  const category = getCategories(t).find(c => c.id === project.category);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const stats = [
    { label: t.projects.category, value: category?.name ?? project.category },
    { label: t.projects.date, value: new Date(project.date).toLocaleDateString(dateLocale, { month: 'long', year: 'numeric' }) },
    { label: t.projects.status, value: t.projects.statuses[project.status] },
    { label: t.projects.techStack, value: String(project.technologies.length) },
  ];

  const tabs: { id: Tab; label: string; icon: typeof FileText }[] = [
    { id: 'overview', label: t.projects.overview, icon: FileText },
    ...(hasMedia ? [{ id: 'media' as const, label: project.videoUrl ? t.projects.video : t.projects.media, icon: project.videoUrl ? Play : Image }] : []),
  ];

  const iconBtn = "w-9 h-9 flex items-center justify-center rounded border border-line-strong text-ink-muted transition-colors";

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="absolute inset-0 bg-bg/85 backdrop-blur-sm" onClick={onClose} />

      <div
        className="panel relative w-full sm:max-w-4xl flex flex-col !bg-surface rounded-b-none sm:rounded-md"
        style={{ height: 'min(92vh, 800px)', animation: 'overlayIn 0.25s cubic-bezier(0.16,1,0.3,1) both' }}
      >
        {/* Header */}
        <div className="flex-none flex items-start gap-3 px-5 sm:px-6 py-4 border-b border-line">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              {project.featured && (
                <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm border border-primary/40 text-primary bg-primary/5">
                  ★ {t.projects.featuredBadge}
                </span>
              )}
              <span className={`font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm border ${STATUS_STYLES[project.status]}`}>
                {t.projects.statuses[project.status]}
              </span>
              <span className={`font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm ${getCategoryStyle(project.category)}`}>
                {category?.name ?? project.category}
              </span>
            </div>
            <h2 id="project-modal-title" className="font-display text-2xl sm:text-3xl font-black text-ink leading-tight">
              {project.title}
            </h2>
          </div>

          <div className="flex-none flex items-center gap-1.5">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title={t.projects.viewCode}
                className={`${iconBtn} hover:border-primary hover:text-primary`}>
                <Github size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title={t.projects.viewDemo}
                className={`${iconBtn} hover:border-primary hover:text-primary`}>
                <ExternalLink size={16} />
              </a>
            )}
            <button onClick={onClose} title={t.projects.close} aria-label={t.projects.close}
              className={`${iconBtn} ml-1 hover:border-danger hover:text-danger`}>
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex-none grid grid-cols-2 sm:grid-cols-4 border-b border-line bg-bg/40">
          {stats.map(s => (
            <div key={s.label} className="px-3 py-2.5 text-center border-r border-b sm:border-b-0 border-line last:border-r-0 even:border-r-0 sm:even:border-r">
              <div className="font-display font-bold text-sm text-ink truncate capitalize">{s.value}</div>
              <div className="font-mono text-[10px] text-ink-faint uppercase tracking-wider mt-0.5 truncate">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        {tabs.length > 1 && (
          <div className="flex-none flex border-b border-line overflow-x-auto" role="tablist">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                role="tab"
                aria-selected={tab === id}
                onClick={() => setTab(id)}
                className={`flex items-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-wider whitespace-nowrap border-b-2 transition-colors ${
                  tab === id
                    ? 'border-primary text-primary bg-primary/5'
                    : 'border-transparent text-ink-faint hover:text-ink'
                }`}
              >
                <Icon size={13} /> {label}
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
          {tab === 'overview' && (
            <div className="p-5 sm:p-6 space-y-8">
              <div>
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-3">{t.projects.aboutProject}</h3>
                <div className="rich-text">{longDesc}</div>
              </div>
              <div>
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-3">{t.projects.techStack}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => <span key={tech} className="tag tag-primary">{tech}</span>)}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary hover:bg-primary-strong text-bg text-xs font-bold font-display uppercase tracking-wider transition-colors">
                    <Github size={15} /> {t.projects.viewCode}
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded border border-secondary/50 hover:border-secondary text-secondary text-xs font-bold font-display uppercase tracking-wider transition-colors">
                    <ExternalLink size={15} /> {t.projects.viewDemo}
                  </a>
                )}
                {hasMedia && (
                  <button onClick={() => setTab('media')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded border border-line-strong hover:border-violet text-ink-muted hover:text-violet text-xs font-bold font-display uppercase tracking-wider transition-colors">
                    {project.videoUrl ? <Play size={15} /> : <Image size={15} />}
                    {project.videoUrl ? t.projects.video : t.projects.media}
                  </button>
                )}
              </div>
            </div>
          )}

          {tab === 'media' && (
            <div className="p-5 sm:p-6 space-y-6">
              {project.videoUrl && (
                <div className="aspect-video w-full rounded overflow-hidden border border-line bg-black">
                  <iframe
                    src={toEmbedUrl(project.videoUrl)}
                    title={project.title}
                    className="w-full h-full"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                </div>
              )}
              {project.imageUrl && (
                <div className="rounded overflow-hidden border border-line bg-bg">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-auto" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
