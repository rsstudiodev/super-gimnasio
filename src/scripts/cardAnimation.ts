import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initCardAnimation() {
  if (typeof window === 'undefined') return () => {};
  gsap.registerPlugin(ScrollTrigger);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cards = gsap.utils.toArray<HTMLElement>('.gsap-reveal-card');

  if (reduced || cards.length === 0) {
    return () => {};
  }

  const triggers = cards.map((card) =>
    gsap.fromTo(
      card,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          once: true,
        },
      },
    ),
  );

  return () => {
    triggers.forEach((tween) => tween.scrollTrigger?.kill());
  };
}
