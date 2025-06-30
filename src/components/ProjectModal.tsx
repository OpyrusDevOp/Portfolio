import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../types";
import { getCategoryStyle } from "../utilities";

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-7">
    <div className="bg-slate-800 rounded-xl border border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-hidden">
      <div className="p-8">
        <div className="flex items-start justify-between mb-6 sticky">
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

        <div className="overflow-y-auto max-w-4xl w-full max-h-[60vh] my-5">
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


          {project.imageUrl && (
            <div className="mb-6 align-middle items-center text-center w-full">
              <img src={project.imageUrl} className='object-center align-middle text-center max-h-[60vh]' />
            </div>
          )}

          <p className="text-slate-300 mb-6 leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

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

        <div className="flex items-center space-x-4 stiky">
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
  </div >
);

export default ProjectModal;
