# Checklist de entrega

Revisa esto antes de dar por terminada la implementación.

## Reglas fijas
- [ ] Cero clases `dark:` y cero `@custom-variant dark` en todo el repo.
- [ ] Cero `<form>`, `<input>` y `<textarea>`: todo contacto va a `wa.me` o `tel:`.
- [ ] Cero selector de idioma, cero rutas por locale. `<html lang="es">`.
- [ ] Cero hex crudos en componentes: todo sale de `@theme` (`brand-dark`, `brand-surface`,
      `brand-accent`, `brand-muted`, `brand-light`, `brand-kids`, `brand-cta`).
- [ ] Cero px sueltos donde exista utilidad de Tailwind.

## Portada (en este orden)
- [ ] Hero → Servicios → Horarios → Galería → Instagram → Entrenadores → Membresías → Reseñas → Ubicación → Footer.
- [ ] Hero: foto con máscara de desvanecido + degradado al negro + halo ámbar radial.
- [ ] Servicios: 3 tarjetas, cada una enlaza a su subpágina.
- [ ] Horarios: tabla de 7 días con `overflow-x-auto` y leyenda de tres colores.
- [ ] Galería: 6 fotos.
- [ ] Instagram: rejilla fija de 3 columnas (3×2), nunca `auto-fit`.
- [ ] Entrenadores: 3 tarjetas.
- [ ] Membresías: 3 planes, "Mensual" destacado; los tres botones "Empezar" llevan icono de WhatsApp
      y abren `wa.me`.
- [ ] Reseñas: marquee con `autoFill` y `pauseOnHover`; el padding vive en los hijos, no en el `<section>`.
- [ ] Ubicación: foto del ring + tres bloques de datos + tarjeta de mapa al final.

## Subpáginas (3)
- [ ] `/box-principiantes/`, `/clases-para-ninos/`, `/acondicionamiento/`.
- [ ] Cada una: hero con el mismo tratamiento → Horarios → Precios → Galería → FAQ → botón "Volver al inicio".
- [ ] **Sin** menú interno sticky (se quitó a propósito).

## Chrome global
- [ ] Header fijo `h-20` con blur; a la derecha solo el botón "Menú".
- [ ] Drawer derecho con las 3 clases + los anclajes de la portada; **sin** botón de tema.
- [ ] Footer de 4 columnas con iconos sociales reales (SVG) y el año calculado.
- [ ] CTA flotante de WhatsApp abajo a la derecha.

## Móvil (probar a 390px)
- [ ] Todo en una columna, sin scroll horizontal en la página.
- [ ] La tabla de horarios es lo único que hace scroll lateral, dentro de su tarjeta.
- [ ] Ningún área táctil por debajo de 44px.
