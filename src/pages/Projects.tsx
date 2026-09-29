import React, { useState, useMemo, useCallback } from "react";
import { Search } from "lucide-react";
import { type Category, type Project } from "../types";
import { getCategories } from "../Information";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { useLanguage } from "../i18n";

const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();
  const categories = getCategories(t);

  const [selectedCategory, setSelectedCategory] = useState<Category["id"]>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  const filteredProjects = useMemo(() => {
    const search = searchTerm.toLowerCase();
    return projects
      .filter((project) => {
        const matchesCategory =
          selectedCategory === "all" || project.category === selectedCategory;
        const matchesSearch =
          project.title.toLowerCase().includes(search) ||
          project.description.toLowerCase().includes(search) ||
          (project.description_en?.toLowerCase().includes(search) ?? false) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(search));
        return matchesCategory && matchesSearch;
      })
      // Featured first, otherwise keep the curated order from data/projects
      .sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [selectedCategory, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 md:pt-32 xl:pt-20 pb-20">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-primary text-sm">~/projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
          <span className="font-mono text-xs text-ink-faint">
            {t.projects.total} <span className="text-primary font-bold">{projects.length}</span> {t.projects.projectsLabel}
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-black uppercase mb-4">
          <span className="gradient-text">{t.projects.title}</span>
        </h1>
        <p className="text-ink-muted max-w-2xl leading-relaxed">{t.projects.subtitle}</p>
      </div>

      {/* Search + filters */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-10">
        <div className="relative lg:w-72 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" size={16} />
          <input
            type="text"
            placeholder={t.projects.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded bg-surface/80 border border-line focus:border-primary focus:outline-none text-sm text-ink placeholder-ink-faint font-mono transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            const count = category.id === "all"
              ? projects.length
              : projects.filter((p) => p.category === category.id).length;
            if (count === 0) return null;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                aria-pressed={isActive}
                className={`flex items-center gap-2 px-3 py-1.5 rounded font-mono text-xs border transition-colors ${
                  isActive
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-line text-ink-muted hover:border-line-strong hover:text-ink"
                }`}
              >
                <Icon size={13} className={isActive ? "text-primary" : category.color} />
                {category.name}
                <span className={isActive ? "text-primary/70" : "text-ink-faint"}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-24 font-mono">
          <div className="text-4xl mb-4 text-ink-faint">:/</div>
          <h3 className="text-ink mb-2">{t.projects.noResults}</h3>
          <p className="text-ink-faint text-sm">{t.projects.noResultsHint}</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      )}

      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </div>
  );
};

export default ProjectsPage;
