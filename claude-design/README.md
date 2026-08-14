# Super Gimnasio — Escuela de Box (sitio de demostración)

Landing de un estudio de box ficticio, para mostrar de qué somos capaces. Se implementa en
**Astro + Tailwind CSS v4**. Todo el contenido es inventado.

## Por dónde empezar (en este orden)

1. `CLAUDE.md` — reglas fijas del proyecto. Si algo aquí las contradice, mandan las reglas.
2. `ASTRO_IMPLEMENTACION.md` — el plan completo: tokens, contrato de estilo, archivos y detalle
   sección por sección.
3. `IMAGENES.md` — de dónde sale cada foto. Son URLs externas y se usan tal cual.
4. `src/content/*.ts` — el contenido ya tipado. No transcribas copy: impórtalo.
5. `Super Gimnasio Box.dc.html` — referencia visual. Ábrelo en el navegador y compara mientras avanzas.
6. `CHECKLIST.md` — repásalo antes de decir que terminaste.

## Arranque

```sh
npm create astro@latest -- --template minimal .
npm install tailwindcss @tailwindcss/vite @astrojs/react react react-dom react-fast-marquee @heroicons/react gsap
```

En `astro.config.mjs`: integración de React y el plugin de Vite de Tailwind.
Luego crea `src/styles/global.css` con el bloque `@theme` de `ASTRO_IMPLEMENTACION.md` §1
e impórtalo desde `Layout.astro`.

```sh
npm run dev      # localhost:4321
npm run build
```

## Orden de trabajo sugerido

1. `global.css` con los tokens y las dos fuentes. Verifica que `bg-brand-dark` y `font-label` respondan.
2. `Layout.astro` + `Header` (con drawer) + `Footer` + CTA flotante de WhatsApp. Con esto ya se navega.
3. La portada, sección por sección, en el orden del plan. Después de cada una, compara con la referencia.
4. Las tres subpáginas de servicio (una sola plantilla que lee el `slug`).
5. La animación de reveal con GSAP al final, cuando el layout ya no se mueve.
6. `CHECKLIST.md`.

## Estructura

```
src/content/     contenido tipado (no lo recrees)
src/assets/external/   4 SVG de iconos (Instagram, Facebook, TikTok, WhatsApp)
src/layouts/     Layout.astro
src/components/  Header, Footer, Whatsapp, common/, index/
src/pages/       index + 3 subpáginas
public/fonts/    Archivo y Barlow
```

## Lo que este sitio NO tiene

Sin tema claro, sin toggle de tema, sin segundo idioma, sin formularios de contacto,
sin menú interno sticky en las subpáginas, sin CMS. Si algo de esto parece hacer falta, no lo agregues.
