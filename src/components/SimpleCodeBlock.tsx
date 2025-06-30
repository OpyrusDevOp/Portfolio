import React, { useState } from 'react';
import { Copy, Check, Code } from 'lucide-react';
import type { SimpleCodeBlockProps } from '../types/props';

const SimpleCodeBlock: React.FC<SimpleCodeBlockProps> = ({
  code,
  language,
  title,
  fileName
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
            className="flex items-center text-slate-400 hover:text-white transition-colors duration-200 p-1.5 hover:bg-slate-700 rounded"
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
      <div className="p-4">
        <pre className="text-sm text-slate-300 overflow-x-auto">
          <code className="font-mono">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default SimpleCodeBlock;
