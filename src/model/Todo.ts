class Todo {
    id:string;
    content: string;
    checked: boolean;

    constructor(id:string,content:string) {
        this.id = id;
        this.content = content
        this.checked = false
    }
}

export default Todo
