<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Diseño y control del plan de <em>marketing</em> aborda la formulación de objetivos, estrategias y tácticas como base para la estructuración del plan, integrando la planificación operativa mediante presupuesto y cronograma. Asimismo, incorpora los índices de gestión como herramientas de control, junto con la auditoría de <em>marketing</em> y la mejora continua, permitiendo evaluar el desempeño, optimizar las decisiones comerciales y garantizar coherencia entre la planificación, ejecución y resultados organizacionales.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El esquema presenta los componentes del diseño y control del plan de marketing: objetivo, estrategia, táctica, presupuesto, cronograma, indicadores de gestión, auditoría de mercadeo y mejora continua. Para cada componente, se incluyen aspectos como concepto, características, clases, construcción, técnica de elaboración, interpretación, fases y proceso, según corresponda.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
