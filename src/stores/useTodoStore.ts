import { ref } from "vue";
import { defineStore } from 'pinia'
import type { TodoList, TodoData } from '@/types/todoTypes'

export default defineStore('todoStore', () => {

    const todoList = ref<TodoList>([])
    const lastTodoId = ref<number>(0)

    /**
     * Инициализация и загрузка списка задач из localStorage
     */
    const initTodos = ():void => {
    }

    /**
     * Добавление задачи
     */
    const addTodo = (todoData:TodoData):void => {
        todoList.value.push({
            id: lastTodoId.value++,
            ...todoData,
            isDone: false,
        })
    }

    /**
     * Изменение задачи
     */
    const updateTodo = (todoId, todoData) => {
        console.log(todoData)
    }

    /**
     * Удаление задачи
     */
    const deleteTodos = (todoIds: number[]) => {
        todoIds.forEach(id => {
            const todoIndex = todoList.value.findIndex(todo => todo.id === id);
            todoList.value.splice(todoIndex, 1)
        })
    }

    /**
     * Синхронизация localStorage
     */
    const _syncLocalStorage = () => {

    }

    return {
        todoList,
        initTodos,
        addTodo,
        updateTodo,
        deleteTodos
    }
})
