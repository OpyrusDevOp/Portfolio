import type { ContactCardProps } from "../types/props";

const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  value,
  link
}) => (
  <a
    href={link}
    className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 block"
  >
    <div className="text-blue-400 mb-3 flex justify-center">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-slate-300">{value}</p>
  </a>
);

export default ContactCard;
