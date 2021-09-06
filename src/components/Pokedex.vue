<template>
  <div class="pokedex">
    <div v-for="item in itemsList" :key="item.id">
      <ItemContainer v-if="!selectedType || item.type.includes(selectedType)" :item="item"/>
    </div>
  </div>
</template>

<script>
import pokedex from '../assets/pokedex/pokedex.json';
import ItemContainer from './ItemContainer.vue';
export default {
  components: { ItemContainer },
  name: "Pokedex",
  props: {
    itemsList: {
      type: Array,
      default: () => [],
    },
    selectedItem: {
      type: Object,
      default: () => {},
    },
    selectedType: {
      type: String,
      default: "",
    }
  },
  data: () => {
    return {
      pokedex
    }
  },
};
</script>

