<template>
  <div>
    <div @click="toggleExpand">{{ item.name.english }}
      <ItemPanel :item="item" :expanded="expanded" />
    </div>
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