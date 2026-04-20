import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n';

const LanguageURLSync = () => {
  const { lang } = useLanguage();
  const [, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();

  useEffect(() => {
    setSearchParams(prev => { prev.set('lang', lang); return prev; }, { replace: true });
  }, [lang, pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default LanguageURLSync;
