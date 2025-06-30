import React, { useState } from 'react';
import { Download, FileText, Globe, ExternalLink } from 'lucide-react';

type Language = 'fr' | 'en';

const CVPageSimple: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('fr');

  const cvData = {
    fr: {
      title: 'CV - Français',
      description: 'Mon curriculum vitae en français',
      fileName: 'CV_Yves_Bidja_Bissa_FR.pdf',
      filePath: '/cv/CV_Yves_Bidja_Bissa_FR.pdf'
    },
    en: {
      title: 'CV - English',
      description: 'My curriculum vitae in English',
      fileName: 'CV_Yves_Bidja_Bissa_EN.pdf',
      filePath: '/cv/CV_Yves_Bidja_Bissa_EN.pdf'
    }
  };

  const currentCV = cvData[selectedLanguage];

  const handleDownload = async () => {
    try {
      const response = await fetch(currentCV.filePath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = currentCV.fileName;
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
      {/* Header */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mon CV
          </h1>
          <p className="text-xl text-slate-300 mb-12">
            Consultez et téléchargez mon curriculum vitae
          </p>

          {/* Language Selector */}
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
              <h2 className="text-2xl font-bold text-white mb-2">{currentCV.title}</h2>
              <p className="text-slate-300 mb-4">{currentCV.description}</p>
              <span className="inline-block bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                {currentCV.fileName}
              </span>
            </div>

            {/* PDF Embed */}
            <div className="mb-8">
              <div className="bg-slate-900 rounded-lg border border-slate-600 overflow-hidden" style={{ height: '600px' }}>
                <iframe
                  src={`${currentCV.filePath}#toolbar=1&navpanes=0&scrollbar=1`}
                  width="100%"
                  height="100%"
                  className="border-0"
                  title={currentCV.title}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleDownload}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-8 py-4 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:scale-105 font-semibold text-lg"
              >
                <Download size={24} />
                <span>Télécharger PDF</span>
              </button>

              <a
                href={currentCV.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-lg flex items-center space-x-3 transition-all duration-300 hover:scale-105 font-semibold text-lg"
              >
                <ExternalLink size={24} />
                <span>Ouvrir dans un nouvel onglet</span>
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">🇫🇷 Version Française</h3>
              <p className="text-slate-300 text-sm">
                CV complet en français avec toutes mes expériences, compétences et formations.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">🇬🇧 English Version</h3>
              <p className="text-slate-300 text-sm">
                Complete CV in English with all my experiences, skills and education background.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVPageSimple;
