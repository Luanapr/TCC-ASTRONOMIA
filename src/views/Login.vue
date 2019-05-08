<template>
        <div class="img">
            <v-toolbar color="">
              <v-toolbar-side-icon></v-toolbar-side-icon>
              <v-toolbar-title>Página de Login</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items class="hidden-sm-and-down">
                
                <v-btn flat>Noticias</v-btn>
                <v-btn flat to="/inicio"> Página Inicial</v-btn>
              </v-toolbar-items>
            </v-toolbar>
    <v-layout align-center justify-center row fill-height mt-5 >
      <v-card color="grey lighten-1 " class="elevation-5 pa-4">
      <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      color="pink"
    >

      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="senha"
        type="password"
        label="Senha"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        label="Salvar senha?"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        @click="validate"
      >
        Voltar para Página inicial
      </v-btn>

      <v-btn
        color="blue"
        @click="resetValidation"
      >
        Confirmar Login
      </v-btn>
  </v-form>
</v-card>
</v-layout>
</div>
</template>

<script> 
export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    }
  }
</script>
<style>
  .teste{
    background-color: red !important;
  }
</style>