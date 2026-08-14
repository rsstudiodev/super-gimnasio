import type { Sitio } from './types';

/** Datos de identidad. Ficticios: cámbialos en un solo lugar. */
export const sitio: Sitio = {
  nombre: 'Super Gimnasio — Escuela de Box',
  nombreCorto: 'Super Gimnasio',
  marcaIniciales: 'SG',
  eslogan: 'Escuela de box',
  ciudad: 'Zapopan, Jalisco',
  direccion: 'Av. Ejemplo 1240, Col. Demostración, 45000 Zapopan, Jalisco',
  telefonoLlamadas: '33 0000 0000',
  telefonoWhatsapp: '522206315612',
  mensajeWhatsapp: 'Vi su página demo y me interesa trabajar con ustedes! ¿Me dan más información?',
  horarioAtencion: 'Lun a sáb, 6:00 a 22:00 h',
  instagram: {
    usuario: '@supergimnasio.box',
    publicaciones: '248 publicaciones',
    seguidores: '4,120 seguidores',
  },
  redes: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    tiktok: 'https://tiktok.com/',
  },
};

/** Enlace de WhatsApp ya armado, para reusar en todos los CTA. */
export const whatsappUrl = `https://wa.me/${sitio.telefonoWhatsapp}?text=${encodeURIComponent(sitio.mensajeWhatsapp)}`;
