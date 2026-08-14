import WhatsappIcon from '../assets/external/whatsapp-white.svg?raw';
import { whatsappUrl } from '../content/sitio';

export default function Whatsapp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 z-90 inline-flex items-center gap-2.5 rounded-full bg-brand-cta px-6.5 py-3.75 font-label text-sm font-bold tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-brand-cta/85 md:right-8 [&_svg]:h-5.5 [&_svg]:w-5.5"
      dangerouslySetInnerHTML={{
        __html: `${WhatsappIcon}¡Agenda tu clase!`,
      }}
    />
  );
}
