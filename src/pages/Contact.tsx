import React, { useState, useEffect } from 'react';
import { Download, FileText, Globe, ExternalLink } from 'lucide-react';
import { useLanguage, type Language } from '../i18n';
import { cvProfiles } from '../cv/config';

const CVPageSimple: React.FC = () => {
  const { t, lang } = useLanguage();
  const [selectedProfileId, setSelectedProfileId] = useState(cvProfiles[0].id);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(lang);

  useEffect(() => {
    setSelectedLanguage(lang);
  }, [lang]);

  const profile = cvProfiles.find(p => p.id === selectedProfileId) ?? cvProfiles[0];
  const fileName = profile.files[selectedLanguage];
  const filePath = fileName ? `/cv/${fileName}` : null;

  const handleDownload = async () => {
    if (!filePath || !fileName) return;
    try {
      const response = await fetch(filePath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t.cv.title}
          </h1>
          <p className="text-xl text-slate-300 mb-12">{t.cv.subtitle}</p>

          {/* Profile selector (shown only when multiple profiles exist) */}
          {cvProfiles.length > 1 && (
            <div className="flex justify-center mb-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-2 border border-slate-700 flex flex-wrap gap-1 justify-center">
                <span className="self-center text-slate-400 text-sm px-2">{t.cv.profileLabel}</span>
                {cvProfiles.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProfileId(p.id)}
                    className={`px-5 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${selectedProfileId === p.id
                      ? 'bg-purple-600 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                  >
                    {p.label[lang]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Language selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-2 border border-slate-700 flex">
              <button
                onClick={() => setSelectedLanguage('fr')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${selectedLanguage === 'fr'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
              >
                <Globe size={18} />
                <span>Français</span>
              </button>
              <button
                onClick={() => setSelectedLanguage('en')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${selectedLanguage === 'en'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
              >
                <Globe size={18} />
                <span>English</span>
              </button>
            </div>
          </div>

          {/* CV Preview Card */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 p-8 mb-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText size={40} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {profile.label[lang]} — {selectedLanguage === 'fr' ? 'Français' : 'English'}
              </h2>
              {fileName ? (
                <span className="inline-block bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                  {fileName}
                </span>
              ) : (
                <span className="inline-block bg-red-900/40 text-red-300 px-3 py-1 rounded-full text-sm">
                  {t.cv.noLangVersion}
                </span>
              )}
            </div>

            {/* PDF Embed */}
            {filePath && (
              <div className="mb-8">
                <div className="bg-slate-900 rounded-lg border border-slate-600 overflow-hidden" style={{ height: '600px' }}>
                  <iframe
                    src={`${filePath}#toolbar=1&navpanes=0&scrollbar=1`}
                    width="100%"
                    height="100%"
                    className="border-0"
                    title={`${profile.label[lang]} - ${selectedLanguage.toUpperCase()}`}
                  />
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleDownload}
                disabled={!filePath}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed px-8 py-4 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:scale-105 font-semibold text-lg"
              >
                <Download size={24} />
                <span>{t.cv.download}</span>
              </button>

              {filePath && (
                <a
                  href={filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:scale-105 font-semibold text-lg"
                >
                  <ExternalLink size={24} />
                  <span>{t.cv.openNewTab}</span>
                </a>
              )}
            </div>
          </div>

          {/* Info cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">{t.cv.frSectionTitle}</h3>
              <p className="text-slate-300 text-sm">{t.cv.frSectionDesc}</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">{t.cv.enSectionTitle}</h3>
              <p className="text-slate-300 text-sm">{t.cv.enSectionDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVPageSimple;
