import type { PublicacionInstagram } from './types';
import { ID, foto } from './fotos';

/** Feed simulado: exactamente seis publicaciones, para que la rejilla 3x2 quede llena. */
export const publicacionesInstagram: PublicacionInstagram[] = [
  foto(ID.guantesNegros, 'Publicación: guantes de box', 600, 600),
  foto(ID.boxeando, 'Publicación: trabajo de técnica', 600, 600),
  foto(ID.costales, 'Publicación: fila de costales', 600, 600),
  foto(ID.ringHombre, 'Publicación: dentro del ring', 600, 600),
  foto(ID.guantesRojos, 'Publicación: guantes del grupo infantil', 600, 600),
  foto(ID.mancuerna, 'Publicación: acondicionamiento', 600, 600),
];
