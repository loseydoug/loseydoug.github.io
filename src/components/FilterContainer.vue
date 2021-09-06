<template>
  <select @change="FilterChanged">
    <option default value="">Filter by Type</option>
    <option v-for="type in types" :key="type.english" :value="type.english">{{type.english}}</option>
  </select>
</template>

<script>
import types from "../assets/pokedex/types.json";
export default {
  name: "FilterContainer",
  data() {
    return {
      types
    }
  },
  methods: {
    FilterChanged: function(evt) {
      console.log('here')
      this.$emit("filterChange", evt.target.value);
    }
  }
}
</script>
