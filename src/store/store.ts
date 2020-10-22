import Vue from 'vue';
import Vuex from 'vuex'
import TodoVM from "@/store/TodoVM";
import LocalStorage from "../model/LocalStorage";
import Converter from "../store/Converter";

Vue.use(Vuex)

const localStore = new LocalStorage()

const todoVMS: TodoVM[] = Converter.TodoConverterTodoVM(localStore.todos)

const store = new Vuex.Store({
    state: {
        todoVMS,
        localStorage: localStore
    },
    mutations: {
        addTodo(state, content: string) {
            state.localStorage.addTodo(content)
            state.todoVMS = Converter.TodoConverterTodoVM(state.localStorage.todos)
        },
        deleteTodo(state, todoId: string) {
            state.localStorage.deleteTodo(todoId)
            state.todoVMS = Converter.TodoConverterTodoVM(state.localStorage.todos)
        },
        changeChecked(state: any, todoId: string): void {
            state.localStorage.changeTodoState(todoId)
            state.todoVMS = Converter.TodoConverterTodoVM(state.localStorage.todos)
        },
        changeAllChecked(state) {
            state.localStorage.changeAllTodos()
            state.todoVMS = Converter.TodoConverterTodoVM(state.localStorage.todos)
        },
        clearAllCompleted(state) {
            state.localStorage.clearAllCompletedTodos()
            state.todoVMS = Converter.TodoConverterTodoVM(state.localStorage.todos)
        },
    },
})

export default store
