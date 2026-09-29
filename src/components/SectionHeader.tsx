const ACCENTS = {
  primary: { text: 'text-primary', line: 'from-primary/40' },
  secondary: { text: 'text-secondary', line: 'from-secondary/40' },
  violet: { text: 'text-violet', line: 'from-violet/40' },
  accent: { text: 'text-accent', line: 'from-accent/40' },
};

interface SectionHeaderProps {
  index: string;
  title: string;
  accent?: keyof typeof ACCENTS;
}

const SectionHeader = ({ index, title, accent = 'primary' }: SectionHeaderProps) => (
  <div className="flex items-center gap-4 mb-10">
    <span className={`font-mono text-sm ${ACCENTS[accent].text}`}>{index}.</span>
    <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide">{title}</h2>
    <div className={`flex-1 h-px bg-gradient-to-r ${ACCENTS[accent].line} to-transparent`} />
  </div>
);

export default SectionHeader;
