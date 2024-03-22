<script setup>
import { defineProps } from 'vue';

defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  errorMessage: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="iss-input">
    <label class="iss-input_label" :for="id">{{label}}</label>
    <input
        class="iss-input_input"
        type="text"
        maxlength="70"
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
    <p v-if="errorMessage.length" class="iss-input_error">{{errorMessage}}</p>
  </div>
</template>

<style scoped>
.iss-input{
  margin-top: 10px;
}
.iss-input_label{
  font-size: 11px;
  color: var(--icon-color);
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