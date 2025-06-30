import React from 'react';
import { Github, ExternalLink, Play } from 'lucide-react';
import type { Project } from '../types';
import { getCategoryStyle } from '../utilities';

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
export default ProjectCard;
