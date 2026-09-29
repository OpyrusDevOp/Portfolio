import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

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
    <div className="code-shell">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-line bg-surface/60">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
          </div>
          <div className="min-w-0 leading-tight">
            {title && <h4 className="text-xs font-semibold text-ink truncate">{title}</h4>}
            {fileName && <p className="text-[11px] text-ink-faint truncate">{fileName}</p>}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] text-ink-faint uppercase tracking-widest">{language}</span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded text-ink-faint hover:text-ink hover:bg-surface-2 transition-colors"
            aria-label="Copy code"
          >
            {isCopied ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="relative" >
        <div className="overscroll-contain overflow-auto">
          <SyntaxHighlighter
            language={language.toLowerCase()}
            style={vscDarkPlus}
            showLineNumbers={showLineNumbers}
            customStyle={{
              margin: 0,
              padding: '1rem',
              background: 'transparent',
              fontSize: '13px',
              fontFamily: "'JetBrains Mono', monospace",
              lineHeight: '1.5',
            }}
            lineNumberStyle={{
              minWidth: '3em',
              paddingRight: '1em',
              color: '#5d6d8a',
              borderRight: '1px solid #1b2842',
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
