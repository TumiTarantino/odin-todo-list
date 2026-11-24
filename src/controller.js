// Coordinates the events of the app between each other

/*
Okay, so the design basically is there will be a default project, a todo should ideally not exist without a project
Each project should be a clickable button which will display the todos in that project
*/

import Todo from './todo.js'
import Project from './project.js'
import { createSidebar, createMain, createTasksContainer, createATodo, renderProject, renderProjects} from "./dom.js";

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

    projectsContainer.addEventListener("click", (e) => {
        //console.log(`Target: ${e.target.closest(".project")}`);// Target is the actual element that calls the listener
        //console.log(`CurrentTarget ${e.currentTarget}`) //current is the element that wants/created the listener
        
        //Erases whatever is in main
        main.replaceChildren();

        const projectElement = e.target.closest(".project");
        let selectedProject = null;
        // this is the id of the selected project, projectElement.dataset.id, how do i get the corresponding id of the project?
        for(let i = 0; i < projects.length; i++){
            if(projectElement.dataset.id === projects[i].id){
                selectedProject = projects[i];
            }
        }
        console.log(selectedProject)
        main.append(renderProject(selectedProject));
    })

    sidebar.append(projectsContainer);// this should be called whenever the projects sidebar is called
    main.append(renderProject(project1)); // the should call the relevant project at the start

    body.replaceChildren();
    body.append(sidebar,main);
}


export{initalizeapp}