import Todo from "../model/Todo";

class LocalStorage {
    todos: Todo[];

    id: number;

    constructor() {
        this.todos = this.fetch('todos')
        this.id = this.todos.length
    }

    save(key: any, value: any) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    fetch(key: any) {
        const data = localStorage.getItem(key)
        return data === null ? [] : JSON.parse(data)
    }

    delete(key: any) {
        localStorage.removeItem(key)
    }

    addTodo(content: string) {
        this.todos.push(new Todo(`${content}-${this.id++}`, content))
        this.save('todos', this.todos)
    }

    deleteTodo(todoId: string) {
        this.todos = this.todos.filter((item) => item.id !== todoId)
        this.save('todos', this.todos)
    }

    changeTodoState(todoId: string) {
        this.todos.forEach((item) => {
            if (item.id === todoId) {
                item.checked = !item.checked
            }
        })
        this.save('todos', this.todos)
    }

    changeAllTodos() {
        this.todos.find((item)=> item.checked === false) !== undefined ?
            this.todos.map((item) => item.checked =true):
            this.todos.map((item) => item.checked=false)
        this.save('todos',this.todos)
    }

    clearAllCompletedTodos() {
        this.todos = this.todos.filter((item) => item.checked === false)
        this.save('todos',this.todos)
    }
}

export default LocalStorage
