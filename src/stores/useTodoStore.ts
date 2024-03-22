import { ref } from "vue";
import { defineStore } from 'pinia'
import type { TodoList, TodoData } from '@/types/todoTypes'

export default defineStore('todoStore', () => {

    const todoList = ref<TodoList>([])
    const lastTodoId = ref<number>(1)

    /**
     * Инициализация и загрузка списка задач из localStorage
     */
    const initTodos = ():void => {
        const lsTodos = JSON.parse(localStorage.getItem('todoList'));
        let biggestTodoId = 0;
        lsTodos.forEach(todo => {
            if(todo.id > biggestTodoId) biggestTodoId = todo.id;
            todoList.value.push(todo)
        })
        lastTodoId.value = biggestTodoId;
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
        _syncLocalStorage()
    }

    /**
     * Изменение задачи
     */
    const updateTodo = (todoId:number, todoData:TodoData) => {
        console.log(todoData)
    }

    /**
     * Переключение признака выполненности задачи
     */
    const toggleIsDone = (todoId:number) => {
        const todo = todoList.value.find(todo => todo.id === todoId)
        todo.isDone = !todo.isDone;
        _syncLocalStorage()
    }

    /**
     * Удаление задачи
     */
    const deleteTodos = (todoIds: number[]) => {
        todoIds.forEach(id => {
            const todoIndex = todoList.value.findIndex(todo => todo.id === id);
            todoList.value.splice(todoIndex, 1)
        })
        _syncLocalStorage()
    }

    /**
     * Синхронизация localStorage
     */
    const _syncLocalStorage = () => {
        localStorage.removeItem('todoList');
        localStorage.setItem('todoList', JSON.stringify(todoList.value))
    }

    return {
        todoList,
        initTodos,
        addTodo,
        updateTodo,
        deleteTodos,
        toggleIsDone
    }
})
