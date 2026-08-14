import type { Foto } from './types';

/**
 * Fotos externas de Unsplash. Estas URLs se usan TAL CUAL en los <img>.
 * Si algún día se autoalojan, se descargan y se convierten a .avif en src/assets/,
 * pero la referencia externa es la entrega oficial.
 */
const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=70`;

export const ID = {
  sparring: '1517438322307-e67111335449',
  boxeando: '1636581563867-1ecab574858f',
  guantesNegros: '1549719386-74dfcbf7dbed',
  guantesRojos: '1561532325-7d5231a2dede',
  guantesGancho: '1633394782368-6e7260566004',
  costales: '1716306886418-f84f6d4c2f3a',
  costalesGym: '1754630591156-ef00f2e0d888',
  ringGuantes: '1716307043003-dbe6a5cc496e',
  ringHombre: '1651707999601-cba87015439c',
  ringSparring: '1545507268-27d6d8354f41',
  mancuerna: '1581009146145-b5ef050c2e1e',
  sacosPiso: '1557564437-0995702f88fc',
  banca: '1696563996353-214a3690bb11',
  asistenteGym: '1548690312-e3b507d8c110',
  entrenadorJoven: '1611672585731-fa10603fb9e0',
  preparador: '1584466977773-e625c37cdd50',
} as const;

export const foto = (id: string, alt: string, w = 800, h = 600): Foto => ({
  url: unsplash(id, w, h),
  alt,
});

/** Hero de la portada. */
export const fotoHero: Foto = foto(ID.sparring, 'Entrenamiento de box', 1600, 1000);

/** Foto del ring que acompaña la sección de ubicación. */
export const fotoUbicacion: Foto = foto(ID.ringSparring, 'Ring de box del gimnasio', 700, 900);

/** Galería de la portada: seis fotos. */
export const galeriaPortada: Foto[] = [
  foto(ID.guantesNegros, 'Guantes listos antes de la clase'),
  foto(ID.costales, 'Fila de costales'),
  foto(ID.ringGuantes, 'Ring del gimnasio'),
  foto(ID.guantesGancho, 'Guantes colgados'),
  foto(ID.ringHombre, 'Trabajo dentro del ring'),
  foto(ID.costalesGym, 'Zona de costales del gimnasio'),
];
