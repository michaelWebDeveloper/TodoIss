<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,17H7V7H17V17Z" />
  </svg>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  size: {
    type: Number,
    default: 20,
  }
})
</script>