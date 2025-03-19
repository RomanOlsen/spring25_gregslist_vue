<script setup>
import { AppState } from '@/AppState.js';
import HouseForm from '@/components/HouseForm.vue';
import HouseListing from '@/components/HouseListing.vue';
import { houseService } from '@/services/HouseService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const houses = computed(() => AppState.houses)

onMounted(() => {
  getHouses()
})



async function getHouses() {
  try {
    Pop.toast('getting houses')
    await houseService.getHouses()
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-3"></div>
      <HouseForm />
    </div>
    <div class="row mt-5">
      <h1 class="text-center">HOUSES FOR SALE</h1>
      <hr>
      <div v-for="house in houses" :key="house.id" class="col-6">
        <HouseListing :house-prop="house" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>