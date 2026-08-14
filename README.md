# Super Gimnasio — Escuela de Box

Landing de un estudio de box ficticio (sitio de demostración). Construido con [Astro](https://astro.build), React para las islas interactivas, Tailwind CSS v4 y GSAP para el reveal en scroll. Todo el contenido es inventado.

## Requisitos

- Node.js 22.12 o superior
- npm

## Arranque

```sh
npm install
npm run dev
```

El sitio queda disponible en [http://localhost:4321](http://localhost:4321).

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Levanta el servidor de desarrollo. |
| `npm run build` | Genera el build de producción en `dist/`. |
| `npm run preview` | Sirve el build de producción en local. |
| `npm run astro -- <comando>` | Ejecuta la CLI de Astro directamente. |

## Estructura del proyecto

```text
/
├── src/
│   ├── assets/external/    Iconos SVG locales (Instagram, Facebook, TikTok, WhatsApp)
│   ├── components/         Header, Footer, Whatsapp, common/, index/, ServicePage.astro
│   ├── content/             Todo el contenido tipado del sitio (sitio.ts, servicios.ts, ...)
│   ├── layouts/Layout.astro Shell del documento + Header/Footer/CTA
│   ├── pages/               index.astro + 3 subpáginas de servicio
│   ├── scripts/              Animación de reveal con GSAP
│   └── styles/global.css    Tokens de tema (@theme) y estilos globales
└── astro.config.mjs
```

## Reglas fijas del sitio

- Un solo tema: oscuro. Sin toggle claro/oscuro.
- Un solo idioma: español. Sin selector de idioma ni rutas por locale.
- Sin formularios de contacto: todo va a WhatsApp (`wa.me`) o teléfono.
- Todo el contenido vive en `src/content/*.ts`, tipado — no se transcribe copy a mano en los componentes.
- Todo el estilo se expresa en clases de Tailwind y tokens `@theme`; nada de hex crudos en componentes.

Detalle completo de la implementación en `claude-design/ASTRO_IMPLEMENTACION.md` y `claude-design/CLAUDE.md`.

## Estilos

Los estilos globales se cargan desde `src/layouts/Layout.astro`:

- `src/styles/global.css` define los tokens `@theme` (`--color-brand-*`, `--font-*`) y las fuentes (Archivo, Barlow vía Google Fonts).

## Integraciones incluidas

- [React](https://docs.astro.build/en/guides/integrations-guide/react/) para componentes interactivos
- [Tailwind CSS](https://tailwindcss.com/) v4 para estilos
- [Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Partytown](https://docs.astro.build/en/guides/integrations-guide/partytown/) para scripts de terceros
- [GSAP](https://gsap.com/) para la animación de reveal (`src/scripts/cardAnimation.ts`)
- [react-fast-marquee](https://www.react-fast-marquee.com/) para el carrusel de reseñas
- [@heroicons/react](https://heroicons.com/) para los iconos de la sección de ubicación

## Documentación

- [Documentación de Astro](https://docs.astro.build)
- [Guía de rutas de Astro](https://docs.astro.build/en/guides/routing/)
- [Guía de estilos de Astro](https://docs.astro.build/en/guides/styling/)
