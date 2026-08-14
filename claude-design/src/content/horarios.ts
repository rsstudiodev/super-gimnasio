import type { ClaseTabla, FilaTabla } from './types';

/** Color de cada clase en la tabla y en la leyenda. Tokens, no hex. */
export const colorClase: Record<ClaseTabla, string> = {
  principiantes: 'text-brand-accent',
  ninos: 'text-brand-kids',
  acondicionamiento: 'text-brand-light/80',
  libre: 'text-brand-light/30',
};

export const diasSemana = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'] as const;

const c = (etiqueta: string, clase: ClaseTabla) => ({ etiqueta, clase });
const libre = c('—', 'libre');
const acond = c('Acond.', 'acondicionamiento');
const princ = c('Princip.', 'principiantes');

export const tablaSemanal: FilaTabla[] = [
  { hora: '06:00', celdas: [acond, acond, acond, acond, acond, acond, acond] },
  { hora: '07:00', celdas: [princ, libre, princ, libre, princ, princ, libre] },
  {
    hora: '16:00',
    celdas: [
      c('Niños 6-9', 'ninos'),
      c('Niños 10-14', 'ninos'),
      c('Niños 6-9', 'ninos'),
      c('Niños 10-14', 'ninos'),
      c('Niños 6-9', 'ninos'),
      c('Niños mixto', 'ninos'),
      libre,
    ],
  },
  { hora: '18:00', celdas: [princ, princ, princ, princ, princ, libre, libre] },
  { hora: '20:00', celdas: [acond, princ, acond, princ, acond, libre, libre] },
];

export const leyendaHorarios = [
  { etiqueta: 'Principiantes', clase: 'principiantes' as ClaseTabla },
  { etiqueta: 'Niños', clase: 'ninos' as ClaseTabla },
  { etiqueta: 'Acondicionamiento', clase: 'acondicionamiento' as ClaseTabla },
];
