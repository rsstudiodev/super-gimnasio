# Instrucciones del proyecto — Página estudio de box

- **Stack**: Astro + Tailwind CSS v4. Todo el estilo se expresa en clases de Tailwind y tokens `@theme`
  (`--color-brand-*`, `--font-*`); nada de CSS suelto ni hex crudos en componentes.
- **Un solo tema: oscuro.** No hay toggle claro/oscuro, no se usa `@custom-variant dark` ni variantes
  `dark:`, y el header/drawer no lleva botón de sol/luna.
- **Un solo idioma: español.** No es un sitio multi-idioma: no hay selector de idioma, ni archivos de
  traducción, ni rutas por locale.
- **Sin formularios de contacto.** Todo contacto es por WhatsApp (`wa.me`) o teléfono.
- Contenido ficticio de demostración (nombre, precios, dirección, reseñas, entrenadores).
- La referencia estructural es `Ricsasa/lumina-landing` + `uploads/DESIGN_SYSTEM.md`; la paleta es
  oscura con acento ámbar `#e0a33c`.
- Lenguaje sencillo y directo en el código y en las notas: se implementará con Claude Code.
