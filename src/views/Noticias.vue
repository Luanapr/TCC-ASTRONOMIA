<template>
    <div class="img">
      <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Astronomia</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          
        <v-btn flat to="/Noticias">Noticias</v-btn>
        <v-btn flat to="">Página de Login</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      
      <v-carousel>
          <v-carousel-item v-for="(item,i) in items":key="i":src="item.src">
          </v-carousel-item>
      </v-carousel>
    </div>
  
  </template>
  <script>
      export default {
        data () {
          return {
            items: [
              {
                src: 'http://s2.glbimg.com/2HMb4vSPJ7BX71DWyguFLDko6bE=/e.glbimg.com/og/ed/f/original/2017/06/19/exoplanetas.png'
              },
              {
                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
              },
              {
                src: 'https://cdn.pixabay.com/photo/2015/05/06/16/31/andromeda-galaxy-755442_960_720.jpg'
              },
              {
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
              }
            ]
          }
        }
      }
    </script>