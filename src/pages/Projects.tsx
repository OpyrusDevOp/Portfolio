import React, { useState, useMemo } from 'react';
import {
  Github, ExternalLink, Play, Calendar, Search,
} from 'lucide-react';
import { type Project } from '../types';
import { categories } from '../Information';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { getCategoryStyle } from '../utilities';


const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'mobile' | 'desktop' | 'game' | 'library' | 'ai'>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text uppercase">
            Mes Projets
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Découvrez mes réalisations techniques : jeux vidéo, applications web, librairies et plus encore.
            Chaque projet reflète ma passion pour le développement et l'innovation.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-slate-400">Total :</span>
            <span className="text-2xl font-bold text-blue-400">{projects.length}</span>
            <span className="text-slate-400">projets</span>
          </div>
        </div>
      </section>

      {/* Projets en vedette */}
      {featuredProjects.length > 0 && (
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text uppercase">
              Projets en vedette
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filtres et recherche */}
      <section className="py-8 top-16 bg-slate-900/95 backdrop-blur-md z-40 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Barre de recherche */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-slate-400"
              />
            </div>
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive
                    ? 'bg-blue-600 text-white border border-blue-500'
                    : 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-slate-600'
                    }`}
                >
                  <Icon size={16} className={isActive ? 'text-white' : category.color} />
                  <span>{category.name}</span>
                  <span className="bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full text-xs">
                    {category.id === 'all' ? projects.length : projects.filter(p => p.category === category.id).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Liste des projets */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-slate-300 mb-2">Aucun projet trouvé</h3>
              <p className="text-slate-400">Essayez avec d'autres mots-clés ou catégories.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">
                  {selectedCategory === 'all' ? 'Tous les projets' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <span className="text-slate-400">
                  {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Modal de projet */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

// Composant carte de projet en vedette
const FeaturedProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] overflow-hidden group cursor-pointer"
    onClick={onClick}>
    <div className="p-8">

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryStyle(project.category)}`}>
            {project.category}
          </span>
        </div>
        <div className="text-slate-400 text-sm">
          <Calendar size={16} className="inline mr-1" />
          {new Date(project.date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long'
          })}
        </div>
      </div>
      <p className="text-slate-300 mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-300 hover:text-blue-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={18} className="mr-2" />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-slate-300 hover:text-green-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={18} className="mr-2" />
            Demo
          </a>
        )}
        {project.videoUrl && (
          <button className="flex items-center text-slate-300 hover:text-red-400 transition-colors">
            <Play size={18} className="mr-2" />
            Vidéo
          </button>
        )}
      </div>
    </div>
  </div>
);


// Modal de projet

// Fonction utilitaire pour les styles de catégorie
export default ProjectsPage;
