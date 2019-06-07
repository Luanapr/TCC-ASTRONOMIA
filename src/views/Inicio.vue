<template>
  <div class="img">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Astronomia</v-toolbar-title>
      <v-spacer></v-spacer>  
    </v-toolbar>
    <v-content>
        <v-parallax :src="require('../assets/hero.jpeg')" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text">
            <img  :src="require('../assets/vuetify.png')" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">Astronomia</h1>
            
            <v-btn
              class="blue lighten-2 mt-5" dark large href="/pre-made-themes">

              Login
            </v-btn>
          </v-layout>
        </v-parallax>

      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h1 class="headline"> Universo Astronômico</h1>
              
            </div>
          </v-flex>
        </v-layout>

       <v-layout>
          <v-flex xs20 sm10>
            <v-card>
              <v-layout>
                <v-flex>
                  <v-img src="https://i.ytimg.com/vi/jKeveJ91_aY/maxresdefault.jpg" aspect-ratio="2.75" width="450px" height="300px"></v-img>
                </v-flex>
                <v-flex>
                  <h1 class="headline mb-1">Lua, aqui nos tem de regrasso</h1>
                  <div>
           
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
                </v-flex>
              </v-layout>
            </v-card>
    </v-flex>
  </v-layout>
     
        <v-parallax src="assets/section.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
            <em>Kick-start your application today</em>
            <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
              and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
   
  </div>

</template>
<script>
     export default {
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
  }
  </script>

