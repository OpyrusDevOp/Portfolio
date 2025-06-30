import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check, Code } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
  fileName?: string;
  showLineNumbers?: boolean;
  maxHeight?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  title,
  fileName,
  showLineNumbers = true,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <Code size={16} className="text-blue-400" />
          <div>
            {title && (
              <h4 className="text-sm font-semibold text-white">{title}</h4>
            )}
            {fileName && (
              <p className="text-xs text-slate-400">{fileName}</p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs text-slate-400 uppercase bg-slate-700 px-2 py-1 rounded">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors duration-200 p-1.5 hover:bg-slate-700 rounded"
            title="Copier le code"
          >
            {isCopied ? (
              <Check size={16} className="text-green-400" />
            ) : (
              <Copy size={16} />
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="relative" >
        <div className="overscroll-contain overflow-scroll">
          <SyntaxHighlighter
            language={language.toLowerCase()}
            style={vscDarkPlus}
            showLineNumbers={showLineNumbers}
            customStyle={{
              margin: 0,
              padding: '1rem',
              background: 'transparent',
              fontSize: '14px',
              lineHeight: '1.5',
            }}
            lineNumberStyle={{
              minWidth: '3em',
              paddingRight: '1em',
              color: '#64748b',
              borderRight: '1px solid #334155',
              marginRight: '1em',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>

        {/* Fade effect for long code */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div> */}
      </div>
    </div>
  );
};

export default CodeBlock;
