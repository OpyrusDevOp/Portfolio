export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
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
