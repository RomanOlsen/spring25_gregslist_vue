<script setup>
import { houseService } from '@/services/HouseService.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';

const houseData = ref({

  bedrooms: null,
  bathrooms: null,
  levels: null,
  imgUrl: '',
  year: null,
  price: null,
  description: '',

})

async function createHouse() {
  try {
    Pop.toast('creating')
    await houseService.createHouse(houseData.value)
    Pop.toast('should be done!')
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>

  <h1 class="text-center">List a House</h1>
  <hr>
  <form @submit.prevent="createHouse()">
    <input v-model="houseData.bedrooms" placeholder="Bedrooms" type="number" required>
    <input v-model="houseData.bathrooms" placeholder="Bathrooms" type="number" required>
    <input v-model="houseData.levels" placeholder="Levels" type="number" required>
    <input v-model="houseData.imgUrl" placeholder="Image URL" type="text">
    <input v-model="houseData.year" placeholder="Year" type="number" required>
    <input v-model="houseData.price" placeholder="Price" type="number" required>
    <input v-model="houseData.description" placeholder="Description" type="text">
    <div class="d-flex justify-content-between mt-3">
      <button type="reset" class="btn btn-outline-danger">Clear Form</button>
      <button type="submit" class="btn btn-outline-vue">List House</button>

    </div>
    <hr>



  </form>
</template>


<style lang="scss" scoped></style>