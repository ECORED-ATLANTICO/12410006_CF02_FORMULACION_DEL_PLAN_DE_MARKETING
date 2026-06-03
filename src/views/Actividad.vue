<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Diseño y control del plan de <em>marketing</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la capacidad para diseñar y controlar el plan de <em>marketing</em> mediante la formulación de objetivos, estrategias, tácticas e indicadores, para apoyar la toma de decisiones comerciales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la finalidad principal de los objetivos de <em>marketing</em> dentro del plan de <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseñar presupuestos.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'Orientar las acciones comerciales hacia resultados específicos.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Controlar inventarios.', esCorrecta: false },
            { id: 'd', texto: 'Gestionar la nómina.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Los objetivos orientan las acciones comerciales y permiten medir los resultados esperados.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con objetivos de <em>marketing</em>.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes características corresponde a un objetivo de <em>marketing</em> bien formulado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ambiguo.', esCorrecta: false },
            { id: 'b', texto: 'Flexible.', esCorrecta: false },
            { id: 'c', texto: 'General.', esCorrecta: false },
            { id: 'd', texto: 'Medible.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! Un objetivo debe ser medible para facilitar su seguimiento y evaluación.',
          mensaje_incorrecto:
            'Revise nuevamente las características de los objetivos de <em>marketing</em>.',
        },
        {
          id: 3,
          texto: '¿Cuál es un ejemplo de objetivo cuantitativo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar las ventas en un 10 %.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mejorar la percepción de marca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fortalecer la reputación corporativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar la satisfacción del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los objetivos cuantitativos se expresan mediante cifras o porcentajes.',
          mensaje_incorrecto:
            'Revise nuevamente las clases de objetivos de <em>marketing</em>.',
        },
        {
          id: 4,
          texto:
            '¿Qué metodología se utiliza para formular objetivos claros y alcanzables?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'DOFA.', esCorrecta: false },
            { id: 'b', texto: 'PESTEL.', esCorrecta: false },
            { id: 'c', texto: 'SMART.', esCorrecta: true },
            { id: 'd', texto: 'Benchmarking.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La metodología SMART facilita la formulación de objetivos específicos y medibles.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la construcción de objetivos.',
        },
        {
          id: 5,
          texto: '¿Qué permite definir una estrategia de <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La estructura financiera.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La forma de alcanzar los objetivos comerciales.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Los procesos contables.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Los procedimientos de contratación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La estrategia determina cómo la organización alcanzará sus objetivos comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente el concepto de estrategia de <em>marketing</em>.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una característica de las estrategias de <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Orientación al mercado.', esCorrecta: true },
            { id: 'b', texto: 'Incremento de costos.', esCorrecta: false },
            { id: 'c', texto: 'Rigidez operativa.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Dependencia administrativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las estrategias de <em>marketing</em> buscan responder a las necesidades del mercado y de los consumidores.',
          mensaje_incorrecto:
            'Revise nuevamente las características de las estrategias de <em>marketing</em>.',
        },
        {
          id: 7,
          texto:
            '¿Qué estrategia busca definir la percepción que tienen los consumidores sobre una marca?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Estrategia de costos.', esCorrecta: false },
            { id: 'b', texto: 'Estrategia de producto.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Estrategia de distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estrategia de posicionamiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El posicionamiento busca construir una imagen diferenciada de la marca en la mente del consumidor.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con posicionamiento.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una fase de la construcción de una estrategia de <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar estados financieros.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Definir la nómina.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Seleccionar el público objetivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseñar contratos laborales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La identificación del público objetivo es fundamental para diseñar estrategias efectivas.',
          mensaje_incorrecto:
            'Revise nuevamente el proceso de formulación de estrategias.',
        },
        {
          id: 9,
          texto: '¿Qué son las tácticas de <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Objetivos empresariales.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Acciones específicas para ejecutar una estrategia.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Indicadores financieros.', esCorrecta: false },
            { id: 'd', texto: 'Procesos administrativos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Las tácticas corresponden a actividades concretas para implementar las estrategias.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con tácticas de <em>marketing</em>.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes corresponde a una táctica de promoción?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Campañas en redes sociales.', esCorrecta: true },
            { id: 'b', texto: 'Estados financieros.', esCorrecta: false },
            { id: 'c', texto: 'Inventarios.', esCorrecta: false },
            { id: 'd', texto: 'Procesos de selección.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Las campañas en redes sociales son una táctica utilizada para promocionar productos y servicios.',
          mensaje_incorrecto: 'Revise nuevamente las tácticas promocionales.',
        },
        {
          id: 11,
          texto:
            '¿Qué variable del <em>marketing mix</em> se relaciona con descuentos y promociones?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Producto.', esCorrecta: false },
            { id: 'b', texto: 'Plaza.', esCorrecta: false },
            { id: 'c', texto: 'Precio.', esCorrecta: true },
            { id: 'd', texto: 'Posicionamiento.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El precio incluye estrategias relacionadas con descuentos, ofertas y condiciones comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente las variables del <em>marketing mix</em>.',
        },
        {
          id: 12,
          texto:
            '¿Qué elemento debe definirse durante la construcción de tácticas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La misión organizacional.', esCorrecta: false },
            { id: 'b', texto: 'El reglamento interno.', esCorrecta: false },
            { id: 'c', texto: 'La estructura legal.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Los responsables de ejecución.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Toda táctica debe tener responsables para garantizar su ejecución y seguimiento.',
          mensaje_incorrecto:
            'Revise nuevamente la construcción de tácticas de <em>marketing</em>.',
        },
        {
          id: 13,
          texto: '¿Qué representa el presupuesto de <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La estimación de recursos financieros para ejecutar el plan.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El organigrama de la empresa.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'La descripción de cargos.', esCorrecta: false },
            { id: 'd', texto: 'El inventario disponible.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El presupuesto establece los recursos económicos necesarios para desarrollar las acciones de <em>marketing</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el tema de presupuesto de <em>marketing</em>.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la finalidad principal del presupuesto de <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Contratar personal.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Asignar y controlar recursos financieros.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Diseñar productos.', esCorrecta: false },
            { id: 'd', texto: 'Elaborar contratos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El presupuesto facilita la planificación y control de los recursos económicos.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con presupuesto.',
        },
        {
          id: 15,
          texto:
            '¿Qué tipo de presupuesto se construye justificando cada gasto desde cero?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Incremental.', esCorrecta: false },
            { id: 'b', texto: 'Competitivo.', esCorrecta: false },
            { id: 'c', texto: 'Base cero.', esCorrecta: true },
            { id: 'd', texto: 'Por ventas.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El presupuesto base cero requiere justificar cada gasto antes de su aprobación.',
          mensaje_incorrecto: 'Revise nuevamente los tipos de presupuesto.',
        },
        {
          id: 16,
          texto: '¿Cuál es una fase de la elaboración del presupuesto?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estimar costos por actividad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Definir misión empresarial.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Elaborar reglamentos.', esCorrecta: false },
            { id: 'd', texto: 'Contratar proveedores.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La estimación de costos permite proyectar los recursos requeridos para cada actividad.',
          mensaje_incorrecto:
            'Revise nuevamente las fases de elaboración del presupuesto.',
        },
        {
          id: 17,
          texto: '¿Cuál es la función principal de los indicadores de gestión?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Elaborar contratos.', esCorrecta: false },
            { id: 'b', texto: 'Gestionar nómina.', esCorrecta: false },
            { id: 'c', texto: 'Diseñar productos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Medir el desempeño y cumplimiento de objetivos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los indicadores permiten evaluar resultados y tomar decisiones de mejora.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con indicadores de gestión.',
        },
        {
          id: 18,
          texto: '¿Qué permite una auditoría de mercadeo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir el plan de <em>marketing</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evaluar las acciones y resultados de <em>marketing</em>.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Eliminar indicadores.', esCorrecta: false },
            { id: 'd', texto: 'Reducir la planificación.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La auditoría de mercadeo permite identificar fortalezas, debilidades y oportunidades de mejora.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con auditoría de mercadeo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el propósito de la mejora continua dentro del plan de <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Incrementar la burocracia.', esCorrecta: false },
            { id: 'b', texto: 'Sustituir estrategias.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Optimizar procesos y resultados de forma permanente.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Eliminar controles.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La mejora continua busca perfeccionar los procesos y resultados obtenidos.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con mejora continua.',
        },
        {
          id: 20,
          texto:
            '¿Qué beneficio genera la integración de objetivos, estrategias, tácticas y control dentro del plan de <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar coherencia entre planificación, ejecución y evaluación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la información disponible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la toma de decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La integración de estos elementos fortalece la gestión y el cumplimiento de los objetivos comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el diseño y control del plan de <em>marketing</em>.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
