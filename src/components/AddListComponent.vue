<template>
    <div class="d-flex align-center justify-center" style="margin-left:15px">
      <img class="imageLogo"  src="https://www.plkdenoetique.com/wp-content/uploads/2013/12/cadeaux.jpg" alt="Gift Box">
  </div>
    <v-card>
    <v-col cols="12" class="mx-auto" style="border-bottom: 2px solid silver; margin:50px"><h3  style=" color:purple;
    font-size:1.6rem" class="text-center font-weight-regular">Ajouter un cadeau</h3></v-col>

      <v-form class="mx-auto" style="width: 60%;" @submit.prevent="addGift">
        
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field label="Titre" v-model="giftTitle" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Prix" v-model="giftPrice" />
          </v-col>
          <v-col cols="12">
            <v-textarea label="Description" v-model="giftDescription" />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Lien pour acheter le produit" v-model="giftLink" />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Lien de l'image" v-model="giftImage" />
          </v-col>
          <v-col cols="12">
            <v-btn style="margin:20px" type="submit" color="primary">Ajouter</v-btn>
          </v-col>
        </v-row>
      </v-form>
      <v-card style="width:40vw; text-align:center; margin:50px auto; border:2px border-radius:10px; solid grey; box-shadow: 0 0 0.3em silver, 0 0 3em silver, 0 0 0.5em 
    silver;" v-for="(gift, index) in gifts" :key="index" >
    <v-img :src="gift.image"></v-img>
    <v-card-title>{{ gift.title }}</v-card-title>
    <v-card-subtitle>{{ gift.price }}</v-card-subtitle>
    <v-card-text>{{ gift.description }}</v-card-text>

    <v-card-actions>
    </v-card-actions>
  </v-card>
    </v-card>
  </template>

  <style>
  .imageLogo{width:15%}
  
  @media (max-width: 1000px) {
  .imageLogo {
    width: 40%;}
  }
</style>
  
  <script>
  export default {
          name: 'ListPage',
          data() {
      return {
        firstname: this.$route.params.firstname,
        lastname: this.$route.params.lastname,
        gifts: [], // <-- Initialiser à vide
        giftTitle: '',
        giftPrice: '',
        giftDescription: '',
        giftLink: '',
        giftImage: '',
        selectedGift: null
       
      }
    },
    methods: {
      addGift() {
        this.gifts.push({
          title: this.giftTitle,
          price: this.giftPrice,
          description: this.giftDescription,
          link: this.giftLink,
          image: this.giftImage
        })
        this.giftTitle = ''
        this.giftPrice = ''
        this.giftDescription = ''
        this.giftLink = ''
        this.giftImage = '' 
console.log(this.gifts)

       
      },
    
    }
  }
  </script>
  