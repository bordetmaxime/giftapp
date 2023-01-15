<template>
  <div class="d-flex flex-column justify-center align-center" style="margin-left:15px">
      <img class="imageLogo" src="https://www.plkdenoetique.com/wp-content/uploads/2013/12/cadeaux.jpg" alt="Gift Box">
   <h2 style="color:grey">Vous êtes sur la liste de  {{ firstnameSearch}} {{ lastnameSearch }}.</h2>
  </div>
 
  <v-card>
     <v-col cols="8" md="4" class="mx-auto">
  <v-card style=" text-align:center; margin:50px auto; border:2px border-radius:10px; solid grey; box-shadow: 0 0 0.3em silver, 0 0 3em silver, 0 0 0.5em 
    silver;" v-for="gift in gifts" :key="gift.id" >
      <img style="width:20%; margin-top:10px" :src="gift.image" alt="Gift Box">
  <v-card-title>{{ gift.title }}</v-card-title>
  <v-card-subtitle>{{ gift.price }}</v-card-subtitle>
  <v-card-text>{{ gift.description }}</v-card-text>
  <a style="text-decoration: none; color:black" :href="gift.link">lien</a>
  <v-card-actions>
    <v-btn  style="margin:auto" v-if="gifts.length > 0" color="primary" @click="openReservationForm(gift)">Réserver</v-btn>
  </v-card-actions>
</v-card>
</v-col>
    <v-dialog v-model="showReservationForm" max-width="500px">
      <v-card >
      
        <v-card-title>Réservation</v-card-title> 
        <v-form class="px-4 py-2" @submit.prevent="submitReservation">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field label="Nom" v-model="reservationName" />
            </v-col>
<v-col cols="12" sm="6">
              <v-text-field label="Prénom" v-model="reservationSurname" />
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email" v-model="reservationEmail" />
            </v-col>
            <v-col cols="12">
              <v-btn type="submit" color="primary">Valider</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-dialog>
   <v-alert v-if="reservationSuccess" type="success">Félicitation {{ reservationSurname }} l'article est bien reservé! :)</v-alert>
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
      firstnameSearch: this.$route.params.firstnameSearch,
      lastnameSearch: this.$route.params.lastnameSearch,
      gifts: [{
        id:1,
        title: "Chaussure de ski",
        price: "99€99",
        description: "Taille 38, blanche,",
        link: "https://www.intersport.fr/blanc-chaussures_de_ski_femme_kiara_60-rossignol-p-RBL8660ENS/?lgw_code=14544-RBL8660ENS27&gclid=CjwKCAiA5Y6eBhAbEiwA_2ZWIaC5q3FA5bBaY9QDcEs1u7TzCv2QRdGH6Di_lVJFIWsv-X2iRwOXGxoC6gIQAvD_BwE",
      image : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0AZ2ZeHVMiPPy1sk_msq6I9L5XHxKJ19ysOpuYac8vkw43D45zoRKt2shlJvfbQ3kymip5J7JssYr&usqp=CAc"
      },
 { id:2,
        title: "Dvd Bloodsport",
        price: "16€87",
        description: "Dvd Bloodsport film de karaté ",
        link: "https://www.fnac.com/a1364508/Bloodsport-DVD-Zone-1-Jean-Claude-Van-Damme-DVD-Zone-1?Origin=SEA_GOOGLE_PLA_DVD&esl-k=sem-google%7cnu%7cc588524944755%7cm%7ck1880466773477%7cp%7ct%7cdc%7ca134412336173%7cg16608760279&gclid=CjwKCAiA5Y6eBhAbEiwA_2ZWIQGykRI_KEkRNfsUpAAorOJAHpdBhdLzSpUPUNC21GAqulM9QVXyGRoC1asQAvD_BwE&gclsrc=aw.ds",
        image: "https://fr.shopping.rakuten.com/photo/1252678287_ML.jpg"
      },   
    
    ], 
      showReservationForm: false,
      reservationName: '',
      reservationSurname: '',
      reservationEmail: '',
      reservationSuccess: false,
      selectedGift: null
    }
  },
  methods: {
    openReservationForm(gift) {
      this.showReservationForm = true
      this.selectedGift = gift
    },
    submitReservation() {
      // send reservation details to server or store in local storage
      this.gifts.splice(this.gifts.indexOf(this.selectedGift), 1)
      this.showReservationForm = false
      this.reservationSuccess = true
    }
  }
}
</script>
