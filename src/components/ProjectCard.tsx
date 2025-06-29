import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import type { ProjectCardProps } from '../types/props';

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  githubLink,
  demoLink,
  type
}) => (
  <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
    <h3 className="text-xl font-semibold mb-3 text-blue-400">{title}</h3>
    <p className="text-slate-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((t, index) => (
        <span
          key={index}
          className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-sm"
        >
          {t}
        </span>
      ))}
    </div>
    <div className="flex gap-3">
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-slate-300 hover:text-blue-400 transition-colors"
        >
          <Github size={16} className="mr-1" />
          Code
        </a>
      )}
      {demoLink && (
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-slate-300 hover:text-blue-400 transition-colors"
        >
          <ExternalLink size={16} className="mr-1" />
          {type === 'video' ? 'Vidéo' : 'Demo'}
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
