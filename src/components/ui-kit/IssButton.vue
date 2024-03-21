<template>
  <div class="button" @click="$emit('click')">
    {{text}}
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  text: {
    type: String,
    default: '',
  }
})

defineEmits(['click'])
</script>

<style scoped>
.button{
  background-image: var(--accent-gradient-button);
  display: inline-block;
  padding: 7px 34px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  transition: all .2s;
  text-transform: capitalize;
  font-size: 16px;
}
.button:hover {
  box-shadow: 0 0 3px 3px rgba(82, 46, 201, 0.25);
}
</style>