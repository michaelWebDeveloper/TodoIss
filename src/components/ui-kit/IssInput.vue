<script setup>
import { defineProps } from 'vue';

defineProps({
  id: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  modalValue: {
    type: String,
    required: true
  },
  errorMessage: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modalValue'])
</script>

<template>
  <div class="iss-input">
    <label class="iss-input_label" :for="id">{{label}}</label>
    <input
        class="iss-input_input"
        type="text"
        :id="id"
        :value="modalValue"
        @input="$emit('update:modalValue')"
    >
    <p v-if="errorMessage.length" class="iss-input_error">{{errorMessage}}</p>
  </div>
</template>

<style scoped>
.iss-input{
  margin-top: 10px;
}
.iss-input_input{
  width: 100%;
  background-color: var(--background-interactable);
  color: var(--text-color);
  border: none;
  padding: 12px 15px 10px 15px;
  border-radius: 10px;
  font-size: 16px;
}
.iss-input_input:focus{
  outline: none;
  box-shadow: 0 0 3px 3px rgba(255, 255, 255, 0.02);
}
</style>