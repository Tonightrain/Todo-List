import LocalStorage from "../model/LocalStorage";
import store from "../store/store";
import Todo from "../model/Todo";
import Converter from "../store/Converter";
import TodoVM from "../store/TodoVM";
import {mocked} from "ts-jest/utils";

const mockSave = jest.fn();
const mockFetch = jest.fn();
const mockDelete = jest.fn();
const mockAddTodo = jest.fn();
const mockDeleteTodo = jest.fn();
const mockChangeTodoState = jest.fn();
const mockChangeAllTodos = jest.fn();
const mockClearAllCompletedTodos = jest.fn();
const mockTodoConverterTodoVM = jest.fn();

jest.mock("../model/LocalStorage");
mocked(LocalStorage).mockImplementation(() => ({
    id:0,
    todos:[],
    save: mockSave,
    fetch: mockFetch,
    delete: mockDelete,
    addTodo: mockAddTodo,
    deleteTodo: mockDeleteTodo,
    changeTodoState: mockChangeTodoState,
    changeAllTodos: mockChangeAllTodos,
    clearAllCompletedTodos: mockClearAllCompletedTodos
}));


jest.mock("../store/Converter");
mocked(Converter).mockImplementation(()=>({
    TodoConvertTodoVM:mockTodoConverterTodoVM
}))

beforeEach(() => {
    jest.clearAllMocks()
});

describe('LocalStorage.vue', () => {
    test('should add Todo', () => {
        store.state.todoVMS = []
        store.state.localStorage = new LocalStorage()
        const todos = [new Todo('hello-0', 'hello')]
        const todoVMs = [new TodoVM('hello-0', 'hello', false)]
        mockFetch.mockReturnValue(todos)
        mockTodoConverterTodoVM.mockReturnValue(todoVMs)

        store.commit('addTodo', 'hello')

        expect(mockAddTodo).toHaveBeenCalledTimes(1);
        expect(mockAddTodo).toHaveBeenCalledWith('hello')
    })
    test('should deleteTodo', () => {
        store.state.todoVMS = []
        store.state.localStorage = new LocalStorage()
        const todos = [new Todo('hello-0', 'hello')]
        mockFetch.mockReturnValue(todos)

        store.commit('deleteTodo', 'hello-0')

        expect(mockDeleteTodo).toHaveBeenCalledTimes(1);
        expect(mockDeleteTodo).toHaveBeenCalledWith('hello-0')
    })
    test('should changeChecked', () => {
        store.state.todoVMS = []
        store.state.localStorage = new LocalStorage()
        const todos = [new Todo('hello-0', 'hello')]
        mockFetch.mockReturnValue(todos)

        store.commit('changeChecked', 'hello-0')

        expect(mockChangeTodoState).toHaveBeenCalledTimes(1);
        expect(mockChangeTodoState).toHaveBeenCalledWith('hello-0')
    })
    test('should changeAllChecked', () => {
        store.state.todoVMS = []
        store.state.localStorage = new LocalStorage()
        const todos = [new Todo('hello-0', 'hello'),new Todo('world-1','world')]
        mockFetch.mockReturnValue(todos)

        store.commit('changeAllChecked')

        expect(mockChangeAllTodos).toHaveBeenCalledTimes(1);
    })
    test('should clearAllCompleted', () => {
        store.state.todoVMS = []
        store.state.localStorage = new LocalStorage()
        const todos = [new Todo('hello-0', 'hello')]
        mockFetch.mockReturnValue(todos)

        store.commit('changeChecked','hello-0')

        store.commit('clearAllCompleted')

        expect(mockClearAllCompletedTodos).toHaveBeenCalledTimes(1);
    })
})








