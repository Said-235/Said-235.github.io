export const profile = {
  name: 'Said Hernandez',
  alias: 'Kitzune',
  role: 'Desarrollador de sistemas · Estudiante de ESCOM',
  location: 'México',
  email: 'jshc_88@hotmail.com',
  github: 'https://github.com/Said-235',
  avatar: 'https://github.com/Said-235.png',
  headline: 'Construyo sistemas internos y productos web que resuelven operaciones reales.',
  blurb:
    'Ingeniero de integración en Labotec y estudiante de sistemas computacionales. Diseño, integro y despliego herramientas con React, Supabase y automatización.',
}

export const nav = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
]

export const about = {
  paragraphs: [
    'Soy Said Hernandez, también conocido como Kitzune. Estudio sistemas computacionales en la ESCOM (IPN), cursé Profesión: Desarrollador Full Stack Python en EBAC y desde hace diez meses trabajo en Labotec como ingeniero de integración de sistemas: traduzco procesos de operación en software que el equipo usa todos los días.',
    'He desarrollado órdenes de servicio, órdenes de compra e inventario, además de una landing con agenda de citas conectada a APIs de Google: reseñas en el sitio y eventos automáticos en el calendario del prestador de servicios.',
    'Mi flujo de trabajo incluye Cursor y Claude: los uso para iterar más rápido, revisar código y llevar prototipos a producción sin perder el criterio de arquitectura, seguridad y detalle de producto.',
  ],
  highlights: [
    { label: 'Labotec', value: '10 meses como ingeniero de integración' },
    { label: 'ESCOM', value: 'Sistemas computacionales' },
    { label: 'EBAC', value: 'Profesión: Desarrollador Full Stack Python', url: 'https://ebac.mx/prof-full-stack-python' },
    { label: 'Aleph RI', value: '4 meses en semillero' },
    { label: 'ADIP', value: 'Web, bases de datos y Python' },
  ],
}

export const projects = [
  {
    id: 'ordenes-servicio',
    title: 'Labotec Engineering — Órdenes de servicio',
    visual: 'service',
    description:
      'Panel oscuro para crear y dar seguimiento a órdenes de mantenimiento preventivo, correctivo, capacitación e instalación, con historial de trabajo. Interfaz de ingeniería usada en operación diaria.',
    tags: ['React', 'Vite', 'Supabase'],
    github: 'https://github.com/Said-235/ordenes-labotec',
    live: null,
  },
  {
    id: 'ordenes-compra',
    title: 'Labotec Supply — Órdenes de compra',
    visual: 'purchase',
    description:
      'Portal B2B con catálogo por cuenta, carrito, notificaciones y panel admin: clientes, productos, carga masiva ODS/XLSX y validación de comprobantes. Genera órdenes en PDF.',
    tags: ['React', 'Vite', 'Tailwind', 'Supabase', 'jsPDF'],
    github: 'https://github.com/Said-235/labotec-ordenes-compra',
    live: null,
  },
  {
    id: 'inventario',
    title: 'Canasta Logística',
    visual: 'inventory',
    description:
      'Acceso por rol a recepción y envío, inventario de perecederos, montacargas y administración. Unifica lotes, caducidad, merma y despacho FEFO en un flujo de bodega.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Supabase'],
    github: 'https://github.com/Said-235/Manejo_inventario',
    live: null,
  },
  {
    id: 'agenda-citas',
    title: 'Landing con agenda de citas',
    visual: 'booking',
    description:
      'Landing de un prestador de servicios con reserva de citas. Integra APIs de Google para mostrar reseñas en el sitio y crear el evento automáticamente en el calendario del profesional al confirmar la cita.',
    tags: ['React', 'Google Calendar', 'Google Reviews', 'APIs'],
    github: null,
    live: null,
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Datos y backend',
    items: ['Supabase', 'PostgreSQL', 'Python', 'Django', 'APIs REST', 'Google Calendar API', 'Google Places / Reviews'],
  },
  {
    title: 'Herramientas',
    items: ['Git', 'GitHub', 'jsPDF', 'Cursor', 'Claude'],
  },
]

export const experience = [
  {
    title: 'Ingeniero de integración de sistemas',
    org: 'Labotec',
    period: '10 meses · actual',
    detail:
      'Desarrollo e integración de sistemas internos (órdenes de servicio y de compra) usados en operación diaria. Trabajo de punta a punta: interfaz, datos y despliegue.',
  },
  {
    title: 'Semillero de desarrollo',
    org: 'Aleph RI',
    period: '4 meses · actual',
    detail:
      'Formación práctica en equipo: producto, código y ritmo de entrega en un entorno de semillero.',
  },
  {
    title: 'Desarrollo asistido con IA',
    org: 'Cursor y Claude',
    period: 'Flujo actual de trabajo',
    detail:
      'Uso Cursor y Claude para diseñar, implementar y depurar más rápido. Me apoyo en ellos para explorar opciones y acelerar boilerplate, y reviso yo la arquitectura, el comportamiento y el detalle de cada entrega.',
  },
  {
    title: 'Sistemas computacionales',
    org: 'ESCOM · IPN',
    period: 'En curso',
    detail: 'Formación en ingeniería de sistemas: fundamentos, software y pensamiento de producto.',
  },
  {
    title: 'Profesión: Desarrollador Full Stack Python',
    org: 'EBAC',
    period: 'Completado',
    url: 'https://ebac.mx/prof-full-stack-python',
    detail:
      'Formación de 18 meses: front end (HTML, CSS, JavaScript, React), SQL, Python y backend con Django. Sitios y apps de principio a fin, de la interfaz a la base de datos.',
  },
  {
    title: 'Certificaciones ADIP',
    org: 'Agencia Digital de Innovación Pública',
    period: 'Completadas',
    detail: 'Desarrollo web, bases de datos y Python.',
  },
]
