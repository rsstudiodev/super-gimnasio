export default function ImageCard({ src, alt, className = '' }) {
  return (
    <figure
      className={`gsap-reveal-card m-0 overflow-hidden rounded-2xl border border-brand-accent/14 bg-brand-surface transition-all duration-300 hover:border-brand-accent/35 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="block h-64 w-full object-cover saturate-60 brightness-85 transition-transform duration-500 hover:scale-105"
      />
    </figure>
  );
}
