# Imágenes — mapeo exacto

**Todas las fotos son URLs externas de Unsplash y se usan tal cual** (`<img src="https://images.unsplash.com/...">`).
No hay que descargarlas ni pasarlas por `<Image>` de Astro: no son assets locales.
Las URLs viven en `src/content/fotos.ts` (constante `ID` + helper `foto()`); si una sección necesita
otro tamaño, se cambia el `w`/`h` del helper, nunca la URL a mano.

Formato de la URL: `https://images.unsplash.com/photo-<ID>?auto=format&fit=crop&w=<W>&h=<H>&q=70`

| Sección | Clave en `ID` | ID de Unsplash | Tamaño | Alt |
| --- | --- | --- | --- | --- |
| Hero portada | `sparring` | `1517438322307-e67111335449` | 1600×1000 | Entrenamiento de box |
| Servicio · principiantes (tarjeta + hero subpágina) | `boxeando` | `1636581563867-1ecab574858f` | 1200×800 | Box para principiantes |
| Servicio · niños | `guantesRojos` | `1561532325-7d5231a2dede` | 1200×800 | Clases de box para niños |
| Servicio · acondicionamiento | `mancuerna` | `1581009146145-b5ef050c2e1e` | 1200×800 | Acondicionamiento y fuerza |
| Galería 1 | `guantesNegros` | `1549719386-74dfcbf7dbed` | 800×600 | Guantes listos antes de la clase |
| Galería 2 | `costales` | `1716306886418-f84f6d4c2f3a` | 800×600 | Fila de costales |
| Galería 3 | `ringGuantes` | `1716307043003-dbe6a5cc496e` | 800×600 | Ring del gimnasio |
| Galería 4 | `guantesGancho` | `1633394782368-6e7260566004` | 800×600 | Guantes colgados |
| Galería 5 | `ringHombre` | `1651707999601-cba87015439c` | 800×600 | Trabajo dentro del ring |
| Galería 6 | `costalesGym` | `1754630591156-ef00f2e0d888` | 800×600 | Zona de costales del gimnasio |
| Entrenadora · Marisol | `asistenteGym` | `1548690312-e3b507d8c110` | 700×800 | Marisol Vega |
| Entrenador · Tomás | `entrenadorJoven` | `1611672585731-fa10603fb9e0` | 700×800 | Tomás Iriarte |
| Entrenador · Néstor | `preparador` | `1584466977773-e625c37cdd50` | 700×800 | Néstor Aguilar |
| Ubicación (ring) | `ringSparring` | `1545507268-27d6d8354f41` | 700×900 | Ring de box del gimnasio |
| Acondicionamiento · galería | `sacosPiso`, `banca` | `1557564437-0995702f88fc`, `1696563996353-214a3690bb11` | 800×600 | Material / interior |

## Tratamiento

- Toda foto de contenido: `saturate-60 brightness-85`.
- Fotos de tarjeta de servicio y del feed: `hover:scale-105` (feed `hover:scale-106`) con `transition`.
- Heroes: la foto lleva máscara de desvanecido (ver §Hero en `ASTRO_IMPLEMENTACION.md`).

## Iconos (sí son archivos locales)

Ya están en el proyecto, copiados de `Ricsasa/lumina-landing`:

- `src/assets/external/instagram.svg` — footer y cabecera del feed
- `src/assets/external/facebook.svg` — footer
- `src/assets/external/tiktok.svg` — footer
- `src/assets/external/whatsapp-white.svg` — CTA flotante y botones "Empezar" de membresías

Pin, teléfono y transporte de la sección de ubicación: heroicons outline 24 (`map-pin`, `phone`,
`building-storefront`) a `stroke-width: 1.5`, vía `@heroicons/react` o `astro-heroicons`.
No dibujar iconos a mano ni usar glifos de texto.
