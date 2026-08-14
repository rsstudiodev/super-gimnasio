# Notas de implementación — Super Gimnasio (Astro + Tailwind v4)

Diseño de referencia: `Super Gimnasio Box.dc.html`. Todo el contenido es ficticio (demo).
Sigue el contrato de `uploads/DESIGN_SYSTEM.md` y la estructura de `Ricsasa/lumina-landing`.

Otros documentos de esta entrega:

- `CLAUDE.md` — las reglas fijas del proyecto (léelo primero).
- `src/content/*.ts` — **todo el contenido, ya tipado**. No transcribas copy a mano: impórtalo.
- `IMAGENES.md` — mapeo sección → URL de Unsplash → alt → tamaño. Las URLs son externas y se usan tal cual.
- `CHECKLIST.md` — verificación final.

## 0. Reglas fijas del proyecto

- Astro + **Tailwind CSS v4**: todo el estilo en clases de Tailwind y tokens `@theme`. Nada de CSS
  suelto ni hex crudos dentro de los componentes.
- **Solo tema oscuro**: sin toggle claro/oscuro, sin `@custom-variant dark`, sin variantes `dark:`,
  y el drawer no lleva botón de sol/luna.
- **Un solo idioma (español)**: no es sitio multi-idioma — sin selector, sin archivos de traducción,
  sin rutas por locale. `<html lang="es">`.
- **Sin formularios de contacto**: todo va a WhatsApp (`wa.me`) o teléfono.

## 1. Tokens (`src/styles/global.css`)

Solo tema oscuro. No hay toggle claro/oscuro: no uses `@custom-variant dark` ni clases `dark:`,
ni el script de tema en el `<head>`.

```css
@import "tailwindcss";

@font-face {
  font-family: 'Archivo';
  src: url('/fonts/Archivo-Bold.woff2') format('woff2');
  font-weight: 700 800;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Barlow';
  src: url('/fonts/Barlow-Regular.woff2') format('woff2');
  font-weight: 300 500;
  font-style: normal;
  font-display: swap;
}

@theme {
  --color-brand-dark: #0d0d0f;      /* fondo base de la página */
  --color-brand-surface: #16161a;   /* tarjetas, footer, drawer */
  --color-brand-accent: #e0a33c;    /* ámbar: CTA, links, iconos, cifras */
  --color-brand-muted: #9a9aa2;     /* texto secundario */
  --color-brand-light: #f4f2ee;     /* texto principal */
  --color-brand-kids: #8fb0d8;      /* solo la clase infantil en la tabla */
  --color-brand-cta: #25d366;       /* WhatsApp, no cambia con la paleta */

  --font-label: 'Archivo', sans-serif;  /* títulos, nav, botones, cifras */
  --font-body: 'Barlow', sans-serif;    /* párrafos y textos de apoyo */
}

body {
  @apply bg-brand-dark text-brand-light font-body antialiased;
}

a {
  @apply text-brand-accent transition-colors duration-300;
}

a:hover {
  @apply text-brand-accent/80;
}
```

**Respeta esta nomenclatura tal cual** — nada de `--color-primary`, `--color-gold` ni nombres nuevos.
Si hace falta un tono intermedio, se usa una opacidad del token existente
(`bg-brand-accent/10`, `text-brand-light/65`), nunca un hex nuevo.
Las opacidades en uso son `/5 /8 /10 /14 /20 /30 /35 /45 /50 /55 /65 /72`.

## 2. Contrato de estilo (igual que el repo original)

```
Sección          flex flex-col items-center px-5 md:px-6 py-20 w-full
Anchor           scroll-mt-24 (todas las páginas: solo hay header fijo)
Ancho            max-w-6xl grids · max-w-5xl prose+imagen · max-w-3xl acordeón
Tarjeta          bg-brand-surface rounded-2xl md:rounded-3xl
Bloque interno   rounded-2xl
Control          rounded-full
Borde            border-brand-accent/14
Borde hover      hover:border-brand-accent/35
Elevación        shadow-sm hover:shadow-md
Transición       transition-all duration-300
Foco             focus:outline-none focus:ring-2 focus:ring-brand-accent/50
Fotos            saturate-60 brightness-85 en todas las imágenes
Títulos          font-label uppercase tracking-tight
```

## 3. Archivos a crear

