const CATEGORY_STYLES = {
  web: 'bg-sky-400/10 text-sky-300 border border-sky-400/30',
  mobile: 'bg-primary/10 text-primary border border-primary/30',
  desktop: 'bg-violet/10 text-violet border border-violet/30',
  game: 'bg-rose-400/10 text-rose-300 border border-rose-400/30',
  library: 'bg-accent/10 text-accent border border-accent/30',
  ai: 'bg-fuchsia-400/10 text-fuchsia-300 border border-fuchsia-400/30',
  other: 'bg-slate-400/10 text-slate-300 border border-slate-400/30',
};

export const getCategoryStyle = (category: string) =>
  CATEGORY_STYLES[category as keyof typeof CATEGORY_STYLES] || CATEGORY_STYLES.other;

export const STATUS_STYLES = {
  completed: 'text-primary border-primary/30 bg-primary/5',
  'in-progress': 'text-accent border-accent/30 bg-accent/5',
  archived: 'text-ink-faint border-line-strong bg-surface-2/40',
};
