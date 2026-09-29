import { getContactData } from "../Information";
import ContactCard from "./ContactCard";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../i18n";

const Footer = () => {
  const { t } = useLanguage();
  const contactData = getContactData(t);
  return (
    <footer className="relative z-10">
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 scroll-mt-20">
        <SectionHeader index="//" title={t.footer.title} accent="accent" />
        <p className="text-ink-muted mb-8 max-w-xl">{t.footer.subtitle}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactData.map(contact => (
            <ContactCard
              key={contact.title}
              icon={contact.icon}
              title={contact.title}
              value={contact.value}
              link={contact.link}
            />
          ))}
        </div>
      </section>

      <div className="border-t border-line/70 bg-bg/85">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs">
          <span className="text-ink-faint">© {new Date().getFullYear()} Yves Bidja Bissa — {t.footer.builtWith}</span>
          <span className="text-ink-faint"><span className="text-primary">▲</span> {t.footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
