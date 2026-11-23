//I guess here i will focus on creating different functions for the different parts of the dom
// Two main parts:
/* 
1. Sidebar: 
2. Main todo list stuff
2.1 Tasks (these are tabs)
2.2 Projects*/

function createSidebar(){
    const aside = document.createElement("aside");

    const top = document.createElement("div");
    const topTitle = document.createElement("h1");
    top.classList.add("top");
    topTitle.textContent = "TheeToDOoList";
    top.append(topTitle);

    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    const sbTasks = document.createElement("p");
    sbTasks.textContent = "Tasks";

    const sbProjects = document.createElement("p");
    sbProjects.textContent = "Projects";

    sidebar.append(sbTasks,sbProjects);
    aside.append(top, sidebar);

    return aside;
}

function createMain(){
    const main = document.createElement("main");

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    
    main.append(taskContainer);
    return main;

}

function createATodo(todo){
    const task = document.createElement("div");
    task.classList.add("task");
    task.dataset.id = todo.id;
    
    const title = document.createElement("h3");
    title.textContent = todo.title;

    const description = document.createElement("p");
    description.textContent = `Description: ${todo.description}`;

    const dueDate = document.createElement("p");
    dueDate.textContent = `Due date: ${todo.dueDate}`;

    const priority = document.createElement("p");
    priority.textContent = `Priority ${todo.priority}`;

    const checklist = document.createElement("input"); 
    checklist.type = "checkbox";
    checklist.checked = todo.checklist;
    
    task.append(description,dueDate,priority,checklist);

    return task;

}

export {createSidebar, createMain, createATodo};