<script setup lang="ts">
import {ref} from "vue";
import {TodoData} from "@/types/todoTypes";
import TodoList from '@/components/TodoList.vue';
import TodoFilters from '@/components/TodoFilters.vue';
import TodoControls from '@/components/TodoControls.vue';
import AddTodoModal from '@/components/AddTodoModal.vue';

import EditTodoModal from '@/components/EditTodoModal.vue';
import useDeleteMod from "@/composition/useDeleteMod";
import useTodoStore from "@/stores/useTodoStore";

const {
  todoList,
  addTodo,
  updateTodo,
  deleteTodos,
  toggleIsDone
} = useTodoStore()

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

/**
 * Модальное окно редактирвоания задачи
 */
const editModal = ref(false);
const editTodoId = ref<number>(0)
const setEditId = (id) => {
  editTodoId.value = id;
  editModal.value = true
}
const getEditItem = () => {
  return todoList.find(todo => todo.id === editTodoId.value)
}
const editTodo = (todoData: TodoData) => {
  updateTodo(editTodoId.value, todoData)
}
const closeEditModal = () => {
  editModal.value = false;
  editTodoId.value = 0;
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
            @toggle-is-done="toggleIsDone"
            @edit-todo="setEditId"
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
    @close-modal="addModal=false"
    @add-todo="addTodo"
  />

  <EditTodoModal
      v-if="getEditItem()"
      :todo="getEditItem()"
      :is-open="editModal"
      @close-modal="closeEditModal"
      @edit-todo="editTodo"
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
