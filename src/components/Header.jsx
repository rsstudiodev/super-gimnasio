import { useState } from 'react';
import { servicios } from '../content/servicios';
import { sitio } from '../content/sitio';

const anchors = [
  { href: '/#servicios', label: 'Qué ofrecemos' },
  { href: '/#horarios', label: 'Horarios' },
  { href: '/#galeria', label: 'Galería' },
  { href: '/#instagram', label: 'Instagram' },
  { href: '/#entrenadores', label: 'Entrenadores' },
  { href: '/#precios', label: 'Membresías' },
  { href: '/#resenas', label: 'Reseñas' },
  { href: '/#ubicacion', label: 'Ubicación' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-100 w-full h-20 backdrop-blur-3xl bg-brand-dark/70 border-b border-brand-light/8">
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-5 md:px-6">
          <a href="/#top" className="flex items-center gap-3 text-brand-light">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-accent/45 font-label text-base font-extrabold tracking-tight text-brand-accent">
              {sitio.marcaIniciales}
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-label text-sm font-extrabold uppercase tracking-widest text-brand-light">
                {sitio.nombreCorto}
              </span>
              <span className="font-body text-[11px] uppercase tracking-[0.28em] text-brand-muted">
                {sitio.eslogan}
              </span>
            </span>
          </a>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent/12 px-5.5 py-2.75 font-label text-sm font-semibold uppercase tracking-[0.14em] text-brand-accent transition-all duration-300 hover:bg-brand-accent/22"
          >
            Menú
          </button>
        </div>
      </header>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-110 bg-black/60"
          />
          <aside className="fixed top-0 right-0 z-120 flex h-full w-full flex-col rounded-l-4xl border-l border-brand-light/10 bg-brand-surface sm:w-[440px]">
            <div className="flex items-center justify-end border-b border-brand-light/8 px-7 py-5">
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="flex h-13 w-13 items-center justify-center rounded-full bg-brand-accent/8 text-xl text-brand-accent transition-all duration-300 hover:bg-brand-accent/18"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-7">
              <h2 className="mb-3.5 font-label text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/45">
                Clases
              </h2>
              <nav className="flex flex-col gap-0.5">
                {servicios.map((s) => (
                  <a
                    key={s.slug}
                    href={`/super-gimnasio/${s.slug}/`}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 font-label text-2xl font-bold tracking-tight text-brand-light transition-all duration-300 hover:bg-brand-accent/10 hover:text-brand-accent"
                  >
                    {s.nombre}
                  </a>
                ))}
              </nav>
              <hr className="my-6 border-brand-light/10" />
              <nav className="flex flex-col gap-0.5">
                {anchors.map((a) => (
                  <a
                    key={a.href}
                    href={`/super-gimnasio/${a.href}`}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-2.5 font-label text-xl font-semibold text-brand-light transition-all duration-300 hover:bg-brand-accent/8 hover:text-brand-accent"
                  >
                    {a.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
