<script setup>
import { AppState } from '@/AppState.js';
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
  <h1>HOUSES FOR SALE</h1>
  <div class="container">
    <div class="row">
      <div v-for="house in houses" class="col-6">
        <HouseListing :house-prop="house" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>