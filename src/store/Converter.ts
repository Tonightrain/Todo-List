import TodoVM from "./TodoVM";
import Todo from "../model/Todo";

class Converter {
    public static TodoConverterTodoVM(todos:Todo[]): TodoVM[] {
        return todos.map((item) => new TodoVM(item.id,item.content,item.checked))
    }
}

export default Converter
