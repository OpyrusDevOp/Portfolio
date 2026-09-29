import type { ContactCardProps } from "../types/props";

const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  value,
  link
}) => {
  const external = link?.startsWith('http');
  const content = (
    <>
      <div className="w-10 h-10 shrink-0 rounded-md bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-colors">
        <Icon size={18} />
      </div>
      <div className="min-w-0">
        <h3 className="font-mono text-[10px] text-ink-faint uppercase tracking-widest">{title}</h3>
        <p className="text-sm text-ink truncate">{value}</p>
      </div>
    </>
  );
  const className = "panel panel-hover group p-4 flex items-center gap-3 text-left";

  return link ? (
    <a href={link} className={className} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
};

export default ContactCard;
