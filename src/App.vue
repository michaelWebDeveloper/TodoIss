<script setup lang="ts">
import {ref} from "vue";
import TodoList from '@/components/TodoList.vue';
import TodoFilters from '@/components/TodoFilters.vue';
import TodoControls from '@/components/TodoControls.vue';

/* temporary */
import AddTodoModal from '@/components/ui-kit/AddTodoModal.vue';
import todos from "@/todos";
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
  <AddTodoModal />
</template>

<style scoped>


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
  height: 100%;

}
.todo-todo_list{
  margin-left: 3%;
  width: 67%;
  height: 100%;
}
</style>