```
src/layouts/Layout.astro          shell + <head> SEO + Header/Footer/CTA flotante
src/components/Header.jsx         barra fija + drawer derecho (client:load)
src/components/Footer.jsx         4 columnas + barra inferior (client:load)
src/components/Whatsapp.jsx       botón flotante (client:load)
src/components/common/SectionHeading.jsx
src/components/common/ImageCard.jsx
src/components/common/Accordion.jsx      <details>/<summary>, "+" que gira 45°
src/components/index/Hero.astro
src/components/index/Services.astro      grid de 3 tarjetas
src/components/index/Schedule.astro      tabla semanal, overflow-x-auto
src/components/index/Gallery.astro
src/components/index/InstagramFeed.astro rejilla 3x2 del feed simulado
src/components/index/Trainers.astro
src/components/index/Pricing.astro       3 planes, "Mensual" destacado
src/components/index/Reviews.jsx         react-fast-marquee (client:only="react")
src/components/index/Location.jsx        foto del ring + datos + tarjeta de mapa
src/components/index/MapCard.astro       mapa ficticio con degradados CSS
src/pages/index.astro
src/pages/box-principiantes.astro
src/pages/clases-para-ninos.astro
src/pages/acondicionamiento.astro
```

Ya existentes en la entrega, **no los recrees**:

```
src/content/types.ts          tipos de todo el contenido
src/content/sitio.ts          identidad, teléfonos, dirección, whatsappUrl
src/content/fotos.ts          IDs y helper de las URLs de Unsplash
src/content/servicios.ts      3 servicios con horarios, precios, galería y FAQ
src/content/horarios.ts       tabla semanal + leyenda
src/content/entrenadores.ts   3 entrenadores
src/content/membresias.ts     3 planes
src/content/resenas.ts        6 reseñas
src/content/instagram.ts      6 publicaciones
src/assets/external/*.svg     iconos de Instagram, Facebook, TikTok y WhatsApp
```

Orden de la home: **Hero → Servicios → Horarios → Galería → Instagram → Entrenadores → Membresías → Reseñas → Ubicación** + footer global.

## 4. Detalles por sección

- **Header**: `fixed top-0 z-100 w-full backdrop-blur-3xl` sobre `bg-brand-dark/70`, alto `h-20`.
  Marca a la izquierda (círculo con "SG" + wordmark en dos líneas), un solo botón pill "Menú" a la derecha.
  El drawer entra desde la derecha: `fixed top-0 right-0 h-full w-full sm:w-[440px]`,
  `translate-x-full` → `translate-x-0`, overlay `bg-black/60` aparte del nav (para no heredar el blur),
  esquinas `rounded-l-4xl`. Dentro: eyebrow "Clases" + 3 links a subpáginas, `<hr>`, y los anchors de la home.
  Como no hay toggle de tema, el drawer solo lleva el botón de cerrar.
- **Hero** (home y subpáginas, mismo patrón): `min-h-svh` en la home, `min-h-[56svh]` en subpáginas.
  Foto de fondo `absolute inset-0 object-cover` con tres capas encima, en este orden:
  1. la foto con `mask-image: linear-gradient(180deg,#000 0,#000 46%,rgba(0,0,0,.35) 78%,transparent)`
     — así la imagen se desvanece sola al final del hero (incluye el prefijo `-webkit-mask-image`);
  2. un degradado vertical `rgba(13,13,15,.55) → .35 → .85 → #0d0d0f` para legibilidad y remate;
  3. un `radial-gradient(120% 70% at 50% 18%, rgba(224,163,60,.16), transparent 62%)` que da el
     halo ámbar detrás del titular.
  Encima: badge del CTA, titular fijo (sin rotación GSAP), párrafo, dos botones y tres cifras.
  En subpáginas es el mismo stack con la foto del servicio.
- **Servicios**: `grid grid-cols-1 md:grid-cols-3 gap-6`. Imagen arriba (h-56, `hover:scale-105`)
  con degradado al color de la tarjeta, kicker, título, texto, pill "Ver clase →" que va a la subpágina.
- **Horarios**: tabla `min-w-[760px]` dentro de `overflow-x-auto` (así funciona en móvil).
  Header con `bg-brand-accent/8`, filas separadas con `border-t border-brand-light/8`.
  Leyenda de colores debajo: ámbar = principiantes, `brand-kids` = niños, hueso = acondicionamiento
  (los colores por clase salen de `colorClase` en `src/content/horarios.ts`).
- **Galería**: `grid-cols-2 md:grid-cols-3 gap-5`, figuras `h-64 object-cover`.
  Aquí no hay before/after (no aplica al box), así que usa solo `ImageCard`.
- **Instagram** (`#instagram`, va entre Galería y Entrenadores): tarjeta que simula un feed incrustado.
  Cabecera con avatar circular con borde ámbar, `@usuario`, conteo de publicaciones/seguidores y botón
  sólido "Seguir"; luego un `grid grid-cols-3` fijo de 6 celdas cuadradas (3×2 en todos los anchos —
  no uses `auto-fit`, deja filas huérfanas) (`aspect-square`, `gap-[2px]` sobre un fondo
  `bg-brand-light/8` para que las juntas se lean como rejilla), cada imagen con `hover:scale-106` y
  `saturate` que sube al pasar el cursor; pie con la nota y el link al perfil.
  En esta demo el feed es estático: sale de `src/content/instagram.ts` (6 publicaciones).
