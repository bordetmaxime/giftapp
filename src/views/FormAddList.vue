<template>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="10">
            <v-card style="box-shadow: 0 0 0.3em silver, 0 0 3em silver, 0 0 0.5em 
    silver;">
              <v-card-title class="headline titleResponsive">Vous souhaitez créer une liste ? </v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field label="Votre Prénom" v-model="firstname" required></v-text-field>
                  <v-text-field label="Votre Nom" v-model="lastname" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Créer</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </template>

  <style>
  @media (max-width: 500px) {
  .titleResponsive{
    font-size:1rem}
  }
</style>
  
  <script>
  export default {
  data() {
  return {
  firstname: '',
  lastname: '',
  }
  },
  methods: {
  login() {
      this.$router.push({name: 'AddListComponent', params: {firstname: this.firstname, lastname: this.lastname}})
  }
  }
  }
  </script>