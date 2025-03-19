<script setup>
import { AppState } from '@/AppState.js';
import { House } from '@/models/House.js';
import { houseService } from '@/services/HouseService.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';

const account = computed(() => AppState.account)

defineProps({
  houseProp: { type: House, required: true }
})

async function deleteHouse(houseID) {

  const confirmation = await Pop.confirm('Hey bro are you sure you want to delete this house?')
  if (!confirmation) {
    return
  }

  try {
    Pop.toast('deleting house')
    await houseService.deleteHouse(houseID)
  }
  catch (error) {
    Pop.error(error);
  }

  // NOTE this method i tried does not work
  // const confirmation = Pop.confirm('Hey bro are you sure you want to delete this house?')
  // if (!confirmation) {
  //   return
  // } else {

  //   try {
  //     Pop.toast('deleting house')
  //     await houseService.deleteHouse(houseID)
  //   }
  //   catch (error) {
  //     Pop.error(error);
  //   }
  // }

}

</script>


<template>
  <div class="card">


    <div class="card-header">
      <span class="mdi mdi-home">
        {{ houseProp.year }} A.D. House | {{ houseProp.bedrooms }} Bed | {{ houseProp.bathrooms }} Bath | {{
          houseProp.levels }} Stories
      </span>
    </div>
    <div>Price: ${{ houseProp.price }}</div>
    <img :src="houseProp.imgUrl" alt="House picture">

    <button @click="deleteHouse(houseProp.id)" v-if="houseProp.creatorId == account?.id" class="btn">Delete</button>


  </div>

</template>


<style lang="scss" scoped></style>