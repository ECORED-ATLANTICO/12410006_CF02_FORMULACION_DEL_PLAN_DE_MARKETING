export default {
  global: {
    Name: 'Diseño y control del plan de <em>marketing</em>',
    Description:
      'El componente formativo desarrolla el diseño y control del plan de <em>marketing</em>, orientando la formulación de objetivos, estrategias y tácticas, así como la asignación de recursos, cronogramas e indicadores de gestión. Integra herramientas de seguimiento, auditoría y mejora continua que permiten evaluar el desempeño comercial y garantizar coherencia entre la planificación, ejecución y resultados organizacionales en contextos empresariales dinámicos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Objetivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clases',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Construcción',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Características',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Clases',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Construcción',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Táctica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clases',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Construcción',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Presupuesto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Clases',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnica de elaboración',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cronograma',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Clases',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Técnica de elaboración',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Índices de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Clases',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Técnica de elaboración',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Interpretación',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Auditoría de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Fases',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Concepto',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Características',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Proceso',
            hash: 't_8_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      */
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría de <em>marketing</em>',
      significado:
        'Evaluación sistemática del plan de marketing para verificar su eficacia y coherencia.',
    },
    {
      termino: 'Control',
      significado:
        'Proceso de seguimiento y evaluación del cumplimiento de objetivos.',
    },
    {
      termino: 'Control estratégico',
      significado:
        'Evaluación del cumplimiento de la estrategia organizacional.',
    },
    {
      termino: 'Cronograma',
      significado:
        'Herramienta que organiza las actividades del plan en el tiempo.',
    },
    {
      termino: 'Cuadro de mando integral',
      significado:
        'Herramienta de gestión que mide el desempeño desde varias perspectivas.',
    },
    {
      termino: 'Desempeño',
      significado: 'Resultado obtenido a partir de la ejecución de acciones.',
    },
    {
      termino: 'Ejecución',
      significado: 'Implementación de las estrategias y tácticas planificadas.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Conjunto de acciones planificadas para alcanzar objetivos comerciales.',
    },
    {
      termino: 'Evaluación',
      significado: 'Análisis de resultados frente a objetivos establecidos.',
    },
    {
      termino: 'Gestión',
      significado:
        'Proceso de planificación, organización y control de recursos.',
    },
    {
      termino: 'Indicadores de gestión',
      significado:
        'Métricas que permiten medir el desempeño de las acciones de marketing.',
    },
    {
      termino: 'KPI',
      significado:
        'Indicadores clave que evalúan el logro de objetivos específicos.',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'Proceso de creación de valor para satisfacer necesidades del cliente.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Proceso de optimización permanente basado en evaluación y ajuste.',
    },
    {
      termino: 'Mercado objetivo',
      significado: 'Grupo de consumidores al que se dirige la empresa.',
    },
    {
      termino: 'Objetivo',
      significado:
        'Resultado específico que se desea alcanzar en un periodo determinado.',
    },
    {
      termino: 'Plan de <em>marketing</em>',
      significado:
        'Documento que orienta las acciones comerciales de la empresa.',
    },
    {
      termino: 'Planificación',
      significado: 'Proceso de definición de objetivos y acciones.',
    },
    {
      termino: 'Posicionamiento',
      significado: 'Lugar que ocupa una marca en la mente del consumidor.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'Estimación de recursos financieros necesarios para ejecutar el plan.',
    },
    {
      termino: 'Rentabilidad',
      significado: 'Capacidad de generar beneficios económicos.',
    },
    {
      termino: 'Segmentación',
      significado: 'División del mercado en grupos homogéneos de consumidores.',
    },
    {
      termino: 'Seguimiento',
      significado: 'Monitoreo continuo del desarrollo del plan.',
    },
    {
      termino: 'Táctica',
      significado: 'Acción específica que ejecuta una estrategia.',
    },
    {
      termino: 'Toma de decisiones',
      significado: 'Proceso de selección de acciones basadas en información.',
    },
  ],
  referencias: [
    {
      referencia:
        'Deming, W. E. (1989). Calidad, productividad y competitividad: La salida de la crisis. Díaz de Santos.',
      link: '',
    },
    {
      referencia:
        'Farris, P. W., Bendle, N. T., Pfeifer, P. E., & Reibstein, D. J. (2018). Métricas de <em>marketing</em>: La guía definitiva para medir el rendimiento del marketing. Pearson.',
      link: '',
    },
    {
      referencia:
        'Kaplan, R. S., & Norton, D. P. (2014). El cuadro de mando integral (<em>Balanced Scorecard</em>). Gestión 2000.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2017). Fundamentos de <em>marketing</em>. Pearson.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14584/mod_resource/content/1/Fundamentos%20del%20Marketing-Kotler.pdf',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). Dirección de <em>marketing</em> (15.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Muñiz, R. (2018). <em>Marketing</em> en el siglo XXI. CEF Editorial.',
      link: '',
    },
    {
      referencia:
        'Sainz de Vicuña, J. M. (2017). Plan de <em>marketing</em>: diseño, implementación y control. ESIC Editorial.',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w24257w/LibroPlandeMarketing-1-92.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
