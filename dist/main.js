/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\nconst myTask = new _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"BossTee\", \"I am working on it\", \"2026-11-22\", \"high\", true);\nconst myTask2 = new _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Cole\", \"arr\", \"2026-54-22\", \"MEDIUM\", true);\nconst myTask3 = new _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"adha\", \"chaining day\", \"2122-13-88\", \"low\");\n\nconst project1 = new _project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nproject1.addTodo(myTask);\nproject1.addTodo(myTask2);\nproject1.addTodo(myTask3);\nproject1.print();\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/project.js"
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\nclass Project{\n    constructor(title){\n        this.id = crypto.randomUUID();\n        this.title = title;\n        this.todos = [];\n    }\n    addTodo(todo){\n        if(!(todo instanceof _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])){\n            throw new TypeError(\"Expected a Todo object/instance\");\n        }\n        this.todos.push(todo);\n    }\n    //removeTodo(){} //this needs to delete based the uuid, for now i think its cool to leave since dataset hasnt been set in html yet\n    print(){\n        console.log(this.todos);\n    }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/project.js?\n}");

/***/ },

/***/ "./src/todo.js"
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo{\n    constructor(title, description, dueDate, priority, checklist = false){\n        //Parameter Validation\n        if(typeof title !== \"string\" || title.trim() === \"\"){\n            throw new TypeError(\"Title should be a non-empty string\");\n        }\n        if(typeof description !== \"string\" || description.trim() === \"\"){\n            throw new TypeError(\"Description should be a non-empty string\");\n        }\n        if (typeof dueDate !== \"string\" || !/^\\d{4}-\\d{2}-\\d{2}$/.test(dueDate)) {\n            throw new Error(\"Date must be a string in YYYY-MM-DD format.\");\n        }\n        if (typeof priority !== \"string\" || (priority.toLowerCase() !== \"high\" && priority.toLowerCase() !== \"medium\" && priority.toLowerCase() !== \"low\")) {\n            throw new Error(\"Priority should be 'high', 'medium', 'low'.\");\n        }\n\n        if(typeof checklist !== \"boolean\"){\n            throw new TypeError(\"Checklist should be a boolean\");\n        }\n\n        this.id = crypto.randomUUID();\n        this.title = title; //The subject line of the todo task\n        this.description = description; // Small message expanding upon the title\n        this.dueDate = dueDate; // Format needs to be formatted(2020-11-10, YYYY-MM-DD)\n        this.priority = priority.toLowerCase(); //Low, Medium, High\n        this.checklist = checklist; //Bool\n    }\n    toggleChecklist(){\n        this.checklist = !this.checklist;\n    }\n    changePriority(priority){\n        if (typeof priority !== \"string\") {\n            throw new TypeError(\"Priority must be a string.\");\n        }\n\n        if (![\"high\", \"medium\", \"low\"].includes(priority.toLowerCase())) {\n            throw new Error(\"Priority should be 'high', 'medium', 'low'.\");\n        }\n\n        this.priority = priority.toLowerCase();\n    }\n    print(){\n        console.log(`ID: ${this.id}, Title: ${this.title}, Description: ${this.description}, DueDate: ${this.dueDate}, Priority: ${this.priority}, Checklist: ${this.checklist}`)\n    }\n}\n\n//# sourceURL=webpack://odin-todo-list/./src/todo.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;