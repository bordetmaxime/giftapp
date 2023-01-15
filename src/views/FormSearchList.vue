<template>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="10">
            <v-card style="box-shadow: 0 0 0.3em silver, 0 0 3em silver, 0 0 0.5em 
    silver;">
              <v-card-title class="headline titleResponsive">Vous recherchez une liste ? </v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field label="Prénom de la personne" v-model="firstnameSearch" required></v-text-field>
                  <v-text-field label="Nom de la personne" v-model="lastnameSearch" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Rechercher</v-btn>
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
  firstnameSearch: '',
  lastnameSearch: '',
  }
  },
  methods: {
  login() {
      this.$router.push({name: 'ListComponent', params: {firstnameSearch: this.firstnameSearch, lastnameSearch: this.lastnameSearch}})
  }
  }
  }
  </script>