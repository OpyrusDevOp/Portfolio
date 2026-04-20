import { createContext, useContext, useState, type ReactNode } from 'react';
import { fr } from './fr';
import { en } from './en';

export type Language = 'fr' | 'en';
export type Translations = typeof fr;

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
