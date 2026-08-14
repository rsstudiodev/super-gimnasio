repo: Ricsasa/lumina-landing
branch: main

## Last sync
date: 2026-08-14T21:36:48Z

### Updated in this project
- Leído el contrato de diseño y tokens de `src/styles/global.css`.
- Recreados los patrones de Header (drawer), Gallery, Location y Footer para una nueva marca ficticia.
- Nueva landing de estudio de box en paleta oscura + acento ámbar, sin reusar copy del repo.
- Copiados los iconos sociales y de WhatsApp desde `src/assets/external/`.

## Screen map
| Pantalla del proyecto | Archivos del repo |
| --- | --- |
| Super Gimnasio Box.dc.html — header + drawer | src/components/Header.jsx |
| Super Gimnasio Box.dc.html — secciones y encabezados | src/components/common/SectionHeading.jsx, src/styles/global.css |
| Super Gimnasio Box.dc.html — galería | src/components/index/Gallery.jsx, src/components/common/ImageCard.jsx, src/components/common/Slider.jsx |
| Super Gimnasio Box.dc.html — ubicación | src/components/index/Location.jsx |
| Super Gimnasio Box.dc.html — footer | src/components/FooterSubpage.jsx |
| Super Gimnasio Box.dc.html — CTA flotante | src/components/Whatsapp.jsx, src/assets/external/whatsapp-white.svg |
| Super Gimnasio Box.dc.html — iconos sociales | src/assets/external/instagram.svg, facebook.svg, tiktok.svg |
| Super Gimnasio Box.dc.html — reveal / animación | src/scripts/cardAnimation.ts |
| ASTRO_IMPLEMENTACION.md | uploads/DESIGN_SYSTEM.md, package.json |
