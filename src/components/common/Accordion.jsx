export default function Accordion({ items }) {
  return (
    <div className="flex w-full max-w-3xl flex-col gap-3">
      {items.map((item) => (
        <details
          key={item.pregunta}
          className="group overflow-hidden rounded-2xl border border-brand-accent/14 bg-brand-surface"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5.5 font-label text-lg font-bold text-brand-light transition-colors duration-300 group-hover:text-brand-accent">
            {item.pregunta}
            <span className="shrink-0 text-xl text-brand-accent transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="px-6 pb-5.5 text-base font-light leading-relaxed text-brand-light/70">
            {item.respuesta}
          </p>
        </details>
      ))}
    </div>
  );
}
