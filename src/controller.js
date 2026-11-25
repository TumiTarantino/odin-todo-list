// Coordinates the events of the app between each other

/*
Okay, so the design basically is there will be a default project, a todo should ideally not exist without a project
Each project should be a clickable button which will display the todos in that project
*/

import Todo from './todo.js'
import Project from './project.js'
import { createSidebar, createMain, createTasksContainer, createATodo, createCreateProjectButton, createProjectForm, deleteProjectButton,createTodoButton, createTodoForm, renderProject, renderProjects} from "./dom.js";

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
let selectedProject = project1;

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
        
        editingTodo = null;

        renderCurrentView();
        //Closes dialog
        todoForm.close();

        //Emptys the contents of the form
        formTodo.reset();
    })
    newTodoButton.addEventListener("click", () => {
        editingTodo = null; // Just incase it has any old todo ref
        formTodo.reset();
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
         
        renderCurrentView();

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

        const projectElement = e.target.closest(".project-button");
        const deleteElement = e.target.closest(".delete-project-button");

        if(deleteElement){
            //This returns the project id found in the button dataset
            const project = projects.find(p => p.id === deleteElement.dataset.id);
            deleteProject(project);
            renderCurrentView();
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

        deleteTodo(selectedProject,todo);
        renderCurrentView();
    });

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
        console.log(todo);
        renderCurrentView();
    });

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
        return;
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
}

function deleteTodo(project, todo){
    project.removeTodo(todo);
}
function editProject(project){
    //Reuse the project form to get the input
}
export{initalizeapp}