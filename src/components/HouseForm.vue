<script setup>
import { houseService } from '@/services/HouseService.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';

const houseData = ref({

  bedrooms: 0,
  bathrooms: 0,
  levels: 0,
  imgUrl: '',
  year: 0,
  price: 0,
  description: '',

})

async function createHouse() {
  try {
    Pop.toast('creating')
    await houseService.createHouse(houseData)
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
    <input placeholder="Bedrooms" type="number" required>
    <input placeholder="Bathrooms" type="number" required>
    <input placeholder="Levels" type="number" required>
    <input placeholder="Image URL" type="text">
    <input placeholder="Year" type="number" required>
    <input placeholder="Price" type="number" required>
    <input placeholder="Description" type="text">
    <div class="text-center m-3">
<button class="btn btn-outline-vue">List House</button>
</div>
<hr>



  </form>
</template>


<style lang="scss" scoped></style>