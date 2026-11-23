import "./styles.css";
import Todo from './todo.js'
import Project from './project.js'
import { createSidebar, createMain, createTasksContainer, createATodo } from "./dom.js";

const myTask = new Todo("BossTee", "I am working on it", "2026-11-22", "high", true);
const myTask2 = new Todo("Cole", "arr", "2026-54-22", "MEDIUM", true);
const myTask3 = new Todo("adha", "chaining day", "2122-13-88", "low");

const project1 = new Project();

project1.addTodo(myTask);
project1.addTodo(myTask2);
project1.addTodo(myTask3);
project1.print();

const body = document.querySelector("body");
const sidebar = createSidebar();
const main = createMain();
const taskContainer = createTasksContainer();

taskContainer.append(createATodo(myTask),createATodo(myTask2), createATodo(myTask3))
main.append(taskContainer);

body.replaceChildren();
body.append(sidebar,main);