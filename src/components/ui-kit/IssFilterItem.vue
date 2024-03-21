<script setup lang="ts">
import { defineEmits, defineProps} from "vue";


defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  }
})

defineEmits(['changeState'])
</script>

<template>
    <div class="filter-item" :class="{active: isActive}">
      <slot></slot>
      <div class="filter-item_text">{{text}}</div>
    </div>

</template>

<style scoped>
.filter-item{
  padding: 7px 8px;
  border-radius: 10px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  color: var(--icon-color);
  cursor: pointer;
  user-select: none;
}
.filter-item:hover{
  background-color: var(--background-interactable-hover);
}
.filter-item_text{
  font-size: 16px;
  margin-left: 10px;
}
.active{
  background-color: var(--background-interactable);
}
</style>