import LocalStorage from "../model/LocalStorage";
import Todo from "../model/Todo";

describe('LocalStorage.vue', () => {
    const localStore = new LocalStorage()

    beforeEach(() => {
        localStorage.clear()
    });
    test('should add Todo', () => {
        localStore.addTodo("hello")
        const todo = new Todo('hello-0', 'hello')
        const todos: Todo[] = localStore.fetch('todos')

        expect(todos).toHaveLength(1)
        expect(todos[0]).toEqual(todo)
    })
    test('should delete Todo', () => {
        localStore.addTodo("hello")
        localStore.deleteTodo('hello-0')
        const todos: Todo[] = localStore.fetch('todos')

        expect(todos).toHaveLength(0)
    })
    test('should change Todo state', () => {
        localStore.addTodo("hello")
        localStore.changeTodoState('hello-0')
        const todos: Todo[] = localStore.fetch('todos')

        expect(todos[0].checked).toBe(true)
    })
    test('should change All Todos', () => {
        localStore.addTodo("hello")
        localStore.addTodo("world")
        localStore.changeAllTodos()
        const todos: Todo[] = localStore.fetch('todos')

        expect(todos[0].checked).toBe(true)
        expect(todos[1].checked).toBe(true)
    })
    test('should clear all completed Todos', () => {
        localStore.addTodo("hello")
        localStore.addTodo("world")
        localStore.changeAllTodos()
        localStore.clearAllCompletedTodos()
        const todos: Todo[] = localStore.fetch('todos')

        expect(todos.length).toBe(0)
    })
})
