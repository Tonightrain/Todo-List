import Vue from 'vue';
import Vuex from 'vuex'
import TodoVM from "@/viewModel/TodoVM";
import LocalStorage from "@/model/LocalStorage";
import Converter from "@/viewModel/Converter";
import {Filter} from "@/viewModel/Filter";

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
        // listFilter(state, filter: string) {
        //     switch (filter) {
        //         case Filter.All:
        //             // state.todoVMS = Converter.TodoConverterTodoVM(localStore.todos)
        //             return state.todoVMS
        //             break
        //         case Filter.Active:
        //             // state.todoVMS = Converter.TodoConverterTodoVM(localStore.todos)
        //             state.todoVMS = state.todoVMS.filter((item) => item.checked === false)
        //             return state.todoVMS
        //             break
        //         case Filter.Completed:
        //             state.todoVMS = state.todoVMS.filter((item) => item.checked === true)
        //             return state.todoVMS
        //             break
        //         default:
        //             return state.todoVMS
        //     }
        // }

    },
    // getters: {
        // showTodoNums(state): string {
        //     const num = state.todoList.filter((item) => item.checked === false).length
        //     return num <= 1 ? `${num} item left` : `${num} items left`
        // },
        // isHasCompleted(state): boolean {
        //     return state.todoList.filter((item: any) => item.checked === true).length === 0
        // // },
        // isListNull(state): boolean {
        //     return state.todoList.length == 0
        // },
        // isExistTodo(state): boolean {
        //     return state.todoList.find((item: any) => item.checked === false) === undefined
        // }
    // }
})

export default store

// export class StoreInterface{
//     todoVMS: TodoVM[] | undefined;
// }
