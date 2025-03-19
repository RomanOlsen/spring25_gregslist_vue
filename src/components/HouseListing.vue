<script setup>
import { House } from '@/models/House.js';


defineProps({
  houseProp: { type: House, required: true }
})

</script>


<template>
  <div class="card">
    <div class="card-header"> {{ houseProp.year }} A.D. House | {{ houseProp.bedrooms }} Bed | {{ houseProp.bathrooms }}
      Bath | {{ houseProp.levels }} Stories </div>
    <div>Price: ${{ houseProp.price }}</div>
    <span class="mdi mdi-house"></span>
    <img :src="houseProp.imgUrl" alt="House picture">
    <div></div>
  </div>

</template>


<style lang="scss" scoped></style>