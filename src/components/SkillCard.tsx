import React from 'react';
import type { SkillCardProps } from '../types/props';

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills }) => (
  <div className="panel panel-hover p-5">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
        <Icon size={18} />
      </div>
      <h3 className="font-mono text-xs text-ink uppercase tracking-widest">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {skills.map(skill => (
        <span key={skill} className="tag">{skill}</span>
      ))}
    </div>
  </div>
);

export default SkillCard;
