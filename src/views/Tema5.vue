<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Cronograma

    .bloque-texto-g.color-secundario-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El cronograma es una herramienta de planificación que establece la programación temporal de las actividades del plan de <em>marketing</em>. En el contexto empresarial, el cronograma se convierte en una herramienta de gestión clave, ya que permite coordinar equipos, asignar responsabilidades y monitorear el avance de las actividades en función de los tiempos establecidos.

    Separador

    .bg_img_16.mb-0

      #t_5_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 5.1 Concepto
      .mb-0 

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-7.order-2.order-lg-1
          p.mb-3(data-aos="zoom-in-right") El cronograma de <em>marketing</em> es un instrumento que organiza las actividades dentro de un periodo determinado, estableciendo fechas de inicio, duración y responsables, con el propósito de garantizar el cumplimiento del plan. Desde un enfoque aplicado, permite responder a la pregunta: ¿cuándo se va a ejecutar cada acción? 
          .tarjeta.tarjeta--fondo-img-2.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_3.svg', class="img-fluid") 
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 Por ejemplo, puede estructurarse en fases como la semana 1 dedicada al diseño de la campaña, la semana 2 al lanzamiento y las semanas 3 y 4 al seguimiento.
          p.mb-0(data-aos="zoom-in-right") De esta manera, el cronograma facilita la organización y ejecución ordenada del plan, asegurando su cumplimiento en tiempo y forma.
        .col-10.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_4.png', class="img-fluid")

      Separador

    .bg_img_17.mb-0

      #t_5_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 5.2 Clases
      .mb-0 
      
      p.mb-3(data-aos="zoom-in-right") Los cronogramas pueden clasificarse según su forma de representación y nivel de detalle.

      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema4/img_6.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--16
                h5.text-center.mb-3 Lineal
                p.mb-3 Lista de actividades en secuencia. 
                p.mb-3 #[strong Aplicación:] planes simples.
              .tarjeta--color-white.h-100
                .tarjeta--17
                h5.text-center.mb-3 Diagrama de Gantt
                p.mb-3 Representación gráfica del tiempo. 
                p.mb-3 #[strong Aplicación:] proyectos complejos.
              .tarjeta--color-white.h-100
                .tarjeta--18
                h5.text-center.mb-3 Calendario
                p.mb-3 Distribución por fechas específicas. 
                p.mb-3 #[strong Aplicación:] actividades periódicas.
              .tarjeta--color-white.h-100
                .tarjeta--19
                h5.text-center.mb-3 Por fases
                p.mb-3 Divide el plan por etapas. 
                p.mb-3 #[strong Aplicación:] lanzamientos o campañas.

      .tarjeta.tarjeta--fondo-img-2.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
            p.mb-0 Un ejemplo empresarial es el de una compañía como Mercado Libre, que utiliza diagramas de Gantt para coordinar campañas comerciales a nivel regional, permitiendo sincronizar actividades, responsables y tiempos de ejecución en distintos mercados de manera eficiente.
          .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema5/img_11.svg', class="img-fluid") 

    p.mb-3(data-aos="zoom-in-right") La elección del tipo de cronograma facilita la visualización y control del plan de <em>marketing</em>.

    .bg_img_18.mb-0

      Separador

      #t_5_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 5.3 Técnica de elaboración
      .mb-0 
      
      p.mb-3(data-aos="zoom-in-right") La elaboración del cronograma requiere organizar las actividades de forma lógica y coherente con los objetivos del plan. A continuación, se detallan las fases para su desarrollo:

      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-lg-4.mb-3.mb-lg-0
          .tarjeta.color-primario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0 Identificar actividades del plan.
          .tarjeta.color-primario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0 Definir duración de cada actividad.
          .tarjeta.color-primario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0 Establecer secuencia lógica.
          .tarjeta.color-primario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0 Asignar responsables.
          .tarjeta.color-primario-5.p-3.rounded-4.mb-0(data-aos="zoom-in-right")
            p.mb-0 Representar gráficamente el cronograma.
        .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_13.png', class="img-fluid") 

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 5.
      |  Ejemplo de cronograma (tipo Gantt)
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-5 Actividad
            th.col-auto.col-lg-auto Semana 1
            th.col-auto.col-lg-auto Semana 2
            th.col-auto.col-lg-auto Semana 3
            th.col-auto.col-lg-auto Semana 4
        tbody
          tr
            td.text-start Diseño campaña.
            td.bg-table-01 X
            td -
            td -
            td -
          tr
            td.text-start Producción de contenido.
            td.bg-table-01 X
            td.bg-table-02 X
            td -
            td -
          tr
            td.text-start Lanzamiento.
            td -
            td.bg-table-02 X
            td -
            td -
          tr
            td.text-start Seguimiento.
            td -
            td -
            td.bg-table-03 X
            td.bg-table-03 X

    .tarjeta.tarjeta--fondo-img-2.p-4.rounded-4.mb-5(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema4/img_15.svg', class="img-fluid") 
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 Un ejemplo aplicado es el de una empresa de servicios que puede programar campañas digitales de forma mensual, ajustando los tiempos según el comportamiento del mercado y la respuesta de los clientes.

    p.mb-5(data-aos="zoom-in-right") En este sentido, un cronograma bien estructurado permite ejecutar el plan de <em>marketing</em> de manera organizada y controlar su avance a lo largo del tiempo, facilitando la toma de decisiones y la optimización de resultados. 

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.col-lg-10.mb-5
        .tarjeta--bg-img.color-acento-contenido.rounded-3.overflow-hidden.p-2
          .row.align-items-center.mb-0
            .col-6.col-lg-2.mx-auto.text-center.p-4
              figure.m-2
                img(src="@/assets/curso/tema1/img_27.svg" )
            .col-12.col-lg-10.p-4 
              p.fw-bold.text-white.mb-3 Para fortalecer la comprensión sobre la programación en <em>marketing</em>, se invita a revisar el siguiente recurso audiovisual: 
              a.boton.color-acento-botones.d-inline-flex.mb-2(href="https://www.youtube.com/watch?v=bVsq4UNB3Fo" target="_blank")
                span Programación de actividades en el plan de mercadeo: diagrama de Gantt
                i.fas.fa-play-circle.ms-2
</template>

<script>
export default {
  name: 'Tema5',
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
