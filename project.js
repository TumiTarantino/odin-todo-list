import Todo from './todo.js'

export default class Project{
    constructor(title){
        this.id = crypto.randomUUID();
        this.title = title;
        this.todoContainer = [];
    }
    addTodo(todo){
        if(!(todo instanceof Todo)){
            throw new TypeError("Expected a Todo object/instance");
        }
        this.todoContainer.push(todo);
    }
    //removeTodo(){} //this needs to delete based the uuid, for now i think its cool to leave since dataset hasnt been set in html yet
    print(){
        console.log(this.todoContainer);
    }
}