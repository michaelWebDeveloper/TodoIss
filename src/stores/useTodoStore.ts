import { ref } from "vue";
import { defineStore } from 'pinia'
import type { TodoList } from '@/types/todoTypes'

export const useTodoStore = defineStore('todoStore', () => {

    const todoList = ref<TodoList | null>(null)
    const lastTodoId = ref<number>(0)

    /**
     * app loading, getting todos out of localstorage
     */
    const initTodos = () => {}

    /**
     * adding todoItem to a list
     */
    const addTodo = (todoData) => {
        console.log(todoData)
    }

    /**
     * updating values of a todoItem
     */
    const updateTodo = (todoId, todoData) => {
        console.log(todoData)
    }

    /**
     * deleting todoItem
     */
    const deleteTodo = (todoId) => {
        console.log(todoId)
    }

    return {
        todoList,
        initTodos,
        addTodo,
        updateTodo,
        deleteTodo
    }
})
