<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
</template>
<style lang="stylus">
  #example-custom-transition
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://awebic.com/wp-content/uploads/2018/10/20181025-melhores-fotos-astronomia-2018-awebic-8.jpg'
          },
          {
            src: 'https://awebic.com/wp-content/uploads/2018/10/20181025-melhores-fotos-astronomia-2018-awebic-1.jpg'
          },
          {
            src: 'https://awebic.com/wp-content/uploads/2018/10/20181025-melhores-fotos-astronomia-2018-awebic-3.jpg'
          },
          {
            src: 'https://awebic.com/wp-content/uploads/2018/10/20181025-melhores-fotos-astronomia-2018-awebic-5.jpg'
          }
        ]
      }
    }
  }
</script>
