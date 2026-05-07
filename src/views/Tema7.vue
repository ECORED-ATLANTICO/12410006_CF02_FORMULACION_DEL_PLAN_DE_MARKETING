<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Auditoría de mercadeo

    .bg_img_25.mb-0

      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-md-8.col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema7/img_2.png', class="img-fluid") 
        .col-12.col-lg-7
          p.mb-3(data-aos="zoom-in-right") La auditoría de <em>marketing</em> es una evaluación estructurada, periódica e independiente de las actividades de <em>marketing</em> , orientada a determinar su eficacia y coherencia con los objetivos organizacionales. 
          .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 En el contexto empresarial, la auditoría no se limita a revisar resultados, sino que analiza de forma integral el entorno, las estrategias, los recursos y los procesos, permitiendo fortalecer la toma de decisiones y mejorar la efectividad del plan de <em>marketing</em> .
              .col-lg-2.d-lg-block.d-none.p-1(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema7/img_3.svg', class="img-fluid")

      Separador

      #t_7_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 7.1 Concepto
      .mb-0 

      p.mb-3(data-aos="zoom-in-right") La auditoría de <em>marketing</em> es un proceso fundamental dentro del control del plan, ya que permite evaluar de manera sistemática el desempeño de las estrategias y tácticas implementadas. Su propósito es identificar desviaciones, analizar resultados y proponer acciones correctivas que garanticen el cumplimiento de los objetivos comerciales.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1 
        .tarjeta.color-terciario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
          p.mb-0 La auditoría de <em>marketing</em> es un proceso sistemático que analiza el entorno, los objetivos, las estrategias y las acciones del plan de <em>marketing</em>, con el fin de identificar oportunidades de mejora y optimizar el desempeño comercial.
        p.mb-3(data-aos="zoom-in-right") Desde un enfoque aplicado, responde a la pregunta: ¿el plan está funcionando correctamente?
        .tarjeta.tarjeta--fondo-img-2.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema7/img_4.svg', class="img-fluid") 
            .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
              p.mb-0 Como ejemplo aplicado, una empresa puede auditar los resultados de sus campañas, el cumplimiento de los <em>KPI</em> establecidos y el uso del presupuesto asignado. Este proceso de auditoría permite evaluar el plan de <em>marketing</em> de manera integral, ya que facilita la identificación de fortalezas en la ejecución y la detección de debilidades que requieren ajustes para mejorar el desempeño.
      .col-10.col-md-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema7/img_5.png', class="img-fluid")

    Separador

    .bg_img_26.mb-0

      #t_7_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 7.2 Fases
      .mb-0 

      p.mb-5(data-aos="zoom-in-right") La auditoría de <em>marketing</em> se desarrolla mediante un proceso estructurado que garantiza un análisis completo y objetivo. Entre las fases de la auditoría de <em>marketing</em> tenemos:

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema7/img_7.png', class="img-fluid") 
        .col-12.col-lg-8
          LineaTiempoD.color-secundario-20
            .row.justify-content-center.align-items-center(numero="1" titulo="Recolección de información")
              .col-12.col-lg-12.mb-md-0
                p.mb-0 Análisis de datos internos y externos (ventas, <em>KPI</em>, mercado).
            .row.justify-content-center.align-items-center(numero="2" titulo="Diagnóstico")
              .col-12.col-lg-12.mb-md-0
                p.mb-0 Evaluación del desempeño frente a los objetivos.
            .row.justify-content-center.align-items-center(numero="3" titulo="Identificación de desviaciones")
              .col-12.col-lg-12.mb-md-0
                p.mb-0 Detección de fallas o incumplimientos.
            .row.justify-content-center.align-items-center(numero="4" titulo="Análisis de causas")
              .col-12.col-lg-12.mb-md-0
                p.mb-0 Determinación de factores que afectan los resultados.
            .row.justify-content-center.align-items-center(numero="5" titulo="Propuesta de acciones correctivas")
              .col-12.col-lg-12.mb-md-0
                p.mb-0 Definición de mejoras para optimizar el plan.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 7.
      |  Proceso de auditoría de <em>marketing</em>
    .tabla-a.mb-3(data-aos="flip-left")
      table
        caption 
          p Nota. SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-4 Fase
            th.col-auto.col-lg-auto Descripción
            th.col-auto.col-lg-4 Resultado
        tbody
          tr
            td.text-start Recolección.
            td.text-start Obtención de datos.
            td.text-start Información organizada.
          tr
            td.text-start Diagnóstico.
            td.text-start Evaluación del desempeño.
            td.text-start Identificación de problemas.
          tr
            td.text-start Desviaciones.
            td.text-start Comparación con objetivos.
            td.text-start Brechas detectadas.
          tr
            td.text-start Análisis.
            td.text-start Identificación de causas.
            td.text-start Comprensión del problema.
          tr
            td.text-start Mejora.
            td.text-start Acciones correctivas.
            td.text-start Optimización del plan.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-8.col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema7/img_8.png', class="img-fluid") 
      .col-12.col-lg-7
        .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
              p.mb-0 Como ejemplo aplicado, una empresa detecta que sus ventas digitales no crecieron como se esperaba. A partir de una auditoría, se identifica una baja tasa de conversión; posteriormente, se detecta un problema en la experiencia web, lo que conduce a realizar ajustes en la plataforma con el fin de optimizar su desempeño y mejorar los resultados comerciales.
            .col-lg-2.d-lg-block.d-none.p-1(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema7/img_9.svg', class="img-fluid")
        p.mb-3(data-aos="zoom-in-right") Las fases de la auditoría permiten pasar del análisis de resultados a la implementación de mejoras concretas.
        .tarjeta.color-terciario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
          p.mb-0 La auditoría de <em>marketing</em> permite evaluar de manera integral la ejecución del plan, identificando desviaciones y oportunidades de mejora. Su aplicación fortalece el control estratégico y facilita la toma de decisiones correctivas, garantizando coherencia entre los objetivos planteados y los resultados obtenidos en la gestión comercial.

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.col-lg-10.mb-3
        .tarjeta--bg-img.color-acento-contenido.rounded-3.overflow-hidden.p-2
          .row.align-items-center.mb-0
            .col-6.col-md-4.col-lg-2.mx-auto.text-center.p-4
              figure.m-2
                img(src="@/assets/curso/tema1/img_27.svg" )
            .col-12.col-md-8.col-lg-10.p-4 
              p.fw-bold.text-white.mb-3 Para fortalecer la comprensión sobre la auditoría en <em>marketing</em>, se invita a consultar el siguiente recurso audiovisual, el cual explica de manera práctica su importancia, aplicación y utilidad en la evaluación de estrategias:
              a.boton.color-acento-botones.d-inline-flex.mb-2(href="https://www.youtube.com/watch?v=1g181Z2e_yo" target="_blank")
                span La auditoría de <em>marketing</em>: claves esenciales para evaluar una estrategia comercial
                i.fas.fa-play-circle.ms-2

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-12.col-lg-8
        .tarjeta.color-primario-60.p-5.rounded-3.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-6.col-lg-6.mb-lg-0.mb-3
              figure
                img(src="@/assets/curso/tema7/img_10.svg", class="img-fluid w-100")
            .col-12.col-lg-6.mb-lg-0
              h2.mb-5.text-white Pódcast
              TarjetaAudio.color-acento-botones.mb-0.p-4(
                texto="<I>Auditoria de marketing</I>"
                :audio="require('@/assets/curso/tema7/img_10.svg')"
                @audio-hover="mostrarIndicadorTarjetaAudio = True")
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
