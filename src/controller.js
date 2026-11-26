// Coordinates the events of the app between each other

/*
Okay, so the design basically is there will be a default project, a todo should ideally not exist without a project
Each project should be a clickable button which will display the todos in that project
*/

import Todo from './todo.js'
import Project from './project.js'
import { createSidebar, createMain, createTasksContainer, createATodo, createCreateProjectButton, createProjectForm, deleteProjectButton,createTodoButton, createTodoForm, renderProject, renderProjects} from "./dom.js";
import { saveProjects, loadProjects } from './storage.js';

const myTask = new Todo("ToDo List", "I am working on it", "2026-11-22", "high", true);
const myTask2 = new Todo("Gym", "Push-Ups, Pull-Ups, Lunges", "2026-11-22", "MEDIUM", true);

const project1 = new Project("Today");

project1.addTodo(myTask);
project1.addTodo(myTask2);

const savedProjects = loadProjects();

let projects;

if (savedProjects && savedProjects.length > 0) {
    projects = savedProjects;
} else {
    projects = [project1];
}

let selectedProject = projects[0];

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
    let editingTodo = null;
    
///////////////////// Event listeners ///////////////////////////////////////////////////////////////////////////
   
    // This does one of two things: create a new todo or edit a todo, it allows for the todo form to do both without repeating form logic
    formTodo.addEventListener("submit", (e) => {
        e.preventDefault();

        // Pass the submitted form (event.target) to FormData
        const formData = new FormData(e.target);
    
        // Convert to a standard JavaScript object
        const data = Object.fromEntries(formData);

        //Allows checklist to be submitted as a bool
        const checklist = formTodo.elements.checklist.checked;

        if(editingTodo === null){
            //Creates a new Project object
            const newTodo = new Todo(data.title, data.description, data.dueDate, data.priority, checklist); 
            
            //Appends project to the projects array
            console.log(newTodo);
            selectedProject.addTodo(newTodo);
        }
        else{
            editingTodo.update(data.title, data.description, data.dueDate, data.priority, checklist);
        }

        //Saves current state of projects
        saveProjects(projects);
        
        editingTodo = null;

        renderCurrentView();
        //Closes dialog
        todoForm.close();

        //Emptys the contents of the form
        formTodo.reset();
    })

    //Opens the dialog for creating a todo
    newTodoButton.addEventListener("click", () => {
        editingTodo = null; // Just incase it has any old todo ref
        formTodo.reset();
        todoForm.showModal();
    })

    //This creates a new project from a form
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

        //Saves current state of projects
        saveProjects(projects);
         
        renderCurrentView();

        //Closes dialog
        projectForm.close();

        //Emptys the contents of the form
        form.reset();
    })
    newProjectButton.addEventListener("click", () => {
        projectForm.showModal();
    })
    
    //This listeners does one of two things: deletes a project or it renders the selected project onto main
    projectsContainer.addEventListener("click", (e) => {
        //console.log(`Target: ${e.target.closest(".project")}`);// Target is the actual element that calls the listener
        //console.log(`CurrentTarget ${e.currentTarget}`) //current is the element that wants/created the listener

        const projectElement = e.target.closest(".project-button");
        const deleteElement = e.target.closest(".delete-project-button");

        if(deleteElement){
            //This returns the project id found in the button dataset
            const project = projects.find(p => p.id === deleteElement.dataset.id);
            
            if(deleteProject(project)){
                //Saves current state of projects
                saveProjects(projects);

                renderCurrentView();
            }

            
        }

        if(projectElement){
            // this is the id of the selected project, projectElement.dataset.id, how do i get the corresponding id of the project?
            for(let i = 0; i < projects.length; i++){
                if(projectElement.dataset.id === projects[i].id){
                    selectedProject = projects[i];
                }
            }
            renderCurrentView();
        }
        return;
    })

    //Adding to main since tasks and project containers keep disappearing
    // Deletes a todo
    main.addEventListener("click", (e) => {
        const deleteElement = e.target.closest(".delete-todo-button");
        if (!deleteElement){
            return;
        }

        const todo = selectedProject.todos.find((todo) => todo.id === deleteElement.dataset.id);
        if(!todo){
            console.warn("Todo not found.");
            return;
        }

        if(deleteTodo(selectedProject,todo) === true){
            //Saves current state of projects
            saveProjects(projects);
        }
        else{
            return;
        }

        

        renderCurrentView();
    });

    //Toggles the todo checklist
    main.addEventListener("change", (e) => {
        const checklistElement = e.target.closest(".todo-checklist");
        if (!checklistElement){ 
            return;
        }
        const taskElement = e.target.closest(".task");
        if (!taskElement){
            return;
        }
        const todo = selectedProject.todos.find((todo) => todo.id === taskElement.dataset.id);
        if(!todo){
            console.warn("Todo not found.");
            return;
        }

        todo.toggleChecklist();

        //Saves current state of projects
        saveProjects(projects);

        renderCurrentView();
    });

    //Edits a todo
    main.addEventListener("click", (e) => {
        const taskElement = e.target.closest(".edit-todo-button");
        if(!taskElement){
            return;
        }
        const todoId = taskElement.closest(".task").dataset.id;
        const todo = selectedProject.todos.find((todo) => todo.id === todoId);
        if(!todo){
            console.warn("Todo not found");
            return;
        }
        editingTodo = todo;
        formTodo.elements.title.value = todo.title;
        formTodo.elements.description.value = todo.description;
        formTodo.elements.dueDate.value = todo.dueDate;
        formTodo.elements.priority.value = todo.priority;
        formTodo.elements.checklist.checked = todo.checklist;

        todoForm.showModal();

    });
////////////////////End of event Listeners////////////////////////////////////////////////////////////////////////////////

    sidebar.append(projectsContainer, newProjectButton);// this should be called whenever the projects sidebar is called
    main.append(renderProject(selectedProject)); // the should call the relevant project at the start

    body.replaceChildren();
    body.append(sidebar,main, projectForm, todoForm,newTodoButton);

    function renderCurrentView(){
        main.replaceChildren();
        main.append(renderProject(selectedProject));

        const updatedProjects = renderProjects(projects);
        projectsContainer.replaceChildren(...updatedProjects.children);
    }

}
//Below here was done hapzardously 

function deleteProject(project){
    if(projects.length <= 1){
        alert("At least one project should exist");
        console.warn("At least one project should exist");
        return false;
    }

    //It needs to be deleted from the projects array as well as from the dom
    const index = projects.findIndex((p) => p.id === project.id);
    const isSelected = project === selectedProject;

    if (index !== -1) {
        projects.splice(index, 1);

        if(isSelected){
            selectedProject = projects[0];
        }
    }
    return true;
}

function deleteTodo(project, todo){
    return project.removeTodo(todo);
}
function editProject(project){
    //Reuse the project form to get the input
}
export{initalizeapp}