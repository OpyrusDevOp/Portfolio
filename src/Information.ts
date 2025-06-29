import { Monitor, Smartphone, Gamepad2, Database, Server, Code, Mail, Phone, Github, LocateIcon } from "lucide-react";
import type { ContactCardProps } from "./types/props";


export const skillsData = [
  {
    icon: Monitor,
    title: "Développement Web",
    skills: [".NET (C#)", "ASP.NET", "React", "TypeScript", "Node.js"]
  },
  {
    icon: Smartphone,
    title: "Mobile & Desktop",
    skills: ["MAUI", "WPF", "Flutter", "C/C++ (QT)"]
  },
  {
    icon: Gamepad2,
    title: "Jeux Vidéo",
    skills: ["Unity", "C#", "Blender", "Game Design"]
  },
  {
    icon: Database,
    title: "Bases de Données",
    skills: ["PostgreSQL", "MySQL", "SQL"]
  },
  {
    icon: Server,
    title: "DevOps & Outils",
    skills: ["Docker", "Jenkins", "Git", "Linux"]
  },
  {
    icon: Code,
    title: "Langages",
    skills: ["Python", "JavaScript", "Dart", "C/C++"]
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
