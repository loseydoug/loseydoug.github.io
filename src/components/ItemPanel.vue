<template>
  <transition name="expand">
    <div v-if="expanded" class="item-panel">
      <span>Type: {{item.type.join(', ')}}</span>
      <span>Attack: {{item.base.Attack}}</span>
      <span>Defense: {{item.base.Defense}}</span>
      <span>HP: {{item.base.HP}}</span>
      <span>Speed: {{item.base.Speed}}</span>
    </div>
  </transition>
</template>
<script>
  export default {
    name: "itemPanel",
    props: {
      item: {
        type: Object,
        required: true,
      },
      expanded: {
        type: Boolean,
        default: false,
      }
    },
  }
</script>

<style>
  .expand-enter-active, .expand-leave-to {
    transition: all .3s ease;
    height: 66px;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
  }
  .expand-enter-to {
    padding: 10px;
    height: 66px;
  }
  .item-panel {
    padding: 10px;
    height: 66px;
    flex-wrap: wrap;
    display: flex;
  }
  span {
    display: flex;
    flex-direction: column;
    flex: 1 0 50%;
  }
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
  .expand-enter, .expand-leave-to {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }
</style>