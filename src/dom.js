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
    topTitle.textContent = "TheeToDoList";
    top.append(topTitle);

    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    //const sbTasks = document.createElement("p");
    //sbTasks.textContent = "Tasks";

    const sbProjects = document.createElement("p");
    sbProjects.textContent = "Projects";

    sidebar.append(sbProjects);
    aside.append(top, sidebar);

    return aside;
}

function createMain(){
    const main = document.createElement("main");
    //Main cannot have create taskscontainer, since for now, main will either show a project of tasks or a task itself, so is this function even really needed?
    return main;

}

function createCreateProjectButton(){
    const button = document.createElement("button");
    button.classList.add("create-project-button");
    button.textContent = "+ New Project";

    return button
}

function createProjectForm(){
    const dialog = document.createElement("dialog");
    const form = document.createElement('form');
    form.id = 'projectForm';
    form.method = "dialog";

    // 2. Create a label and text input
    const projectLabel = document.createElement('label');
    projectLabel.textContent = 'Title: ';
    projectLabel.htmlFor = 'projectTitle';

    const projectInput = document.createElement('input');
    projectInput.type = 'text';
    projectInput.id = 'projectTitle';
    projectInput.name = 'title';
    projectInput.required = true;

    // 3. Create a submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';

    // 4. Assemble and add the form to the page
    form.append(projectLabel, projectInput, submitBtn);
    dialog.append(form)
    return dialog;
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
    const projectDiv2 = document.createElement("div");
    const projectButton = document.createElement("button");
    const deleteButton = deleteProjectButton();

    projectDiv2.classList.add("project");
    projectButton.classList.add("project-button");

    projectButton.textContent = project.title;
    projectButton.dataset.id = project.id;
    deleteButton.dataset.id = project.id;

    projectDiv2.append(projectButton,deleteButton);

    return projectDiv2;
}

function deleteProjectButton(){
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-project-button");
    deleteButton.textContent = "X"
    return deleteButton;
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
    checklist.classList.add("todo-checklist");

    const deleteButton = deleteATodoButton();
    deleteButton.dataset.id = todo.id;

    const editButton = editTodoButton();//I dont think it needs the id

    
    task.append(title,description,dueDate,priority,checklist, editButton, deleteButton);

    return task;

}

function createTodoButton(){
    const todoButton = document.createElement("button");
    todoButton.classList.add("todo-button");
    todoButton.textContent = "+ New Todo";
    return todoButton;
}

function editTodoButton(){
    const editButton = document.createElement("button");
    editButton.classList.add("edit-todo-button");
    editButton.textContent = "Edit";
    return editButton;
}

function createTodoForm(){
    const dialog = document.createElement("dialog");
    const form = document.createElement('form');
    form.id = 'todoForm';
    form.method = "dialog";

    // Creates a label for relevant input
    const todoTitleLabel = document.createElement('label');
    todoTitleLabel.textContent = 'Title: ';
    todoTitleLabel.htmlFor = 'todo-title';

    //Create an input associated with relevent label
    const todoTitleInput = document.createElement('input');
    todoTitleInput.type = 'text';
    todoTitleInput.id = 'todo-title';
    todoTitleInput.name = 'title';
    todoTitleInput.required = true;

     // Creates a label for relevant input
    const todoDesLabel = document.createElement('label');
    todoDesLabel.textContent = 'Description: ';
    todoDesLabel.htmlFor = 'todo-description';

    //Create an input associated with relevent label
    const todoDesInput = document.createElement('input');
    todoDesInput.type = 'text';
    todoDesInput.id = 'todo-description';
    todoDesInput.name = 'description';
    todoDesInput.required = true;

     // Creates a label for relevant input
    const todoDateLabel = document.createElement('label');
    todoDateLabel.textContent = 'Due Date: ';
    todoDateLabel.htmlFor = 'todo-date';

    //Create an input associated with relevent label
    const todoDateInput = document.createElement('input');
    todoDateInput.type = 'date'; // this probaly needs to change a more appropriate format
    todoDateInput.id = 'todo-date';
    todoDateInput.name = 'dueDate';
    todoDateInput.required = true;

     // Creates a label for relevant input
    const todoPriorityLabel = document.createElement('label');
    todoPriorityLabel.textContent = 'Priority: ';
    todoPriorityLabel.htmlFor = 'todo-priority';

    //Create an input associated with relevent label
    const todoPriorityInput = document.createElement('input');
    todoPriorityInput.type = 'text';
    todoPriorityInput.placeholder = 'high, medium or low';
    todoPriorityInput.id = 'todo-priority';
    todoPriorityInput.name = 'priority';
    todoPriorityInput.required = true;

    // Creates a label for relevant input
    const todoChecklistLabel = document.createElement('label');
    todoChecklistLabel.textContent = 'Checklist: ';
    todoChecklistLabel.htmlFor = 'todo-checklist';

    //Create an input associated with relevent label
    const todoChecklistInput = document.createElement('input');
    todoChecklistInput.type = 'checkbox';
    todoChecklistInput.id = 'todo-checklist';
    todoChecklistInput.name = 'checklist';
    todoChecklistInput.required = false;

    // 3. Create a submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Submit';

    // 4. Assemble and add the form to the page
    form.append(
        todoTitleLabel, todoTitleInput,
        todoDesLabel, todoDesInput,
        todoDateLabel, todoDateInput,
        todoPriorityLabel, todoPriorityInput,
        todoChecklistLabel, todoChecklistInput,
        submitBtn);
    dialog.append(form)
    return dialog;
}

function deleteATodoButton(){
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-todo-button");
    deleteButton.textContent = "Delete";
    return deleteButton;
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
    projectsContainer.classList.add("projects-container");
    for(let i = 0; i < projects.length; i++){
        const project = createAProject(projects[i]);
        projectsContainer.append(project);
    }
    return projectsContainer;
    
}
export {createSidebar, createMain, createTasksContainer, createATodo, createCreateProjectButton, createProjectForm, deleteProjectButton,createTodoButton, createTodoForm,renderProject, renderProjects};