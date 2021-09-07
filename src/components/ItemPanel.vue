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
    background-color: #eee;
    overflow: hidden;
  }
  .expand-enter-to {
    height: 66px;
  }
  .item-panel {
    height: 66px;
    flex-wrap: wrap;
    display: flex;
    background-color: #e0f0ff;
    border-radius: 0 0 5px 5px;
    border: 1px solid black;
    width: 50%
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
    opacity: 0;
  }
</style>