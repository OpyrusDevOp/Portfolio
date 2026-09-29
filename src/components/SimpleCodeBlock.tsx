import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
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
      <div className="p-4">
        <pre className="text-[13px] text-ink-muted overflow-x-auto">
          <code className="font-mono">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default SimpleCodeBlock;
