import { useLanguage } from '../i18n';

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  return (
    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-lg flex overflow-hidden h-16">
      <button
        onClick={() => setLang('fr')}
        className={`px-4 font-medium text-sm transition-all duration-200 ${lang === 'fr' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}
      >
        FR
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-4 font-medium text-sm transition-all duration-200 ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
