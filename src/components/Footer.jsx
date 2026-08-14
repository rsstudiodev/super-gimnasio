import { servicios } from '../content/servicios';
import { sitio } from '../content/sitio';
import InstagramIcon from '../assets/external/instagram.svg?raw';
import FacebookIcon from '../assets/external/facebook.svg?raw';
import TiktokIcon from '../assets/external/tiktok.svg?raw';

const explorar = [
  { href: '/#horarios', label: 'Horarios' },
  { href: '/#precios', label: 'Membresías' },
  { href: '/#galeria', label: 'Galería' },
  { href: '/#instagram', label: 'Instagram' },
  { href: '/#ubicacion', label: 'Ubicación' },
];

const redes = [
  { href: sitio.redes.instagram, label: 'Instagram', icon: InstagramIcon },
  { href: sitio.redes.facebook, label: 'Facebook', icon: FacebookIcon },
  { href: sitio.redes.tiktok, label: 'TikTok', icon: TiktokIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-light/8 bg-brand-surface">
      <div className="mx-auto w-full max-w-7xl px-5 pt-14 pb-8 md:px-6">
        <div className="mb-10 grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4.5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-accent/45 font-label text-base font-extrabold text-brand-accent">
                {sitio.marcaIniciales}
              </span>
              <span className="font-label text-sm font-extrabold uppercase tracking-widest text-brand-light">
                {sitio.nombreCorto}
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed text-brand-light/55">
              {sitio.direccion}
              <br />
              {sitio.telefonoLlamadas}
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <h3 className="font-label text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-light/45">
              Clases
            </h3>
            <nav className="flex flex-col gap-2.5">
              {servicios.map((s) => (
                <a
                  key={s.slug}
                  href={`/${s.slug}/`}
                  className="text-sm font-light text-brand-light/65 hover:text-brand-accent"
                >
                  {s.nombre}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3.5">
            <h3 className="font-label text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-light/45">
              Explorar
            </h3>
            <nav className="flex flex-col gap-2.5">
              {explorar.map((e) => (
                <a
                  key={e.href}
                  href={e.href}
                  className="text-sm font-light text-brand-light/65 hover:text-brand-accent"
                >
                  {e.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3.5">
            <h3 className="font-label text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-light/45">
              Síguenos
            </h3>
            <div className="flex gap-3">
              {redes.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  aria-label={r.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent/8 text-brand-accent transition-all duration-300 hover:bg-brand-accent/18 [&_svg]:h-4.5 [&_svg]:w-4.5 [&_svg]:fill-current"
                  dangerouslySetInnerHTML={{ __html: r.icon }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-brand-light/8 pt-6">
          <span className="text-xs font-light text-brand-light/40">
            © {year} {sitio.nombreCorto} — {sitio.eslogan}. Sitio de demostración con datos ficticios.
          </span>
          <span className="text-xs font-light text-brand-light/40">Hecho en Jalisco</span>
        </div>
      </div>
    </footer>
  );
}
