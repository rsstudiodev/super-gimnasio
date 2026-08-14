import type { Servicio } from './types';
import { ID, foto } from './fotos';

export const servicios: Servicio[] = [
  {
    slug: 'box-principiantes',
    nombre: 'Box para principiantes',
    kicker: 'Desde cero',
    resumen:
      'Ocho semanas para aprender guardia, jab, movimiento y respiración. Sin sparring hasta que tú lo pidas.',
    foto: foto(ID.boxeando, 'Box para principiantes', 1200, 800),
    horarios: [
      { hora: '07:00', dias: 'Lunes, miércoles y viernes' },
      { hora: '18:00', dias: 'Lunes a viernes' },
      { hora: '19:30', dias: 'Martes y jueves' },
      { hora: '09:00', dias: 'Sábado' },
    ],
    precios: [
      { nombre: 'Clase muestra', detalle: 'Primera vez, guantes prestados', precio: '$0' },
      { nombre: 'Mensualidad', detalle: 'Clases ilimitadas del programa', precio: '$890' },
      { nombre: 'Paquete 10 clases', detalle: 'Vigencia de dos meses', precio: '$1,400' },
    ],
    galeria: [
      foto(ID.guantesNegros, 'Guantes de box'),
      foto(ID.ringGuantes, 'Ring del gimnasio'),
      foto(ID.boxeando, 'Trabajo de técnica'),
    ],
    faq: [
      {
        pregunta: '¿Necesito condición física para empezar?',
        respuesta:
          'No. La clase arranca con movilidad y va subiendo según el grupo. Si te falta el aire, paras y sigues cuando puedas.',
      },
      {
        pregunta: '¿Qué llevo el primer día?',
        respuesta:
          'Ropa deportiva, agua y toalla. Guantes y vendas los prestamos las primeras dos semanas.',
      },
      {
        pregunta: '¿Voy a pelear con alguien?',
        respuesta:
          'Solo si quieres y después de varios meses. El sparring es opcional, supervisado y con equipo completo.',
      },
      {
        pregunta: '¿Hay grupos por nivel?',
        respuesta:
          'Sí, tres niveles. Cambias de nivel cuando el entrenador y tú lo ven claro, no por tiempo cumplido.',
      },
    ],
  },
  {
    slug: 'clases-para-ninos',
    nombre: 'Clases para niños',
    kicker: '6 a 14 años',
    resumen:
      'Coordinación, disciplina y juego. Sin contacto en los grupos menores y con reporte para papás cada mes.',
    foto: foto(ID.guantesRojos, 'Clases de box para niños', 1200, 800),
    horarios: [
      { hora: '16:00', dias: 'Lunes, miércoles y viernes (6-9 años)' },
      { hora: '17:00', dias: 'Lunes a viernes (10-14 años)' },
      { hora: '10:00', dias: 'Sábado (grupo mixto)' },
      { hora: '11:30', dias: 'Sábado (avanzados)' },
    ],
    precios: [
      { nombre: 'Clase muestra', detalle: 'Con acompañante en sala', precio: '$0' },
      { nombre: 'Mensualidad', detalle: 'Tres clases por semana', precio: '$690' },
      { nombre: 'Hermanos', detalle: 'Segundo menor, mismo mes', precio: '$490' },
    ],
    galeria: [
      foto(ID.guantesRojos, 'Guantes del grupo infantil'),
      foto(ID.costales, 'Costales del área infantil'),
      foto(ID.costalesGym, 'Zona de costales'),
    ],
    faq: [
      {
        pregunta: '¿Hay contacto en las clases?',
        respuesta:
          'En 6 a 9 años no hay contacto. En 10 a 14 se hace contacto ligero con casco y protector, siempre con entrenador presente.',
      },
      {
        pregunta: '¿Puedo quedarme a ver la clase?',
        respuesta: 'Sí. Hay banca para acompañantes y la primera clase pedimos que te quedes.',
      },
      {
        pregunta: '¿Qué equipo necesita?',
        respuesta:
          'Guantes de 8 oz y vendas cortas. Te decimos qué comprar después de la clase muestra.',
      },
      {
        pregunta: '¿Cómo miden el avance?',
        respuesta:
          'Cada mes se evalúan cuatro puntos: técnica, condición, atención y trato con los compañeros.',
      },
    ],
  },
  {
    slug: 'acondicionamiento',
    nombre: 'Acondicionamiento y fuerza',
    kicker: 'Condición general',
    resumen:
      'Circuitos con costal, cuerda, pesas y trabajo de core. Todo el beneficio del box sin necesidad de recibir un golpe.',
    foto: foto(ID.mancuerna, 'Acondicionamiento y fuerza', 1200, 800),
    horarios: [
      { hora: '06:00', dias: 'Lunes a viernes' },
      { hora: '13:00', dias: 'Martes y jueves' },
      { hora: '20:00', dias: 'Lunes, miércoles y viernes' },
      { hora: '08:00', dias: 'Sábado y domingo' },
    ],
    precios: [
      { nombre: 'Clase suelta', detalle: 'Sin membresía', precio: '$130' },
      { nombre: 'Mensualidad', detalle: 'Acceso ilimitado a circuitos', precio: '$790' },
      { nombre: 'Entrenamiento 1:1', detalle: 'Sesión de 60 minutos', precio: '$450' },
    ],
    galeria: [
      foto(ID.mancuerna, 'Área de pesas'),
      foto(ID.sacosPiso, 'Material de acondicionamiento'),
      foto(ID.banca, 'Interior del gimnasio'),
    ],
    faq: [
      {
        pregunta: '¿Se pega al costal?',
        respuesta: 'Sí, el costal es parte del circuito, pero nadie golpea a otra persona en esta clase.',
      },
      {
        pregunta: '¿Cuánto dura la sesión?',
        respuesta:
          'Cincuenta minutos: diez de movilidad, treinta de circuito y diez de core y estiramiento.',
      },
      {
        pregunta: '¿Sirve si voy a otro gimnasio?',
        respuesta: 'Sí, muchos la usan como cardio dos veces por semana. Podemos ajustar la carga.',
      },
      {
        pregunta: '¿Puedo pausar mi mensualidad?',
        respuesta: 'Una pausa de hasta dos semanas por lesión o viaje, avisando antes.',
      },
    ],
  },
];
