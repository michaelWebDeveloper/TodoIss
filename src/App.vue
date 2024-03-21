<script setup lang="ts">
import {ref} from "vue";
import todos from "@/todos";
import TodoList from '@/components/TodoList.vue';
import TodoFilters from '@/components/TodoFilters.vue';
import TodoControls from '@/components/TodoControls.vue';

const todoItems = ref(todos)
</script>

<template>
  <div class="container">

    <!-- Headline -->
    <h1 class="headline">
      todo
      <span class="headline-accent">iss.</span>
    </h1>

    <!-- Wrapper -->
    <div class="todo">
      <!-- Filters -->
      <aside class="card todo-filters">
        <h2 class="todo-title">Фильтры</h2>
        <TodoFilters />
      </aside>

      <!-- TodoList -->
      <main class="card todo-todo_list">
        <h2 class="todo-title">Задачи</h2>
        <TodoList :todo-list="todoItems"></TodoList>
        <TodoControls />
      </main>
    </div>
  </div>
</template>

<style scoped>
.card{
  background: var(--background-soft);
  box-shadow: 0 0 12px 12px #00000014;
  border-radius: 25px;
  height: 100%;
  padding: 30px;
}

.headline{
  font-size: 50px;
  margin-bottom: 30px;
}

.headline-accent{
  background-image: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.todo{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
}

.todo-filters{
  width: 30%;

}
.todo-todo_list{
  margin-left: 3%;
  width: 67%
}

.todo-title{
  color: #9b9eea;
  font-size: 26px;
  text-transform: capitalize;
}
</style>
