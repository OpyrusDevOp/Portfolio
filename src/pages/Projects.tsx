import React, { useState, useMemo } from 'react';
import {
  Github, ExternalLink, Play, Calendar, Search,
  Code, Smartphone, Monitor, Gamepad2, Brain, Package
} from 'lucide-react';
import { type Project } from '../types';
const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Vos projets - à adapter selon vos vrais projets
  const projects: Project[] = [
    {
      id: '1',
      title: 'Duellist',
      description: 'Jeu vidéo d\'action développé avec Unity et C#',
      longDescription: 'Un jeu d\'action complet avec système de combat, IA ennemie, effets visuels et sonores. Développé entièrement en C# avec Unity, incluant la gestion des animations, des collisions et de l\'interface utilisateur.',
      technologies: ['Unity', 'C#', 'Game Design', 'Animation'],
      category: 'game',
      // githubUrl: 'https://github.com/OpyrusDevOp/Duellist',
      videoUrl: 'https://youtu.be/sAvPVJNv3yQ',
      featured: true,
      date: '2023-10',
      status: 'completed'
    },
    {
      id: '2',
      title: 'Automaton',
      description: 'Implémentation d\'automates de reconnaissance de langage',
      longDescription: 'Bibliothèque complète pour la création et manipulation d\'automates finis. Inclut des algorithmes de minimisation, déterminisation et reconnaissance de patterns.',
      technologies: ['C#', 'Algorithmes', 'Compilation', 'Théorie des langages'],
      category: 'library',
      githubUrl: 'https://github.com/OpyrusDevOp/Automaton/tree/rework',
      featured: true,
      date: '2024-12',
      status: 'completed'
    },
    {
      id: '3',
      title: 'HTTP-Server',
      description: 'Librairie simple pour serveur HTTP en C#',
      longDescription: 'Serveur HTTP léger et performant écrit en C#. Support des méthodes REST, routing, middleware et gestion des sessions.',
      technologies: ['C#', 'Networking', 'HTTP', 'API REST'],
      category: 'library',
      githubUrl: 'https://github.com/OpyrusDevOp/Http-Server',
      featured: false,
      date: '2024-12',
      status: 'completed'
    },
    // Ajoutez vos autres projets ici...
    {
      id: '4',
      title: 'Portfolio React',
      description: 'Portfolio personnel développé avec React et TypeScript',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'web',
      githubUrl: 'https://github.com/OpyrusDevOp/portfolio',
      liveUrl: 'https://yves-portfolio.vercel.app',
      featured: false,
      date: '2025-01',
      status: 'in-progress'
    },
    // Vous pouvez ajouter jusqu'à 10+ projets
  ];

  const categories = [
    { id: 'all', name: 'Tous les projets', icon: Package, color: 'text-slate-400' },
    { id: 'web', name: 'Web', icon: Monitor, color: 'text-blue-400' },
    { id: 'mobile', name: 'Mobile', icon: Smartphone, color: 'text-green-400' },
    { id: 'desktop', name: 'Desktop', icon: Monitor, color: 'text-purple-400' },
    { id: 'game', name: 'Jeux', icon: Gamepad2, color: 'text-red-400' },
    { id: 'library', name: 'Librairies', icon: Code, color: 'text-yellow-400' },
    { id: 'ai', name: 'IA', icon: Brain, color: 'text-pink-400' },
  ];

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
        {project.longDescription || project.description}
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

// Composant carte de projet standard
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
  <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden group cursor-pointer"
    onClick={onClick}>
    <div className="p-6">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getCategoryStyle(project.category)}`}>
          {project.category}
        </span>
      </div>

      <p className="text-slate-300 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {project.technologies.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="text-slate-400 text-xs px-2 py-1">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
            </a>
          )}
          {project.videoUrl && (
            <button className="text-slate-400 hover:text-red-400 transition-colors">
              <Play size={16} />
            </button>
          )}
        </div>
        <span className="text-slate-400 text-xs">
          {new Date(project.date).toLocaleDateString('fr-FR', {
            month: 'short',
            year: 'numeric'
          })}
        </span>
      </div>
    </div>
  </div>
);

// Modal de projet
const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="bg-slate-800 rounded-xl border border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryStyle(project.category)}`}>
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {project.videoUrl && (
          <div className="mb-6">
            <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden">
              <iframe
                src={project.videoUrl.replace('youtu.be/', 'youtube.com/embed/')}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <p className="text-slate-300 mb-6 leading-relaxed">
          {project.longDescription || project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-slate-700 text-slate-300 px-3 py-2 rounded-lg text-sm"
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
              className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Github size={20} />
              <span>Voir le code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <ExternalLink size={20} />
              <span>Voir la demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

// Fonction utilitaire pour les styles de catégorie
const getCategoryStyle = (category: string) => {
  const styles = {
    web: 'bg-blue-600/20 text-blue-300 border border-blue-600/30',
    mobile: 'bg-green-600/20 text-green-300 border border-green-600/30',
    desktop: 'bg-purple-600/20 text-purple-300 border border-purple-600/30',
    game: 'bg-red-600/20 text-red-300 border border-red-600/30',
    library: 'bg-yellow-600/20 text-yellow-300 border border-yellow-600/30',
    ai: 'bg-pink-600/20 text-pink-300 border border-pink-600/30',
    other: 'bg-slate-600/20 text-slate-300 border border-slate-600/30'
  };
  return styles[category as keyof typeof styles] || styles.other;
};

export default ProjectsPage;
