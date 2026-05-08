<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Objetivo 
  
    .bloque-texto-g.color-secundario-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los objetivos de <em>marketing</em> constituyen el eje articulador del plan, ya que orientan la estrategia, las tácticas y los mecanismos de control. Su correcta formulación permite establecer una relación directa entre lo que la empresa desea lograr y las acciones necesarias para alcanzarlo, garantizando coherencia entre planificación, ejecución y evaluación del desempeño.

    .bg_img_2.mb-0

      Separador

      #t_1_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 1.1 Concepto
      .mb-0 
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          p.mb-3(data-aos="zoom-in-right") Los objetivos representan los resultados específicos que una organización pretende alcanzar mediante la ejecución del plan de <em>marketing</em>. Su correcta formulación permite orientar las acciones comerciales, facilitar el control y reducir la incertidumbre en la toma de decisiones. 
          .tarjeta.tarjeta--fondo-img-2.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema1/img_3.svg', class="img-fluid") 
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 Los objetivos de <em>marketing</em> son enunciados claros, medibles y alcanzables que definen los resultados esperados en un periodo determinado, alineados con la estrategia organizacional y las condiciones del mercado.
          p.mb-0(data-aos="zoom-in-right") Desde una perspectiva técnica, los objetivos deben responder a variables como crecimiento, posicionamiento, participación de mercado o rentabilidad, permitiendo evaluar el impacto de las acciones ejecutadas.
        .col-10.col-md-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema1/img_5.png', class="img-fluid")

      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-md-8.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema1/img_6.png', class="img-fluid") 
        .col-12.col-lg-8
          .tarjeta.color-primario-5.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-3 Como ejemplo aplicado, una empresa de <em>retail</em> puede establecer como objetivo “aumentar las ventas en un 15 % en el canal digital durante los próximos 6 meses”. Este objetivo es:
            ul.list-unstyled.cita-decorada__texto.mb-3
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                span Medible
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                span Tiene tiempo definido.
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                span Está orientado a resultados.
    
    p.mb-0(data-aos="zoom-in-right") Un objetivo bien formulado transforma la intención estratégica en un resultado verificable, permitiendo orientar la gestión comercial con precisión.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2 Características
    .mb-0 

    .bg_img_3.mb-0

      p.mb-5(data-aos="zoom-in-right") Los objetivos de <em>marketing</em> deben cumplir condiciones que garanticen su efectividad y aplicabilidad dentro del plan. A continuación, se da a conocer cada una de las características, su descripción y aplicabilidad práctica.

      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-md-8.col-lg-4.col-xl-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema1/img_8.png', class="img-fluid")
        .col-12.col-lg-12.col-xl-8
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--01
                h5.text-center.mb-3 Específico
                p.mb-3 Un objetivo específico define con claridad qué se desea lograr. En la práctica, esto implica formular metas concretas y precisas, como “incrementar ventas”, en lugar de “mejorar resultados”, lo que facilita su comprensión y ejecución.
              .tarjeta--color-white.h-100
                .tarjeta--02
                h5.mb-3.text-center.mb-3 Medible
                p.mb-3 Un objetivo medible permite cuantificar el resultado. En la aplicación práctica, se traduce en el uso de indicadores como el porcentaje de crecimiento o el número de clientes, que hacen posible un seguimiento objetivo.
              .tarjeta--color-white.h-100
                .tarjeta--03
                h5.mb-3.text-center.mb-3 Alcanzable
                p.mb-3 Un objetivo alcanzable es realista y se ajusta a los recursos disponibles de la organización. En la práctica, debe ser coherente con la capacidad operativa, asegurando que pueda cumplirse sin generar sobrecargas o expectativas irreales.
              .tarjeta--color-white.h-100
                .tarjeta--04
                h5.mb-3.text-center.mb-3 Relevante
                p.mb-3 Un objetivo relevante está alineado con la estrategia general de la empresa y aporta valor al negocio. En su aplicación práctica, debe impactar directamente en los resultados organizacionales, contribuyendo al logro de metas estratégicas.
              .tarjeta--color-white.h-100
                .tarjeta--05
                h5.mb-3.text-center.mb-3 Temporal
                p.mb-3 Un objetivo temporal cuenta con un plazo. En la práctica, esto implica establecer periodos concretos, como 3 meses, 6 meses o 1 año, lo que permite organizar acciones y evaluar resultados en un tiempo determinado.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.order-2.order-lg-1
        .tarjeta.color-primario-5.p-5.rounded-4.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-12.mb-0(data-aos="zoom-in-right")
              p.mb-3 Como ejemplo, una empresa como Éxito define objetivos específicos por canal (tiendas físicas vs. <em>e-commerce</em>), garantizando medición diferenciada.
            .col-lg-6.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_14.svg', class="img-fluid")
      .col-12.col-lg-8.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_15.png', class="img-fluid")    
    
    p.mb-0(data-aos="zoom-in-right") Las características aseguran que los objetivos sean operativos y no declaraciones generales sin capacidad de control.

    Separador

    .bg_img_4.mb-0

      #t_1_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 1.3 Clases
      .mb-0 
      
      p.mb-4(data-aos="zoom-in-right") Los objetivos pueden clasificarse según su enfoque dentro del plan de <em>marketing</em>, lo que permite estructurar la estrategia de manera más precisa.

      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
        h5 Tabla 1.
        |  Clases de objetivos de <em>marketing</em>
      .tabla-a.mb-3(data-aos="flip-left")
        table
          caption 
            p Nota. SENA, (2026).
          thead
            tr
              th.col-auto.col-lg-3 Tipo de objetivo
              th.col-auto.col-lg-auto Descripción
              th.col-auto.col-lg-5 Ejemplo
          tbody
            tr
              td.text-start Cuantitativos.
              td.text-start Se expresan en cifras.
              td.text-start Aumentar ventas 10 %.
            tr
              td.text-start Cualitativos.
              td.text-start Relacionados con percepción.
              td.text-start Mejorar posicionamiento de marca.
            tr
              td.text-start Corto plazo.
              td.text-start Menor a un año.
              td.text-start Incrementar <em>leads</em> en 3 meses.
            tr
              td.text-start Mediano plazo.
              td.text-start Entre 1 y 3 años.
              td.text-start Expandir cobertura regional.
            tr
              td.text-start Largo plazo.
              td.text-start Más de 3 años.
              td.text-start Consolidar liderazgo de mercado.
    
    .tarjeta.tarjeta--fondo-img-2.p-5.rounded-4.mb-3(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema1/img_17.svg', class="img-fluid") 
        .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
          p.mb-3 Como ejemplo aplicado, un <em>startup</em> digital puede plantear:
          ul.list-unstyled.cita-decorada__texto.mb-3
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span Corto plazo: aumentar tráfico web.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span Mediano plazo: consolidar base de clientes.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span Largo plazo: posicionarse como referente del sector.
          p.mb-0 La clasificación permite organizar los objetivos según horizonte y naturaleza, facilitando la planificación estratégica.

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.4 Construcción
    .mb-0 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_18.png', class="img-fluid") 
      .col-12.col-lg-8
        .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
              p.mb-0 La construcción de objetivos requiere un proceso estructurado que garantice coherencia con el entorno y la capacidad organizacional.
            .col-lg-1.d-lg-block.d-none.p-1(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_19.svg', class="img-fluid")
        p.mb-0(data-aos="zoom-in-right") A continuación, se identifican las fases para la construcción de objetivos:

    br
    br
    br

    .bg_img_5.mb-0
      
      .tarjeta.tarjeta--blanca.p-5.mb-5
        PasosB.color-terciario
          .row.justify-content-center.align-items-center(titulo="Fase 1")
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h5.mb-4 Fase 1
              p.mb-4 Análisis del contexto (diagnóstico previo).
            .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema1/img_21.png', class="img-fluid")
          .row.justify-content-center.align-items-center(titulo="Fase 2")
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h5.mb-4 Fase 2
              p.mb-4 Identificación de prioridades comerciales.
            .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema1/img_22.png', class="img-fluid")
          .row.justify-content-center.align-items-center(titulo="Fase 3")
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h5.mb-4 Fase 3
              p.mb-4 Definición de variables clave (ventas, clientes, posicionamiento).
            .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema1/img_23.png', class="img-fluid")
          .row.justify-content-center.align-items-center(titulo="Fase 4")
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h5.mb-4 Fase 4
              p.mb-4 Formulación bajo criterio <em>SMART</em>: metodología utilizada para la formulación de objetivos que garantiza su claridad y viabilidad, asegurando que estos sean específicos (<em>specific</em>), medibles (<em>measurable</em>), alcanzables (<em>achievable</em>), relevantes (<em>relevant</em>) y definidos en un tiempo determinado (<em>time bound</em>). Su aplicación permite estructurar objetivos concretos que facilitan su seguimiento, control y evaluación dentro del plan de <em>marketing</em>.
            .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema1/img_24.png', class="img-fluid")
          .row.justify-content-center.align-items-center(titulo="Fase 5")
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h5.mb-4 Fase 5
              p.mb-4 Validación con recursos disponibles.
            .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/tema1/img_25.png', class="img-fluid")
      br
    br
    br
    br
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-lg-8.mb-3.mb-lg-0
        .tarjeta.color-secundario-10.p-4.rounded-4.mb-5.h-100(data-aos="zoom-in-right")
          p.mb-3 En base a la información suministrada, se muestra un ejemplo de construcción de objetivo:
          ul.list-unstyled.cita-decorada__texto.mb-0
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Variable:] ventas digitales.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Meta:] incremento del 20 %.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Tiempo:] 6 meses.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Segmento:] clientes entre 18 y 35 años.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Canal:] comercio electrónico.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Objetivo final construido:] “aumentar en un 20 % las ventas digitales en el segmento de 18 a 35 años durante los próximos 6 meses”.
      .col-12.col-lg-4.mb-3.mb-lg-0
        .tarjeta.color-primario-10.p-4.rounded-4.mb-0.mb-lg-1.h-100(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-12.mb-4(data-aos="zoom-in-right")
              p.mb-3 La construcción estructurada evita objetivos improvisados y asegura su alineación con la realidad organizacional.
            .col-lg-6.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema1/img_26.svg', class="img-fluid")
                
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.col-lg-10.mb-5
        .tarjeta--bg-img.color-acento-contenido.rounded-3.overflow-hidden.p-2
          .row.align-items-center.mb-0
            .col-6.col-md-4.col-lg-2.mx-auto.text-center.p-4
              figure.m-2
                img(src="@/assets/curso/tema1/img_27.svg" )
            .col-12.col-md-8.col-lg-10.p-4
              p.fw-bold.text-white.mb-3 Para profundizar en la formulación de objetivos <em>SMART</em> en <em>marketing</em>, te invitamos a consultar el siguiente video explicativo:
              a.boton.color-acento-botones.d-inline-flex.mb-2(href="https://www.youtube.com/watch?v=gY607xwUgpw&t=9s" target="_blank")
                span Planeamiento de objetivos bajo el método <em>SMART</em>
                i.fas.fa-play-circle.ms-2
    
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.col-lg-10.mb-5
        .tarjeta--bg-img.color-primario-70.rounded-3.overflow-hidden.p-2
          .row.align-items-center.mb-0
            .col-6.col-md-4.col-lg-2.mx-auto.text-center.p-4
              figure.m-2
                img(src="@/assets/curso/tema1/img_28.svg" )
            .col-12.col-md-8.col-lg-10.p-4
              p.fw-bold.text-white.mb-3 Para ampliar la información sobre la formulación de objetivos en <em>marketing</em>, se invita a consultar el siguiente recurso (Páginas 17-19):
              a.boton.color-acento-botones.d-inline-flex.mb-2(href="https://gc.scalahed.com/recursos/files/r161r/w24257w/LibroPlandeMarketing-1-92.pdf" target="_blank")
                span PLAN DE <em>MARKETING</em>: diseño, implementación y control
                i.fas.fa-play-circle.ms-2
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
