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
        p.mb-0 El cronograma es una herramienta de planificación que establece la programación temporal de las actividades del plan de marketing. En el contexto empresarial, el cronograma se convierte en una herramienta de gestión clave, ya que permite coordinar equipos, asignar responsabilidades y monitorear el avance de las actividades en función de los tiempos establecidos.

    Separador

    .bg_img_16.mb-0

      #t_5_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 5.1 Concepto
      .mb-0 

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
