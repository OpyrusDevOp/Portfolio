import type { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: React.ReactNode;
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop' | 'game' | 'library' | 'ai' | 'other';
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
  featured: boolean;
  date: string;
  status: 'completed' | 'in-progress' | 'archived';
}

export interface Category {
  id: 'all' | 'web' | 'mobile' | 'desktop' | 'game' | 'library' | 'ai';
  name: string;
  icon: LucideIcon;
  color: string;
}

