import { createContext, useContext, useState, type ReactNode } from 'react';
import { fr } from './fr';
import { en } from './en';

export type Language = 'fr' | 'en';
export interface Translations {
  nav: { home: string; projects: string; cv: string };
  home: {
    title: string; bio1Before: string; bio1Highlight: string; bio2: string;
    bio3Before: string; bio3Company: string; bio3After: string;
    availableTitle: string; availableDesc: string;
    tagSoftware: string; tagGames: string; tagElectronics: string;
    statYears: string; statProjects: string; statInternship: string;
    journey: string;
    internTitle: string; internDate: string; internDesc: string; internDone: string;
    masterTitle: string; masterDate: string; masterSchool: string; masterSpecialty: string; masterCurrent: string;
    licenseTitle: string; licenseDate: string; licenseSchool: string; licenseSpecialty: string;
    bachelorTitle: string; bachelorDate: string; bachelorSchool: string; bachelorCountry: string;
    ctaQuestion: string; ctaButton: string;
  };
  skills: { sectionTitle: string; webDev: string; mobile: string; games: string; databases: string; devops: string; languages: string };
  categories: { all: string; web: string; mobile: string; desktop: string; game: string; library: string; ai: string };
  projects: {
    title: string; subtitle: string; total: string; projectsLabel: string; featured: string;
    searchPlaceholder: string; noResults: string; noResultsHint: string; allProjects: string;
    video: string; viewCode: string; viewDemo: string;
  };
  cv: {
    title: string; subtitle: string; download: string; openNewTab: string; noLangVersion: string;
    profileLabel: string; frSectionTitle: string; frSectionDesc: string; enSectionTitle: string; enSectionDesc: string;
  };
  footer: { title: string; subtitle: string };
  contact: { phone: string; location: string };
}

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const getInitialLang = (): Language => {
  const p = new URLSearchParams(window.location.search).get('lang');
  return p === 'fr' || p === 'en' ? p : 'fr';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(getInitialLang);
  const t = lang === 'fr' ? fr : en;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
