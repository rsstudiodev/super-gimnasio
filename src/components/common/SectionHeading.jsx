export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <h2 className="font-label text-[clamp(30px,5vw,50px)] font-extrabold uppercase leading-tight tracking-tight text-brand-light">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg font-light text-brand-light/65">{subtitle}</p>
      )}
    </div>
  );
}
