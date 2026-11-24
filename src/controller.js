// Coordinates the events of the app between each other

/*
Okay, so the design basically is there will be a default project, a todo should ideally not exist without a project
Each project should be a clickable button which will display the todos in that project
*/

import Todo from './todo.js'
import Project from './project.js'
import { createSidebar, createMain, createTasksContainer, createATodo, createCreateProjectButton, createProjectForm, createTodoButton, createTodoForm, renderProject, renderProjects} from "./dom.js";

const myTask = new Todo("BossTee", "I am working on it", "2026-11-22", "high", true);
const myTask2 = new Todo("Cole", "arr", "2026-54-22", "MEDIUM", true);
const myTask3 = new Todo("adha", "chaining day", "2122-13-88", "low");

const theTask = new Todo("BossTee", "I am working on it", "2026-11-22", "high", true);
const theTask2 = new Todo("Cole", "arr", "2026-54-22", "MEDIUM", true);
const theTask3 = new Todo("adha", "chaining day", "2122-13-88", "low");

const project1 = new Project("atatat");
const project2 = new Project("Drive");

project1.addTodo(myTask);
project1.addTodo(myTask2);
project1.addTodo(myTask3);

project2.addTodo(theTask);
project2.addTodo(theTask2);
project2.addTodo(theTask3);

const projects = [project1,project2];

//Functions
function initalizeapp(){
    const body = document.querySelector("body");
    const sidebar = createSidebar();
    const main = createMain();
    const projectsContainer = renderProjects(projects);
    const newProjectButton = createCreateProjectButton();
    const projectForm = createProjectForm();
    const form = projectForm.querySelector("#projectForm"); //Selects the form inside the dialog
    const newTodoButton = createTodoButton();
    const todoForm = createTodoForm();
    const formTodo = todoForm.querySelector("#todoForm");

    let selectedProject = project1;

    //Event listeners
   

    formTodo.addEventListener("submit", (e) => {
        e.preventDefault();

        // Pass the submitted form (event.target) to FormData
        const formData = new FormData(e.target);
    
        // Convert to a standard JavaScript object
        const data = Object.fromEntries(formData);

        //Allows checklist to be submitted as a bool
        const checklist = formTodo.elements.checklist.checked;

        //Creates a new Project object
        const newTodo = new Todo(data.title, data.description, data.dueDate, data.priority, checklist); 
        
        //Appends project to the projects array
        console.log(newTodo);
        selectedProject.addTodo(newTodo);
        

        //Here we need to find out how to render the new todo
        main.replaceChildren(renderProject(selectedProject));
        //Closes dialog
        todoForm.close();

        //Emptys the contents of the form
        formTodo.reset();
    })
    newTodoButton.addEventListener("click", () => {
        todoForm.showModal();
    })

     form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Pass the submitted form (event.target) to FormData
        const projectData = new FormData(e.target);
    
        // Convert to a standard JavaScript object
        const data = Object.fromEntries(projectData);

        //Creates a new Project object
        const newProject = new Project(data.title); 
        
        //Appends project to the projects array
        projects.push(newProject);
        console.log(projects);

        //Selects new project as the current project and renders it
        selectedProject = newProject;
        main.replaceChildren(renderProject(selectedProject));

        //projectsContainer.replaceChildren(renderProjects(projects));

        const updatedProjects = renderProjects(projects);
        
        //This replaces the current container with the children of the updated projects, so it doesnt add the div
        projectsContainer.replaceChildren(...updatedProjects.children);

        //Closes dialog
        projectForm.close();

        //Emptys the contents of the form
        form.reset();
    })
    newProjectButton.addEventListener("click", () => {
        projectForm.showModal();
    })
    projectsContainer.addEventListener("click", (e) => {
        //console.log(`Target: ${e.target.closest(".project")}`);// Target is the actual element that calls the listener
        //console.log(`CurrentTarget ${e.currentTarget}`) //current is the element that wants/created the listener
        
        //Erases whatever is in main
        main.replaceChildren();

        const projectElement = e.target.closest(".project");
        // this is the id of the selected project, projectElement.dataset.id, how do i get the corresponding id of the project?
        for(let i = 0; i < projects.length; i++){
            if(projectElement.dataset.id === projects[i].id){
                selectedProject = projects[i];
            }
        }
        main.append(renderProject(selectedProject));
    })

    sidebar.append(projectsContainer, newProjectButton);// this should be called whenever the projects sidebar is called
    main.append(renderProject(selectedProject)); // the should call the relevant project at the start

    body.replaceChildren();
    body.append(sidebar,main, projectForm, todoForm,newTodoButton);
}

function renderCurrentView(){

}

export{initalizeapp}