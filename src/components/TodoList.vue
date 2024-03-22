<script setup lang="ts">
import { defineEmits, defineProps, PropType } from 'vue';
import {TodoList} from "@/types/todoTypes.ts";
import IssTodoItem from '@/components/ui-kit/IssTodoItem.vue';

defineProps({
  todoList: {
    type: Array as PropType<TodoList>,
    default: () => []
  },
  deleteList: {
    type: Array as PropType<number[]>,
    default: () => []
  },
  deleteMode: {
    type: Boolean,
    default: false
  },
})

defineEmits(['checkDeleteItem', 'toggleIsDone', 'editTodo'])
</script>

<template>
  <div class="todo-list_wrapper">
    <IssTodoItem
        v-for="todo in todoList"
        :key="todo.id"
        :todo-item="todo"
        :delete-mode="deleteMode"
        :delete-checked="deleteList.indexOf(todo.id) !== -1"
        @toggle-is-done="$emit('toggleIsDone', todo.id)"
        @edit-todo="$emit('editTodo', todo.id)"
        @check-delete-item="$emit('checkDeleteItem', todo.id)"
    />
  </div>
</template>

<style scoped>
.todo-list_wrapper{
  height: 75%;
  overflow-y: auto;
  scrollbar-color: #673ee1 #2d3038;
  scrollbar-width: thin;
  margin-top: 20px;
  padding-right: 5px;
}
</style>