import Marquee from 'react-fast-marquee';
import { resenas } from '../../content/resenas';

export default function Reviews() {
  return (
    <section id="resenas" className="flex w-full scroll-mt-24 flex-col items-center py-20">
      <div className="mx-auto mb-12 max-w-3xl px-5 text-center md:px-6">
        <h2 className="font-label text-[clamp(30px,5vw,50px)] font-extrabold uppercase leading-tight tracking-tight text-brand-light">
          Lo que dicen
        </h2>
        <p className="mt-4 text-lg font-light text-brand-light/65">
          Testimonios de ejemplo para esta demostración.
        </p>
      </div>
      <Marquee autoFill pauseOnHover gradient={false} speed={40}>
        {resenas.map((r) => (
          <article
            key={r.autor}
            className="mx-2.5 flex w-[340px] flex-col gap-3.5 rounded-2xl border border-brand-accent/14 bg-brand-surface px-7 py-6.5 md:rounded-3xl"
          >
            <span className="text-base tracking-widest text-brand-accent">★★★★★</span>
            <p className="m-0 text-base font-light leading-relaxed text-brand-light/75">{r.cita}</p>
            <span className="font-label text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-light/50">
              {r.autor}
            </span>
          </article>
        ))}
      </Marquee>
    </section>
  );
}
