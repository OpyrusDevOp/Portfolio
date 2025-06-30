import React from 'react';
import type { SkillCardProps } from '../types/props';


const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills }) => (
  <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700
    hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
    <div className="flex items-center mb-4">
      <Icon className="text-blue-400 mr-3" size={24} />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="inline-block bg-slate-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;
