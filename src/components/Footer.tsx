import { contactData } from "../Information";
import ContactCard from "./ContactCard";

const Footer = () => (
  < section id="contact" className="py-20 bg-slate-800/50" >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text ">
        Contactez-moi
      </h2>
      <p className="text-xl text-slate-300 mb-12">
        Intéressé par mon profil ? N'hésitez pas à me contacter !
      </p>

      <div className="grid md:grid-cols-4 gap-8 content-center">
        {contactData.map((contact, index) => (
          <ContactCard
            key={index}
            icon={contact.icon}
            title={contact.title}
            value={contact.value}
            link={contact.link}
          />
        ))}
      </div>
    </div>
  </section >
)

export default Footer;
