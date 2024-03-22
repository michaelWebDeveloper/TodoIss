<template>
  <div class="button" :class="{[variant]: true}" @click="$emit('click')">
    {{text}}
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  text: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'primary'
  }
})

defineEmits(['click'])
</script>

<style scoped>
.button{
  display: inline-block;
  padding: 7px 34px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  transition: all .2s;
  text-transform: capitalize;
  font-size: 16px;
  user-select: none;
}
.primary{
  background-image: var(--accent-gradient-button);
}
.primary:hover {
  box-shadow: 0 0 3px 3px rgba(82, 46, 201, 0.25);
}

.danger{
  background-image: var(--danger-gradient-button);
}
.danger:hover {
  box-shadow: 0 0 3px 3px rgba(139, 46, 201, 0.25);
}

.gray{
  background-image: var(--gray-gradient-button);
}
.gray:hover {
  box-shadow: 0 0 3px 3px rgba(60, 58, 61, 0.25);
}
</style>