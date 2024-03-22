<script setup lang="ts">
import {Todo, TodoData} from '@/types/TodoTypes'
import {defineProps, defineEmits, ref, PropType, onMounted} from "vue";

import IssInput from '@/components/ui-kit/IssInput.vue';
import IssTextarea from '@/components/ui-kit/IssTextarea.vue';
import IssModal from '@/components/ui-kit/IssModal.vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  todo: {
    type: Object as PropType<Todo>,
    required: false
  }
})

const emit = defineEmits(['closeModal', 'editTodo'])

const todoData = ref<TodoData>({
  name: '',
  description: ''
})

onMounted(() => {
  if(props.todo){
    todoData.value.name = props.todo.name;
    todoData.value.description = props.todo.description;
  }
})

const closeModal = () => {
  emit('closeModal')
  todoData.value = {
    name: '',
    description: ''
  }
}

const EditTodo = () => {
  emit('editTodo', todoData.value)
  closeModal()
}
</script>

<template>
  <IssModal
      title="Редактировать задачу"
      action-button-text="Редактировать"
      :is-open="isOpen"
      @make-action="EditTodo"
      @close-modal="closeModal"
  >
    <form class="todo-form" @submit.prevent>
      <IssInput v-model="todoData.name" id="todo-name" label="Название задачи" />
      <IssTextarea v-model="todoData.description" id="todo-description" label="Описание задачи" />
    </form>
  </IssModal>
</template>
