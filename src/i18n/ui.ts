export const languages = {
  en: 'English',
  es: 'Español',
}

export const languageFlags = {
  en: '🇺🇸',
  es: '🇪🇸',
}

export const defaultLang = 'en'

export const showDefaultLang = false

export const routes = {
  es: {
    portfolio: 'portafolio',
    work: 'trabajo',
  },
}

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Intro Card
    'intro.welcome': 'Welcome',
    'intro.title':
      "Hi, I'm <b>Rafael Rubén Jorge González</b>. " +
      'Computer Science Engineer with 5+ years of experience in the full development cycle of ERP solutions. ' +
      'Specialized in Odoo (versions 12–18) and Frappe/ERPNext, with expertise in module design, ' +
      'version migrations, API integration (REST, XML-RPC, JSON-RPC), and deployment automation with Docker and CI/CD.',
    'intro.sr.github': 'GitHub Profile',
    'intro.sr.linkedin': 'Linkedin Profile',
    'intro.sr.email': 'Email contact',

    // About Me
    'about.title': 'About me',
    'about.description':
      "Hi, I'm Rafael Rubén Jorge González, a Senior ERP Developer from Cuba 🇨🇺. " +
      'Led and implemented functional solutions for companies across 5 countries (Cuba, Spain, Peru, Mexico, Dominican Republic) ' +
      'covering payroll, accounting, point of sale, electronic invoicing, and sales management.',
    'about.tools': 'My primary tools of choice includes:',
    'about.hobbies':
      'Beyond programming, I enjoy playing chess, reading science fiction novels.',

    // Now Card
    'now.title': 'Now',
    'now.whatsThat': "what's that ?",
    'now.description': 'Currently working as Senior ERP Developer',

    // Experience Card
    'experience.title': 'Experience',
    'experience.viewMore': 'View More',

    // CV Card
    'cv.title': 'CV',
    'cv.description':
      'View and download my resume by clicking on the button below',
    'cv.download': 'Download resume',

    // Contacts Card
    'contacts.title': "Let's start working together!",
    'contacts.details': 'Contact Details',
    'contacts.socials': 'Socials',

    // Tattoo Card
    'tattoo.title': 'Instagram tattoo',
    'tattoo.description':
      "If you want to see my tattoo's, you can follow me on Instagram.",

    // Study Card
    'study.title': 'Study',

    // Time Zone Card
    'timezone.title': 'Time zone',

    // Portfolio Page
    'portfolio.title': 'Portfolio',
    'portfolio.description': "Projects and some clone's that I did",
    'portfolio.heading': "Projects and clone's",

    // Work Page
    'work.title': 'Work',
    'work.description': 'Places I have worked.',

    // 404 Page
    '404.title': '404 - Not Found',
    '404.description': '404 Error — this page was not found',
    '404.heading': 'Page not found',
    '404.message': "Sorry, we couldn't find the page you're looking for.",
    '404.goHome': 'Go back home',

    // Home Page
    'home.title': 'Rafael Rubén - Senior ERP Developer | Odoo & Frappe/ERPNext',
    'home.description':
      'Rafael Rubén Jorge González - Computer Science Engineer | Senior ERP Developer - Portfolio, Projects, ' +
      'CV, About Me, Contact, Timezone, Now, Experience, Study',
    'home.portfolio': 'Portfolio & Projects',

    // Quote
    'quote.text': 'A minute standing is worth more than a life on your knees.',
    'quote.author': '- José Martí',

    // Footer
    'footer.builtBy': 'Built by',
    'footer.with': 'with',
    'footer.using':
      'using Astro and Tailwind CSS. The source code is available on',

    // Experience - Common
    'experience.current': 'Current',

    // Experience - Desoft
    'experience.desoft.company': 'Desoft VC',
    'experience.desoft.position': 'Odoo Developer',
    'experience.desoft.location': 'Villa Clara, Cuba',
    'experience.desoft.tasks.0':
      'Designed and implemented an Odoo module for on-call hours management and its automatic integration into the Human Resources payroll calculation.',
    'experience.desoft.tasks.1':
      'Implemented modules for food cost management, achieving 100% compliance with implementation plans.',
    'experience.desoft.tasks.2':
      'Customized the recruitment module adapting it to the specific workflows and needs of each client.',

    // Experience - Peoplewalking
    'experience.peoplewalking.company': 'Peoplewalking',
    'experience.peoplewalking.position': 'Odoo Developer',
    'experience.peoplewalking.location': 'Spain',
    'experience.peoplewalking.tasks.0':
      'Researched, designed, and implemented an Odoo module for EAN-128 barcode management, delivered within 100% of the planned timeline.',
    'experience.peoplewalking.tasks.1':
      'Maintained and optimized contact management and report generation modules according to evolving client requirements.',

    // Experience - Soft System
    'experience.soft_system.company': 'Soft System',
    'experience.soft_system.position': 'Odoo Developer',
    'experience.soft_system.location': 'Peru',
    'experience.soft_system.tasks.0':
      'Developed features for the Point of Sale (POS) module in Odoo, improving user experience and transaction processing speed.',
    'experience.soft_system.tasks.1':
      'Adapted existing modules to local business processes and generated custom reports (QWeb) for management decision-making.',

    // Experience - iguanait
    'experience.iguanait.company': 'Iguana IT',
    'experience.iguanait.position': 'Frappe/ERPNext Developer',
    'experience.iguanait.location': 'Spain',
    'experience.iguanait.tasks.0':
      'Designed and implemented from scratch the SII (Immediate Information System) invoice submission module in Frappe/ERPNext, complying with Spanish tax regulations.',
    'experience.iguanait.tasks.1':
      "Developed modules for sales management and automatic tax calculation, optimizing the company's invoicing workflow.",
    'experience.iguanait.tasks.2':
      'Implemented digital signature generation functionality for fiscal documents, ensuring authenticity and legal validity before the AEAT.',

    // Experience - jaelsolution
    'experience.jaelsolution.company': 'Jael Solution',
    'experience.jaelsolution.position': 'Odoo Developer',
    'experience.jaelsolution.location': 'Dominican Republic',
    'experience.jaelsolution.tasks.0':
      'Executed full migration of Odoo modules from v16 to v17 for the accounting department, ensuring compatibility with Dominican fiscal regulations.',
    'experience.jaelsolution.tasks.1':
      'Performed regression testing and post-migration functional validation, ensuring operational continuity with zero data loss.',

    // Experience - IdooGroup
    'experience.idoogroup.company': 'idooGROUP Technologies',
    'experience.idoogroup.position': 'Backend Odoo Developer',
    'experience.idoogroup.location': 'Mexico',
    'experience.idoogroup.tasks.0':
      'Developed backend integrations between Odoo and Flutter mobile applications via REST APIs, improving data synchronization across systems.',
    'experience.idoogroup.tasks.1':
      'Implemented and maintained CI/CD pipelines with Docker, reducing deployment times and production errors.',
    'experience.idoogroup.tasks.2':
      "Automated continuous integration processes for multi-service environments, standardizing the team's development workflow.",

    // Experience - onreserva
    'experience.onreserva.company': 'Reserva Inc',
    'experience.onreserva.position': 'Senior ERP Developer',
    'experience.onreserva.location': 'Spain',
    'experience.onreserva.tasks.0':
      'Designed and implemented custom modules in Odoo 12 based on client functional specifications, meeting 100% of agreed delivery deadlines.',
    'experience.onreserva.tasks.1':
      'Collaborated with cross-functional teams to integrate new features into existing operational workflows, improving internal process traceability.',
    'experience.onreserva.tasks.2':
      'Optimized workflows through manual process automation, reducing repetitive tasks for the administrative team.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.portfolio': 'Portafolio',
    'nav.work': 'Trabajo',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',

    // Intro Card
    'intro.welcome': 'bienvenido',
    'intro.title':
      'Hola soy <b>Rafael Rubén Jorge González</b>. ' +
      'Ingeniero en Ciencias Informáticas con más de 5 años de experiencia en el ciclo completo de desarrollo de soluciones ERP. ' +
      'Especializado en Odoo (versiones 12–18) y Frappe/ERPNext, con dominio en diseño de módulos, ' +
      'migraciones entre versiones, integración de APIs (REST, XML-RPC, JSON-RPC) y automatización de despliegues con Docker y CI/CD.',

    'intro.sr.github': 'Perfil de GitHub',
    'intro.sr.linkedin': 'Perfil de Linkedin',
    'intro.sr.email': 'Contacto por correo',

    // About Me
    'about.title': 'Acerca de mí',
    'about.description':
      'Hola, soy Rafael Rubén Jorge González, Desarrollador ERP Senior de Cuba 🇨🇺. ' +
      'He liderado e implementado soluciones funcionales para empresas en 5 países (Cuba, España, Perú, México, ' +
      'República Dominicana) abarcando áreas de nómina, contabilidad, punto de venta, facturación electrónica y gestión comercial.',
    'about.tools': 'Mis herramientas principales incluyen:',
    'about.hobbies':
      'Más allá de la programación, disfruto jugar al ajedrez, leer novelas de ciencia ficción.',

    // Now Card
    'now.title': 'Ahora',
    'now.whatsThat': '¿qué es eso?',
    'now.description': 'Actualmente trabajando como Desarrollador ERP Senior.',

    // Experience Card
    'experience.title': 'Experiencia',
    'experience.viewMore': 'Ver más',

    // CV Card
    'cv.title': 'CV',
    'cv.description':
      'Ver y descargar mi currículum haciendo clic en el botón de abajo',
    'cv.download': 'Descargar currículum',

    // Contacts Card
    'contacts.title': '¡Empecemos a trabajar juntos!',
    'contacts.details': 'Detalles de contacto',
    'contacts.socials': 'Redes sociales',

    // Tattoo Card
    'tattoo.title': 'Instagram tatuajes',
    'tattoo.description':
      'Si quieres ver mis tatuajes, puedes seguirme en Instagram.',

    // Study Card
    'study.title': 'Estudios',

    // Time Zone Card
    'timezone.title': 'Zona horaria',

    // Portfolio Page
    'portfolio.title': 'Portafolio',
    'portfolio.description': 'Proyectos y algunos clones que he hecho',
    'portfolio.heading': 'Proyectos y clones',

    // Work Page
    'work.title': 'Trabajo',
    'work.description': 'Lugares donde he trabajado.',

    // 404 Page
    '404.title': '404 - No encontrado',
    '404.description': 'Error 404 — esta página no fue encontrada',
    '404.heading': 'Página no encontrada',
    '404.message': 'Lo sentimos, no pudimos encontrar la página que buscas.',
    '404.goHome': 'Volver al inicio',

    // Home Page
    'home.title':
      'Rafael Rubén - Desarrollador ERP Senior | Odoo & Frappe/ERPNext',
    'home.description':
      'Rafael Rubén Jorge González - Ingeniero en Ciencias Informáticas | Desarrollador ERP Senior ' +
      '- Portafolio, Proyectos, CV, Acerca de Mí, Contacto, Zona Horaria, Ahora, ' +
      'Experiencia, Estudios',
    'home.portfolio': 'Portafolio y Proyectos',

    // Quote
    'quote.text': 'Vale más un minuto de pie que una vida de rodillas.',
    'quote.author': '- José Martí',

    // Footer
    'footer.builtBy': 'Construido por',
    'footer.with': 'con',
    'footer.using':
      'usando Astro y Tailwind CSS. El código fuente está disponible en',

    // Experience - Common
    'experience.current': 'Actual',

    // Experience - Desoft
    'experience.desoft.company': 'Desoft VC',
    'experience.desoft.position': 'Desarrollador Odoo',
    'experience.desoft.location': 'Villa Clara, Cuba',
    'experience.desoft.tasks.0':
      'Diseñé e implementé un módulo en Odoo para la gestión de horas de guardia y su integración automática en el cálculo de nómina de Recursos Humanos.',
    'experience.desoft.tasks.1':
      'Implementé módulos para la gestión de costos en alimentos, alcanzando el 100% de cumplimiento de los planes de implementación.',
    'experience.desoft.tasks.2':
      'Personalicé el módulo de reclutamiento adaptándolo a los flujos y necesidades específicas de cada cliente.',

    // Experience - Peoplewalking
    'experience.peoplewalking.company': 'Peoplewalking',
    'experience.peoplewalking.position': 'Desarrollador Odoo',
    'experience.peoplewalking.location': 'España',
    'experience.peoplewalking.tasks.0':
      'Investigué, diseñé e implementé un módulo Odoo para la gestión de códigos de barras EAN-128, entregado en el 100% del plazo planificado.',
    'experience.peoplewalking.tasks.1':
      'Mantuve y optimicé módulos de gestión de contactos y generación de informes según requerimientos cambiantes del cliente.',

    // Experience - Soft System
    'experience.soft_system.company': 'Soft System',
    'experience.soft_system.position': 'Desarrollador Odoo',
    'experience.soft_system.location': 'Perú',
    'experience.soft_system.tasks.0':
      'Desarrollé funcionalidades para el módulo de Punto de Venta (POS) en Odoo, mejorando la experiencia de usuario y la velocidad de procesamiento de transacciones.',
    'experience.soft_system.tasks.1':
      'Adapté módulos existentes a los procesos comerciales locales y generé reportes personalizados (QWeb) para la toma de decisiones gerenciales.',

    // Experience - iguanait
    'experience.iguanait.company': 'Iguana IT',
    'experience.iguanait.position': 'Desarrollador Frappe/ERPNext',
    'experience.iguanait.location': 'España',
    'experience.iguanait.tasks.0':
      'Diseñé e implementé desde cero el módulo de envío de facturas al SII (Sistema Inmediato de Información) en Frappe/ERPNext, cumpliendo con la normativa tributaria española.',
    'experience.iguanait.tasks.1':
      'Desarrollé módulos para gestión de ventas y cálculo automático de impuestos, optimizando el flujo de facturación de la empresa.',
    'experience.iguanait.tasks.2':
      'Implementé la funcionalidad de generación de firma digital para documentos fiscales, garantizando la autenticidad y validez legal ante la AEAT.',

    // Experience - jaelsolution
    'experience.jaelsolution.company': 'Jael Solution',
    'experience.jaelsolution.position': 'Desarrollador Odoo',
    'experience.jaelsolution.location': 'República Dominicana',
    'experience.jaelsolution.tasks.0':
      'Ejecuté la migración completa de módulos de Odoo v16 a v17 para el departamento contable, garantizando compatibilidad con la normativa fiscal dominicana.',
    'experience.jaelsolution.tasks.1':
      'Realicé pruebas de regresión y validación funcional post-migración, asegurando la continuidad operativa sin pérdida de datos.',

    // Experience - IdooGroup
    'experience.idoogroup.company': 'idooGROUP Technologies',
    'experience.idoogroup.position': 'Desarrollador Backend Odoo',
    'experience.idoogroup.location': 'México',
    'experience.idoogroup.tasks.0':
      'Desarrollé integraciones backend entre Odoo y aplicaciones móviles Flutter mediante APIs REST, mejorando la sincronización de datos entre sistemas.',
    'experience.idoogroup.tasks.1':
      'Implementé y mantuve pipelines de CI/CD con Docker, reduciendo tiempos de despliegue y errores en producción.',
    'experience.idoogroup.tasks.2':
      'Automanicé procesos de integración continua para entornos multi-servicio, estandarizando el flujo de desarrollo del equipo.',

    // Experience - onreserva
    'experience.onreserva.company': 'Reserva Inc',
    'experience.onreserva.position': 'Desarrollador ERP Senior',
    'experience.onreserva.location': 'España',
    'experience.onreserva.tasks.0':
      'Diseñé e implementé módulos personalizados en Odoo 12 según especificaciones funcionales del cliente, cumpliendo el 100% de los plazos de entrega acordados.',
    'experience.onreserva.tasks.1':
      'Colaboré con equipos multidisciplinarios para integrar nuevas funcionalidades al flujo operativo existente, mejorando la trazabilidad de procesos internos.',
    'experience.onreserva.tasks.2':
      'Optimicé flujos de trabajo mediante automatización de procesos manuales, reduciendo tareas repetitivas del equipo administrativo.',
  },
} as const

export type Translations = (typeof ui)[typeof defaultLang]
