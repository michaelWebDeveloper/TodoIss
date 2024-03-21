<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import {TodoList} from "@/types/todoTypes.ts";
import IssTaskItem from '@/components/ui-kit/IssTaskItem.vue';

defineProps({
  todoList: {
    type: Array as PropType<TodoList>,
    default: () => []
  }
})
</script>

<template>
  <div class="todo-list_wrapper">
    <IssTaskItem
        v-for="todo in todoList"
        :key="todo.id"
        @changeState="todo.isDone = !todo.isDone"
        :todo-item="todo"
    />
  </div>
</template>

<style scoped>
.todo-list_wrapper{
  height: 75%;
  overflow-y: scroll;
  scrollbar-color: #673ee1 #2d3038;
  scrollbar-width: thin;
  margin-top: 20px;
  padding-right: 5px;
}
</style>