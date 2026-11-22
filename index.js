//This is in index.js, i will move them into their own files soon

class Todo{
    constructor(title, description, dueDate, priority, checklist = false){
        //Parameter Validation
        if(typeof title !== "string" || title.trim() === ""){
            throw new TypeError("Title should be a non-empty string");
        }
        if(typeof description !== "string" || description.trim() === ""){
            throw new TypeError("Description should be a non-empty string");
        }
        if (typeof dueDate !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(dueDate)) {
            throw new Error("Date must be a string in YYYY-MM-DD format.");
        }
        if (typeof priority !== "string" || (priority.toLowerCase() !== "high" && priority.toLowerCase() !== "medium" && priority.toLowerCase() !== "low")) {
            throw new Error("Priority should be 'high', 'medium', 'low'.");
        }

        if(typeof checklist !== "boolean"){
            throw new TypeError("Checklist should be a boolean");
        }

        this.id = crypto.randomUUID();
        this.title = title; //The subject line of the todo task
        this.description = description; // Small message expanding upon the title
        this.dueDate = dueDate; // Format needs to be formatted(2020-11-10, YYYY-MM-DD)
        this.priority = priority.toLowerCase(); //Low, Medium, High
        this.checklist = checklist; //Bool
    }
    toggleChecklist(){
        this.checklist = !this.checklist;
    }
    changePriority(priority){
        if (typeof priority !== "string") {
            throw new TypeError("Priority must be a string.");
        }

        if (!["high", "medium", "low"].includes(priority.toLowerCase())) {
            throw new Error("Priority should be 'high', 'medium', 'low'.");
        }

        this.priority = priority.toLowerCase();
    }
    print(){
        console.log(`ID: ${this.id}, Title: ${this.title}, Description: ${this.description}, DueDate: ${this.dueDate}, Priority: ${this.priority}, Checklist: ${this.checklist}`)
    }
}

class Project{
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
const myTask = new Todo("BossTee", "I am working on it", "2026-11-22", "high", true);
const myTask2 = new Todo("Cole", "arr", "2026-54-22", "MEDIUM", true);
const myTask3 = new Todo("adha", "chaining day", "2122-13-88", "low");

const project1 = new Project();

project1.addTodo(myTask);
project1.addTodo(myTask2);
project1.addTodo(myTask3);
project1.print();