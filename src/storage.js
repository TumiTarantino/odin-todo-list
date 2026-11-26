import Todo from "./todo.js";
import Project from "./project.js";

function saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
}

function loadProjects() {
    //Is a JSON string 
    const projects = localStorage.getItem("projects");

    if (!projects) return null;
    
    //Parsing that json string into object, returns an array of projects
    const parsedProjects = JSON.parse(projects);

    //Will take the restored projects
    const reconstructedProjects = [];

    for(let i = 0 ; i < parsedProjects.length; i++){
        //This creates a restored project
        let project = new Project(parsedProjects[i].title);

        //This loop creates all the Todos in a project
        for(let j = 0; j < parsedProjects[i].todos.length; j++){
            //Has data needed to create a new todo
            const todoData = parsedProjects[i].todos[j];
            const todo = new Todo(todoData.title, todoData.description, todoData.dueDate, todoData.priority, todoData.checklist);

            //Sets the restored todo's id to the original todo's id
            todo.id = todoData.id;
            project.addTodo(todo);
        }
        reconstructedProjects.push(project);
    }
    return reconstructedProjects;
}



export {saveProjects, loadProjects};