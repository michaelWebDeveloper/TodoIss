<script setup lang="ts">
import { TodoData } from '@/types/TodoTypes'
import { defineProps, defineEmits, ref } from "vue";

import IssInput from '@/components/ui-kit/IssInput.vue';
import IssTextarea from '@/components/ui-kit/IssTextarea.vue';
import IssModal from '@/components/ui-kit/IssModal.vue';

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['closeModal', 'addTodo'])

const todoData = ref<TodoData>({
  name: '',
  description: ''
})

const closeModal = () => {
  emit('closeModal')
  todoData.value = {
    name: '',
    description: ''
  }
}

const addTodo = () => {
  emit('addTodo', todoData.value)
  closeModal()
}
</script>

<template>
  <IssModal
      title="Добавить задачу"
      :is-open="isOpen"
      @make-action="addTodo"
      @close-modal="closeModal"
  >
    <form class="todo-form" @submit.prevent>
      <IssInput v-model="todoData.name" id="todo-name" label="Название задачи" />
      <IssTextarea v-model="todoData.description" id="todo-description" label="Описание задачи" />
    </form>
  </IssModal>
</template>
