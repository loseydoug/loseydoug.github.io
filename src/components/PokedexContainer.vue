<template>
  <div class="pokedex-container">
    <h1>Welcome to the pokedex!</h1>
    <div>
      <FilterContainer @filterChange="updateSelectedType" />
      <span>Sort</span>
    </div>
    <Pokedex :itemsList="pokedex" :selectedType="selectedType"/>
  </div>
</template>

<script>
import pokedexData from '../assets/pokedex/pokedex.json';
import items from '../assets/pokedex/items.json';
import moves from '../assets/pokedex/moves.json';
import types from '../assets/pokedex/types.json';
import Pokedex from '@/components/Pokedex.vue';
import FilterContainer from '@/components/FilterContainer.vue';

export default {
  name: "PokedexContainer",
  components: {
    Pokedex,
    FilterContainer,
  },
  data: () => {
    return {
      pokedex: pokedexData,
      items,
      moves,
      types,
      selectedType: "",
    }
  },
  methods: {
    updateSelectedType: function(data) {
      this.selectedType = data;
    }
  }

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