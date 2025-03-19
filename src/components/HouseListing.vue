<script setup>
import { House } from '@/models/House.js';


defineProps({
  houseProp: { type: House, required: true }
})

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
    <div></div>
  </div>

</template>


<style lang="scss" scoped></style>