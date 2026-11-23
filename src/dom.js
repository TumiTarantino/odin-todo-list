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
    //Main cannot have create taskscontainer, since for now, main will either show a project of tasks or a task itself, so is this function even really needed?
    return main;

}
function createTasksContainer(){
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    return taskContainer;
}
function createProjectContainer(project){
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = `${project.title}`;

    projectContainer.append(projectTitle);

    projectContainer.dataset.id = project.id;

    return projectContainer;
}

function createAProject(project){
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.dataset.id = project.id;

    const projectTitle = document.createElement("p");
    projectTitle.textContent = project.title

    projectDiv.append(projectTitle);

    return projectDiv;
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
    
    task.append(title,description,dueDate,priority,checklist);

    return task;

}
function renderProject(project){
    const taskContainer = createTasksContainer();
    const projectContainer = createProjectContainer(project);
    for(let i = 0; i < project.todos.length; i++){
        const taskElement = createATodo(project.todos[i]);
        taskContainer.append(taskElement);
    }
    projectContainer.append(taskContainer);
    return projectContainer;
}

function renderProjects(projects){ //this 'projects' dont exist yet, just be aware
    const projectsContainer = document.createElement("div");
    for(let i = 0; i < projects.length; i++){
        const project = createAProject(projects[i]);
        projectsContainer.append(project);
    }
    return projectsContainer;
    
}
export {createSidebar, createMain, createTasksContainer, createATodo, renderProject, renderProjects};