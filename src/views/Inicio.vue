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
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes">

              Login
            </v-btn>
          </v-layout>
        </v-parallax>

      <section>
        <v-layout column wrap class="my-5"align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h1 class="headline"> Universo Astronômico</h1>
              
            </div>
          </v-flex>

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
          <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <v-card>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    aspect-ratio="2.75"
                  ></v-img>

                  <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                        <div> {{ card_text }} </div>
                      </div>
                    </v-card-title>
            
                    <v-card-actions>
                      <v-btn flat color="orange">Share</v-btn>
                      <v-btn flat color="orange">Explore</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
      </section>
      
      <section>
        <v-parallax src="assets/section.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
            <em>Kick-start your application today</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes">
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>777-867-5309</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Chicago, US</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
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

