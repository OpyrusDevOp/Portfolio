import { Monitor, Smartphone, Gamepad2, Database, Server, Code, Mail, Phone, Github, LocateIcon, Brain, Package } from "lucide-react";
import type { ContactCardProps } from "./types/props";
import type { Category } from "./types";
import type { Translations } from "./i18n";

export const getSkillsData = (t: Translations) => [
  { icon: Monitor, title: t.skills.webDev, skills: ['.NET (C#)', 'ASP.NET', 'React', 'TypeScript', 'Node.js'] },
  { icon: Smartphone, title: t.skills.mobile, skills: ['MAUI', 'WPF', 'Flutter', 'QT', 'Pyside', 'React-Native'] },
  { icon: Gamepad2, title: t.skills.games, skills: ['Unity', 'C#', 'Blender', 'Game Design'] },
  { icon: Database, title: t.skills.databases, skills: ['PostgreSQL', 'Sqlite', 'MongoDb', 'SQL'] },
  { icon: Server, title: t.skills.devops, skills: ['Docker', 'Jenkins', 'Git', 'Linux', 'GithubAction'] },
  { icon: Code, title: t.skills.languages, skills: ['Javascript/Typescript', 'C#', 'Dart', 'C++', 'Python'] },
];

export const getCategories = (t: Translations): Category[] => [
  { id: 'all', name: t.categories.all, icon: Package, color: 'text-slate-400' },
  { id: 'web', name: t.categories.web, icon: Monitor, color: 'text-blue-400' },
  { id: 'mobile', name: t.categories.mobile, icon: Smartphone, color: 'text-green-400' },
  { id: 'desktop', name: t.categories.desktop, icon: Monitor, color: 'text-purple-400' },
  { id: 'game', name: t.categories.game, icon: Gamepad2, color: 'text-red-400' },
  { id: 'library', name: t.categories.library, icon: Code, color: 'text-yellow-400' },
  { id: 'ai', name: t.categories.ai, icon: Brain, color: 'text-pink-400' },
];

export const getContactData = (t: Translations): ContactCardProps[] => [
  { icon: Mail, title: 'Email', value: 'yvesbidjabissa@gmail.com', link: 'mailto:yvesbidjabissa@gmail.com' },
  { icon: Phone, title: t.contact.phone, value: '+33 0 610 544 808', link: 'tel:+33610544808' },
  { icon: LocateIcon, title: t.contact.location, value: 'France - Montbéliard' },
  { icon: Github, title: 'GitHub', value: 'OpyrusDevOp', link: 'https://github.com/OpyrusDevOp' },
];
