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
  <div class="iss-textarea">
    <label class="iss-textarea_label" :for="id">{{label}}</label>
    <textarea
        class="iss-textarea_textarea"
        cols="30"
        rows="5"
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
    <p v-if="errorMessage.length" class="iss-textarea_error">{{errorMessage}}</p>
  </div>
</template>

<style scoped>
.iss-textarea{
  margin-top: 10px;
}
.iss-textarea_label{
  font-size: 11px;
  color: var(--icon-color);
}
.iss-textarea_textarea{
  width: 100%;
  background-color: var(--background-interactable);
  color: var(--text-color);
  border: none;
  padding: 12px 15px 10px 15px;
  border-radius: 10px;
  font-size: 16px;
}
.iss-textarea_textarea:focus{
  outline: none;
  box-shadow: 0 0 3px 3px rgba(255, 255, 255, 0.02);
}
</style>