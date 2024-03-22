<script setup lang="ts">
import {ref} from "vue";
import TodoList from '@/components/TodoList.vue';
import TodoFilters from '@/components/TodoFilters.vue';
import TodoControls from '@/components/TodoControls.vue';
import AddTodoModal from '@/components/ui-kit/AddTodoModal.vue';

import useDeleteMod from "@/composition/useDeleteMod";
import useTodoStore from "@/stores/useTodoStore";

const { todoList, addTodo, deleteTodos } = useTodoStore()

const {
  deleteMod,
  deleteList,
  toggleDeleteItem,
  cancelDeleteMod
} = useDeleteMod()

const deleteSelectedTodos = () => {
  deleteTodos(deleteList.value)
  cancelDeleteMod()
}


/**
 * Модальное окно добавления задачи
 */
const addModal = ref(false);
const closeModal = () => {
  addModal.value = false;
}

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
        <TodoList
            :todo-list="todoList"
            :delete-mode="deleteMod"
            :delete-list="deleteList"
            @check-delete-item="toggleDeleteItem"
        />
        <TodoControls
            :delete-mode="deleteMod"
            :has-selected="!!deleteList.length"
            :has-todos="!!todoList.length"
            @set-delete-mod="deleteMod=true"
            @delete-selected="deleteSelectedTodos"
            @cancel-delete-mod="cancelDeleteMod"
            @add-todo="addModal=true"
        />
      </main>
    </div>
  </div>
  <AddTodoModal
      :is-open="addModal"
      @close-modal="closeModal"
      @add-todo="addTodo"
  />
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
