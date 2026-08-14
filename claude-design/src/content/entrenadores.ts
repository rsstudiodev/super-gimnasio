import type { Entrenador } from './types';
import { ID, foto } from './fotos';

export const entrenadores: Entrenador[] = [
  {
    nombre: 'Marisol Vega',
    rol: 'Dirección técnica',
    bio: 'Doce años de amateur y ocho enseñando. Lleva los grupos de principiantes y la evaluación por niveles.',
    foto: foto(ID.asistenteGym, 'Marisol Vega', 700, 800),
  },
  {
    nombre: 'Tomás Iriarte',
    rol: 'Infantil',
    bio: 'Profesor de educación física. Diseñó el programa de 6 a 14 años y el reporte mensual para familias.',
    foto: foto(ID.entrenadorJoven, 'Tomás Iriarte', 700, 800),
  },
  {
    nombre: 'Néstor Aguilar',
    rol: 'Fuerza y condición',
    bio: 'Preparador físico. Arma los circuitos de la mañana y las sesiones uno a uno.',
    foto: foto(ID.preparador, 'Néstor Aguilar', 700, 800),
  },
];
