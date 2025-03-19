<script setup>
import { houseService } from '@/services/HouseService.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';


onMounted(() => {
  getHouses()
})

async function getHouses(){
  try {
    Pop.toast('getting houses')
    await houseService.getHouses()
  }
  catch (error){
    Pop.error(error);
  }
}

</script>


<template>
<div>homes</div>
</template>


<style lang="scss" scoped>

</style>