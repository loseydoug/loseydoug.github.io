<template>
  <div class="bakery-container">
    <h1>Welcome to the Bakery!</h1>
    <div v-for="item in menu" :key="item.id">
      <h2>{{item.name}}</h2>
      <p v-if="item.flavors">Flavors: {{item.flavors.join(", ")}}</p>
      <h3>{{item.price}}</h3>
    </div>
  </div>
</template>

<script>
import bakingData from '../assets/Baking.json';

export default {
  name: "BakingContainer",
  data: () => {
    return {
      menu: bakingData.menu
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  .pokedex-container {
    font-family: 'VT323', monospace;
    font-size: 20px;
  }
  h1 {
    font-size: 30px;
  }
</style>