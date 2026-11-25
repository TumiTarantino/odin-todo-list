import Todo from './todo.js'

export default class Project{
    constructor(title){
        this.id = crypto.randomUUID();
        this.title = title;
        this.todos = [];
        //Might add description property later
    }
    addTodo(todo){
        if(!(todo instanceof Todo)){
            throw new TypeError("Expected a Todo object/instance");
        }
        this.todos.push(todo);
    }
    removeTodo(todo){
        if(!(todo instanceof Todo)){
            throw new TypeError("Expected a Todo object/instance");
        }
        const index = this.todos.findIndex((p) => p.id === todo.id);
        if (index !== -1) {
            this.todos.splice(index, 1);
            return true;
        }
        else{
            console.warn("Todo not deleted");
            return false;
        }
    }
    print(){
        console.log(this.todos);
    }
}