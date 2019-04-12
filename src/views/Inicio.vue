<template>
  <div class="img">
      <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Astronomia</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          
          <v-btn flat>Noticias</v-btn>
          <v-btn flat>Página de Login</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      
      <v-carousel>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
    </div>

</template>
<script>
    export default {
      data () {
        return {
          items: [
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
            }
          ]
        }
      }
    }
  </script>

