import type { Membresia } from './types';

export const membresias: Membresia[] = [
  {
    nombre: 'Visita',
    precio: '$130',
    unidad: '/ clase',
    distintivo: 'Sin ataduras',
    destacada: false,
    incluye: [
      'Una clase de cualquier grupo',
      'Guantes y vendas prestados',
      'Válida el mismo día',
      'Sin inscripción',
    ],
  },
  {
    nombre: 'Mensual',
    precio: '$890',
    unidad: '/ mes',
    distintivo: 'Más elegido',
    destacada: true,
    incluye: [
      'Clases ilimitadas, todos los grupos',
      'Evaluación de nivel cada mes',
      'Acceso a área de fuerza',
      'Cancelas cuando quieras',
    ],
  },
  {
    nombre: 'Anual',
    precio: '$8,900',
    unidad: '/ año',
    distintivo: 'Dos meses libres',
    destacada: false,
    incluye: [
      'Todo lo del plan mensual',
      'Dos meses sin costo',
      'Vendas y playera del club',
      'Una sesión 1:1 al mes',
    ],
  },
];
