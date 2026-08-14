// Tipos del contenido del sitio. Todo el contenido es ficticio (demo).

export type Foto = {
  /** URL externa (Unsplash). Se usa tal cual; no se descarga. */
  url: string;
  alt: string;
};

export type Horario = { hora: string; dias: string };

export type PrecioFila = { nombre: string; detalle: string; precio: string };

export type Faq = { pregunta: string; respuesta: string };

export type Servicio = {
  slug: 'box-principiantes' | 'clases-para-ninos' | 'acondicionamiento';
  nombre: string;
  kicker: string;
  resumen: string;
  /** Foto del hero de la subpágina y de la tarjeta en la reja de servicios. */
  foto: Foto;
  horarios: Horario[];
  precios: PrecioFila[];
  galeria: Foto[];
  faq: Faq[];
};

/** Clave de clase que pinta cada celda de la tabla semanal. */
export type ClaseTabla = 'principiantes' | 'ninos' | 'acondicionamiento' | 'libre';

export type FilaTabla = {
  hora: string;
  /** Siete celdas: lunes a domingo. */
  celdas: { etiqueta: string; clase: ClaseTabla }[];
};

export type Entrenador = {
  nombre: string;
  rol: string;
  bio: string;
  foto: Foto;
};

export type Membresia = {
  nombre: string;
  precio: string;
  unidad: string;
  distintivo: string;
  /** Solo una membresía lleva destacada: true (la tarjeta con relleno ámbar). */
  destacada: boolean;
  incluye: string[];
};

export type Resena = { cita: string; autor: string };

export type PublicacionInstagram = Foto;

export type Sitio = {
  nombre: string;
  nombreCorto: string;
  marcaIniciales: string;
  eslogan: string;
  ciudad: string;
  direccion: string;
  telefonoLlamadas: string;
  telefonoWhatsapp: string;
  mensajeWhatsapp: string;
  horarioAtencion: string;
  instagram: { usuario: string; publicaciones: string; seguidores: string };
  redes: { instagram: string; facebook: string; tiktok: string };
};
