import { Monitor, Smartphone, Gamepad2, Database, Server, Code, Mail, Phone, Github, LocateIcon, Brain, Package } from "lucide-react";
import type { ContactCardProps } from "./types/props";
import type { Category } from "./types";



export const skillsData = [
  {
    icon: Monitor,
    title: "Développement Web",
    skills: [".NET (C#)", "ASP.NET", "React", "TypeScript", "Node.js"]
  },
  {
    icon: Smartphone,
    title: "Mobile & Desktop",
    skills: ["MAUI", "WPF", "Flutter", "QT", "Pyside", "React-Native"]
  },
  {
    icon: Gamepad2,
    title: "Jeux Vidéo",
    skills: ["Unity", "C#", "Blender", "Game Design"]
  },
  {
    icon: Database,
    title: "Bases de Données",
    skills: ["PostgreSQL", "Sqlite", "MongoDb", "SQL"]
  },
  {
    icon: Server,
    title: "DevOps & Outils",
    skills: ["Docker", "Jenkins", "Git", "Linux", "GithubAction"]
  },
  {
    icon: Code,
    title: "Langages",
    skills: ["Javascript/Typescript", "C#", "Dart", "C++", "Python"]
  }
];

export const projectsData = [
  {
    title: "Duellist",
    description: "Jeu vidéo d'action développé avec Unity et C#",
    tech: ["Unity", "C#", "Game Design"],
    demoLink: "https://youtu.be/sAvPVJNv3yQ",
    type: "video" as const
  },
  {
    title: "Automaton",
    description: "Implémentation d'automates de reconnaissance de langage",
    tech: ["C#", "Algorithmes", "Compilation"],
    githubLink: "https://github.com/OpyrusDevOp/Automaton/tree/rework"
  },
  {
    title: "HTTP-Server",
    description: "Librairie simple pour serveur HTTP en C#",
    tech: ["C#", "Networking", "API"],
    githubLink: "https://github.com/OpyrusDevOp/Http-Server"
  }
];

export const contactData: ContactCardProps[] = [
  {
    icon: Mail,
    title: "Email",
    value: "yvesbidjabissa@gmail.com",
    link: "mailto:yvesbidjabissa@gmail.com"
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+33 0 610 544 808",
    link: "tel:+33610544808"
  },
  {
    icon: LocateIcon,
    title: "Localisation",
    value: "France - Montbéliard"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "OpyrusDevOp",
    link: "https://github.com/OpyrusDevOp"
  }
];


// Vos projets - à adapter selon vos vrais projets



export const categories: Category[] = [
  { id: 'all', name: 'Tous les projets', icon: Package, color: 'text-slate-400' },
  { id: 'web', name: 'Web', icon: Monitor, color: 'text-blue-400' },
  { id: 'mobile', name: 'Mobile', icon: Smartphone, color: 'text-green-400' },
  { id: 'desktop', name: 'Desktop', icon: Monitor, color: 'text-purple-400' },
  { id: 'game', name: 'Jeux', icon: Gamepad2, color: 'text-red-400' },
  { id: 'library', name: 'Librairies', icon: Code, color: 'text-yellow-400' },
  { id: 'ai', name: 'IA', icon: Brain, color: 'text-pink-400' },
];
