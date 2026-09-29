import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Github, MapPin, ArrowRight } from "lucide-react";
import SkillCard from "../components/SkillCard";
import SectionHeader from "../components/SectionHeader";
import { getSkillsData } from "../Information";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <HeroSection />
      <SkillSection />
      <AboutSection />
      <JourneySection />
    </div>
  );
};

const TerminalIntro = ({ lines }: { lines: string[] }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= lines.length) return;
    const id = setTimeout(() => setCount(count + 1), 450);
    return () => clearTimeout(id);
  }, [count, lines.length]);

  return (
    <div className="code-shell max-w-xl">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-line bg-surface/60">
        <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
        <span className="ml-3 text-[11px] text-ink-faint tracking-widest">~/yves — fish</span>
      </div>
      <div className="p-4 text-[13px] min-h-[10.5rem]">
        {lines.slice(0, count).map((line, i) => (
          <div key={i} className="py-0.5 text-ink-muted">{line}</div>
        ))}
        {count >= lines.length && (
          <div className="py-0.5">
            <span className="text-primary">❯</span>
            <span className="cursor-blink text-primary ml-2">▍</span>
          </div>
        )}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const { t, lang } = useLanguage();

  const stats = [
    { label: t.home.statYears, value: '3+' },
    { label: t.home.statProjects, value: String(projects.length) },
    { label: t.home.statInternship, value: '1' },
    { label: t.home.statLanguages, value: '2' },
  ];

  return (
    <section className="pt-28 md:pt-32 xl:pt-20 pb-16">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded border border-primary/30 bg-primary/5">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[11px] text-primary tracking-widest uppercase">{t.home.availableBadge}</span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
            <span className="text-ink">YVES</span>
            <br />
            <span className="gradient-text">BIDJA</span>
          </h1>

          <p className="font-mono text-xs md:text-sm text-ink-faint tracking-widest uppercase mt-5 mb-6">
            // {t.home.role}
          </p>

          <p className="text-ink-muted text-base md:text-lg leading-relaxed max-w-xl mb-8">
            {t.home.bio2}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-primary hover:bg-primary-strong text-bg text-sm font-bold font-display tracking-wider uppercase transition-colors glow-primary"
            >
              {t.home.viewProjects} <ArrowRight size={16} />
            </Link>
            <a
              href="https://github.com/OpyrusDevOp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-line-strong hover:border-secondary text-ink-muted hover:text-ink text-sm font-bold font-display tracking-wider uppercase transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
          </div>

          <TerminalIntro key={lang} lines={t.home.terminal} />
        </div>

        {/* Avatar + stats */}
        <div className="w-full lg:w-80 flex flex-col gap-4">
          <div className="panel p-1">
            <div className="aspect-square rounded bg-gradient-to-br from-primary/10 via-surface to-violet/15 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 grid-bg" />
              <div className="relative text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-violet p-[2px] glow-primary mb-4">
                  <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                    <span className="font-display text-4xl font-black gradient-text">YB</span>
                  </div>
                </div>
                <a
                  href="https://github.com/OpyrusDevOp"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
                >
                  <Github size={12} /> @OpyrusDevOp
                </a>
                <p className="flex items-center justify-center gap-1 font-mono text-xs text-ink-faint mt-1.5">
                  <MapPin size={12} /> Montbéliard, France
                </p>
              </div>
              <span className="absolute top-3 right-3 font-mono text-[10px] text-primary/50">[ONLINE]</span>
              <span className="absolute bottom-3 left-3 font-mono text-[10px] text-ink-faint">v{new Date().getFullYear()}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map(s => (
              <div key={s.label} className="panel panel-secondary p-4 text-center">
                <div className="stat-num text-3xl">{s.value}</div>
                <div className="font-mono text-[10px] text-ink-faint mt-1 uppercase tracking-wider leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillSection = () => {
  const { t } = useLanguage();
  const skillsData = getSkillsData(t);
  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <SectionHeader index="01" title={t.skills.sectionTitle} accent="primary" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsData.map(skill => (
          <SkillCard key={skill.title} icon={skill.icon} title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </section>
  );
};

const INTEREST_TAGS = ['tag tag-primary', 'tag', 'tag tag-violet', 'tag tag-accent'];

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-16 scroll-mt-20">
      <SectionHeader index="02" title={t.home.aboutTitle} accent="secondary" />
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4 text-ink-muted text-base leading-relaxed">
          <p>
            {t.home.bio1Before}
            <span className="text-secondary font-medium">{t.home.bio1Highlight}</span>
          </p>
          <p>
            {t.home.bio3Before}
            <span className="text-primary font-medium">{t.home.bio3Company}</span>
            {t.home.bio3After}.
          </p>
          <p className="text-ink">{t.home.availableDesc}.</p>
          <div className="pt-3 flex flex-wrap gap-2">
            {t.home.interests.map((label, i) => (
              <span key={label} className={INTEREST_TAGS[i % INTEREST_TAGS.length]}>{label}</span>
            ))}
          </div>
        </div>

        <div className="panel panel-secondary p-5">
          <h3 className="font-mono text-xs text-secondary uppercase tracking-widest mb-4">{t.home.quickFacts}</h3>
          <dl className="space-y-3">
            {t.home.facts.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-line pb-2.5 last:border-0 last:pb-0">
                <dt className="font-mono text-xs text-ink-faint">{k}</dt>
                <dd className="font-mono text-xs text-ink text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

type TimelineType = 'education' | 'work';

const TYPE_STYLE: Record<TimelineType, { text: string; dot: string }> = {
  education: { text: 'text-secondary', dot: 'bg-secondary shadow-[0_0_10px_rgba(139,156,255,0.9)]' },
  work: { text: 'text-primary', dot: 'bg-primary shadow-[0_0_10px_rgba(62,230,196,0.9)]' },
};

const JourneySection = () => {
  const { t } = useLanguage();
  const h = t.home;

  const timeline: {
    date: string; title: string; org: string; note?: string;
    type: TimelineType; tags?: string[]; current?: boolean;
  }[] = [
    { date: h.masterDate, title: h.masterTitle, org: h.masterSchool, note: h.masterSpecialty, type: 'education', current: true },
    { date: h.internDate, title: h.internTitle, org: 'ELLIADD', note: h.internDesc, type: 'work', tags: ['Unity', 'C#', h.internDone] },
    { date: h.licenseDate, title: h.licenseTitle, org: h.licenseSchool, note: h.licenseSpecialty, type: 'education' },
    { date: h.bachelorDate, title: h.bachelorTitle, org: h.bachelorSchool, note: h.bachelorCountry, type: 'education' },
  ];

  return (
    <section id="journey" className="py-16 scroll-mt-20">
      <SectionHeader index="03" title={h.journey} accent="violet" />

      <div className="relative ml-1.5">
        <div className="timeline-line" />
        {timeline.map(item => (
          <div key={item.title + item.date} className="relative pl-8 md:pl-10 pb-8 last:pb-0">
            <span className={`absolute -left-[5px] top-1.5 w-[11px] h-[11px] rounded-full border-2 border-bg ${TYPE_STYLE[item.type].dot}`} />
            <div className="flex items-center gap-3 mb-2">
              <span className={`font-mono text-xs font-bold ${TYPE_STYLE[item.type].text}`}>{item.date}</span>
              <span className="font-mono text-[10px] text-ink-faint uppercase tracking-widest">
                {item.type === 'work' ? h.typeWork : h.typeEducation}
              </span>
              {item.current && <span className="tag tag-primary">{h.current}</span>}
            </div>
            <div className={`panel panel-hover p-5 ${item.type === 'work' ? '' : 'panel-secondary'}`}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                <span className="font-mono text-xs text-ink-faint sm:text-right">{item.org}</span>
              </div>
              {item.note && <p className="text-ink-muted text-sm leading-relaxed">{item.note}</p>}
              {item.tags && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 panel panel-accent p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-xl md:text-2xl font-bold text-ink">{h.ctaQuestion}</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-accent hover:brightness-110 text-bg text-sm font-bold font-display tracking-wider uppercase transition"
        >
          {h.ctaButton} <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default HomePage;
