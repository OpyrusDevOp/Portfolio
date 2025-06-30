import { type LucideIcon } from 'lucide-react';

export interface AnimatedNavbarProps {
  className?: string;
  onNavigate?: (section: string) => void;
}

export interface SimpleCodeBlockProps {
  code: string;
  language: string;
  title?: string;
  fileName?: string;
}


export interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubLink?: string;
  demoLink?: string;
  type?: 'video' | 'demo';
}

export interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  link?: string;
}
