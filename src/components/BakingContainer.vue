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
