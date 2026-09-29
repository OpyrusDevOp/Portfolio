import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Github, User, FolderGit2, Mail, type LucideIcon } from 'lucide-react';
import { useLanguage } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

const GITHUB_URL = 'https://github.com/OpyrusDevOp';

const Logo = ({ size = 'w-8 h-8' }: { size?: string }) => (
  <div
    className={`${size} bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary`}
    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
  >
    <span className="text-bg text-sm font-black font-display">Y</span>
  </div>
);

const useNavLinks = () => {
  const { t } = useLanguage();
  return [
    { to: '/', label: t.nav.home, icon: User },
    { to: '/projects', label: t.nav.projects, icon: FolderGit2 },
  ];
};

/* ── Floating sidebar (xl and up) ── */

const RailTooltip = ({ label }: { label: string }) => (
  <span
    className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2.5 py-1 rounded border border-line bg-surface/95
      font-mono text-[11px] uppercase tracking-wider text-ink whitespace-nowrap shadow-lg
      opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0
      transition-all duration-200"
  >
    {label}
  </span>
);

const railItem = (active = false) =>
  `group relative w-11 h-11 flex items-center justify-center rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-primary ${
    active ? 'bg-primary/10 text-primary' : 'text-ink-faint hover:text-ink hover:bg-surface-2'
  }`;

const RailLink = ({ href, label, icon: Icon, external }: { href: string; label: string; icon: LucideIcon; external?: boolean }) => (
  <a
    href={href}
    aria-label={label}
    className={railItem()}
    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
  >
    <Icon size={18} />
    <RailTooltip label={label} />
  </a>
);

const Sidebar = () => {
  const { t } = useLanguage();
  const links = useNavLinks();

  return (
    <nav
      aria-label="Main"
      className="hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-2 w-16 py-4
        rounded-2xl border border-line bg-surface/80 backdrop-blur-md shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]"
    >
      <Link to="/" aria-label="opyrus.dev" className="group relative mb-2">
        <Logo size="w-9 h-9" />
        <RailTooltip label="opyrus.dev" />
      </Link>

      <div className="w-8 h-px bg-line" />

      {links.map(({ to, label, icon: Icon }) => (
        <NavLink key={to} to={to} end aria-label={label} className={({ isActive }) => railItem(isActive)}>
          {({ isActive }) => (
            <>
              {isActive && <span className="absolute -left-[13px] top-2 bottom-2 w-[3px] rounded-r bg-primary shadow-[0_0_8px_rgba(62,230,196,0.8)]" />}
              <Icon size={18} />
              <RailTooltip label={label} />
            </>
          )}
        </NavLink>
      ))}

      <div className="w-8 h-px bg-line" />

      <RailLink href={GITHUB_URL} label="GitHub" icon={Github} external />
      <RailLink href="#contact" label={t.nav.contact} icon={Mail} />

      <div className="w-8 h-px bg-line mb-1" />

      <LanguageSwitcher vertical />
    </nav>
  );
};

/* ── Top bar (below xl) ── */

const TopBar = () => {
  const { t } = useLanguage();
  const links = useNavLinks();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) => `nav-link ${isActive ? 'active' : ''}`;

  return (
    <nav className="xl:hidden fixed top-0 inset-x-0 z-50 border-b border-line/70 bg-bg/75 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setMenuOpen(false)}>
          <Logo />
          <span className="font-mono text-sm font-bold tracking-wider text-ink group-hover:text-primary transition-colors">
            opyrus<span className="text-primary">.dev</span>
          </span>
        </Link>

        {/* Tablet / small desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end className={linkClass}>{l.label}</NavLink>
          ))}
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="nav-link inline-flex items-center gap-1.5">
            <Github size={14} /> GitHub
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded border border-primary/50 hover:border-primary bg-primary/5 hover:bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase transition-colors"
          >
            {t.nav.contact}
          </a>
          <LanguageSwitcher />
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            className="p-2 text-ink-muted hover:text-ink"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-px bg-current transition-transform ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-px bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-line bg-bg/95 px-6 py-5 flex flex-col gap-5">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end className={linkClass} onClick={() => setMenuOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="nav-link">GitHub ↗</a>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
        </div>
      )}
    </nav>
  );
};

const Navbar = () => (
  <>
    <Sidebar />
    <TopBar />
  </>
);

export default Navbar;
