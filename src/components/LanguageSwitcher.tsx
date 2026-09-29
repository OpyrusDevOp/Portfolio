import { useLanguage, type Language } from '../i18n';

const LANGS: Language[] = ['fr', 'en'];

const LanguageSwitcher = ({ vertical = false }: { vertical?: boolean }) => {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`flex rounded border border-line overflow-hidden font-mono text-[11px] ${vertical ? 'flex-col' : ''}`}>
      {LANGS.map(l => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 uppercase tracking-wider transition-colors ${
            lang === l ? 'bg-primary text-bg font-bold' : 'text-ink-muted hover:text-ink hover:bg-surface-2'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
