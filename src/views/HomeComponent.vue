<template>
 <img src="https://www.plkdenoetique.com/wp-content/uploads/2013/12/cadeaux.jpg" alt="Gift Box">
  <v-container>
    <v-row>
      <v-col cols="12" md="6" style="flex-direction:column;">
    <form-add-list/>
  </v-col>
  <v-col cols="12" md="6" style="flex-direction:column;">
    <form-search-list/>
  </v-col>
  </v-row>
 </v-container>

</template>

<script>
import FormAddList from '@/views/FormAddList.vue';
import FormSearchList from '@/views/FormSearchList.vue';

export default {
  name: 'HomeComponent',
  components: {
    FormAddList,
    FormSearchList
  }
}

</script>

<style>
img{
  width:20%
}
@media (max-width: 1000px) {
  img {
    width: 40%;}
  }
</style>