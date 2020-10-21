class TodoVM {
    id:string;
    content: string;
    checked: boolean;

    constructor(id: string, content: string, checked: boolean) {
        this.id = id;
        this.content = content
        this.checked = checked
    }
}

export default TodoVM
