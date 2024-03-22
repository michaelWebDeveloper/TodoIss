import { ref } from "vue";
import { defineStore } from 'pinia'
import type { TodoList, TodoData } from '@/types/todoTypes'
import {filterStates} from "@/consts/filter";

export default defineStore('todoStore', () => {

    const todoList = ref<TodoList>([]);
    const lastTodoId = ref<number>(1);
    const filterState = ref<number>(1);

    /**
     * Получить список
     */
    const getTodoList = () => {
        if(filterState.value === filterStates['ALL']){
            return todoList.value;
        }

        if(filterState.value === filterStates['IN_PROGRESS']) {
            return todoList.value.filter((todo) => {
                return !todo.isDone
            })
        }

        if(filterState.value === filterStates['DONE']) {
            return todoList.value.filter((todo) => {
                return todo.isDone
            })
        }
    }

    /**
     * Установить состояние фильтров
     */
    const setFilterState = (state) => {
        filterState.value = state;
    }

    /**
     * Инициализация и загрузка списка задач из localStorage
     */
    const initTodos = ():void => {
        const lsTodos = JSON.parse(localStorage.getItem('todoList'));
        let biggestTodoId = 1;
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
        lastTodoId.value = lastTodoId.value + 1
        todoList.value.push({
            id: lastTodoId.value,
            ...todoData,
            isDone: false,
        })
        _syncLocalStorage()
    }

    /**
     * Изменение задачи
     */
    const updateTodo = (todoId:number, todoData:TodoData) => {
        const todo = todoList.value.find(todo => todo.id === todoId)
        todo.name = todoData.name;
        todo.description = todoData.description
        _syncLocalStorage()
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
        filterState,
        getTodoList,
        setFilterState,
        initTodos,
        addTodo,
        updateTodo,
        deleteTodos,
        toggleIsDone
    }
})
