<script setup lang="ts">
import { onMounted } from "vue";
import TodoApp from '@/views/TodoApp.vue'
import useTodoStore from "@/stores/useTodoStore";

const { initTodos } = useTodoStore()

onMounted(() => {
  initTodos()
})


</script>

<template>
  <TodoApp />
</template>

