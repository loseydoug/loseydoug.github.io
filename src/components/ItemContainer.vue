<template>
  <div>
    <div @click="toggleExpand" class="item-container">{{ item.id }}: {{ item.name.english }}</div>
    <ItemPanel :item="item" :expanded="expanded" />
  </div>
</template>
<script>
import ItemPanel from "./ItemPanel.vue"
export default {
  name: "itemContainer",
  components: {
    ItemPanel,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      expanded: false
    } 
  },
  mounted() {
    this.item.expanded = false;
  },
  methods: {
    toggleExpand: function() {
      console.log('here');
      this.expanded = !this.expanded;
    }
  },
}
</script>

<style scoped>
  .item-container {
    background-color: lightgrey;
    border: 1px solid black;
    border-radius: 5px 5px 0 0;
    margin: 10px 0 0;
    width: 50%;
  }
</style>