- **Entrenadores**: 3 tarjetas, foto `h-72`, rol en eyebrow ámbar, nombre y bio corta.
- **Membresías**: 3 tarjetas; la destacada (`destacada: true`) lleva `bg-brand-accent/9`,
  `border-brand-accent/45` y botón sólido ámbar; las otras dos, botón con borde.
  Los tres botones dicen "Empezar", llevan el icono de WhatsApp y abren `whatsappUrl`.
- **Reseñas**: es la única sección con el padding en los hijos, no en el `<section>`,
  para que el marquee sangre de borde a borde. `react-fast-marquee` con `autoFill` y `pauseOnHover`,
  tarjetas de 340px. Sin logo de plataforma: solo estrellas, cita y nombre.
- **Ubicación**: dos columnas (`flex-wrap`): izquierda foto del ring (crossfade GSAP opcional,
  `repeat: -1`), derecha tres bloques `rounded-2xl bg-brand-accent/7` — dirección, teléfono y transporte.
  Debajo, a todo el ancho, la tarjeta del mapa (`MapCard.astro`): mapa ficticio al estilo Google Maps,
  hecho solo con capas absolutas y `background-image` — base beige `#eceae4`, manzanas `#e3e0d8`,
  parque `#cfe3c9`, agua `#dfe9f2`, calles blancas con `box-shadow: 0 0 0 2px #dcd9d1` como bordillo,
  avenida principal `#fbd77f`, y el pin: disco `bg-brand-accent` con borde blanco de 2px, sombra, y
  debajo una etiqueta blanca con el nombre. Pie con la nota y el link "Cómo llegar".
  Sin SVG de mapa y sin iframe: es una representación, no un mapa real.
- **Footer**: 4 columnas (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`): marca+contacto, Clases,
  Explorar, Síguenos (iconos circulares). Barra inferior con el año calculado, no escrito a mano.
- **CTA flotante**: `fixed bottom-6 right-4 md:right-8 z-90`, `bg-brand-cta`, texto "¡Agenda tu clase!",
  link `wa.me` con mensaje pre-cargado. **No hay formularios de contacto en el sitio.**

## 5. Subpáginas de servicio

Una ruta por servicio, con el `slug` de `src/content/servicios.ts`:
`/box-principiantes/`, `/clases-para-ninos/`, `/acondicionamiento/`.

Cada una, en este orden: hero (mismo tratamiento que la home, con `servicio.foto`) → **Horarios**
(rejilla de tarjetas hora + días) → **Precios** (lista de filas nombre/detalle/precio) → **Galería**
(3 fotos) → **Preguntas frecuentes** (`Accordion`) → botón "Volver al inicio".

**No llevan menú interno sticky**: se quitó a propósito, no lo agregues.
Reusan `Layout`, `Header` y `Footer` tal cual.
El FAQ es `Accordion` con `<details>/<summary>` nativo y el "+" que rota 45° al abrir.

## 6. Datos y config

- **Todo el contenido viene de `src/content/*.ts`** (tipado en `types.ts`). No escribas copy, precios,
  horarios ni nombres dentro de los componentes: impórtalos. Si algo falta, agrégalo al archivo de
  contenido con su tipo, no al componente.
- Los datos de contacto salen de `sitio.ts`; para los CTA usa `whatsappUrl` de ese mismo archivo
  (no armes el enlace a mano en cada botón). No hace falta `public/variables.json`.
- `seo` ({ title, description, canonical }) va como prop a `Layout`, nunca fijo dentro del layout.
- Analytics con `type="text/partytown"`.

## 7. Imágenes

Todas las fotos son **URLs externas de Unsplash y se usan tal cual**; están en `src/content/fotos.ts`
y mapeadas una por una en `IMAGENES.md`. No las descargues, no las conviertas a `.avif` y no uses
`<Image>` de Astro con ellas: un `<img>` normal con `loading="lazy"` (salvo el hero, que va `eager`).
Los únicos assets locales son los cuatro SVG de `src/assets/external/`.

## 8. Movimiento

Copia `src/scripts/cardAnimation.ts` del repo original tal cual: una sola función GSAP con ScrollTrigger
que anima todo lo que tenga la clase `.gsap-reveal-card`, respeta `prefers-reduced-motion` y se limpia
al desmontar. Nada de animaciones nuevas fuera de eso y del marquee.
