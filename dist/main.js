/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\nconst myTask = new _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"BossTee\", \"I am working on it\", \"2026-11-22\", \"high\", true);\nconst myTask2 = new _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Cole\", \"arr\", \"2026-54-22\", \"MEDIUM\", true);\nconst myTask3 = new _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"adha\", \"chaining day\", \"2122-13-88\", \"low\");\n\nconst project1 = new _project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nproject1.addTodo(myTask);\nproject1.addTodo(myTask2);\nproject1.addTodo(myTask3);\nproject1.print();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTRCO0FBQ007O0FBRWxDLG1CQUFtQixnREFBSTtBQUN2QixvQkFBb0IsZ0RBQUk7QUFDeEIsb0JBQW9CLGdEQUFJOztBQUV4QixxQkFBcUIsbURBQU87O0FBRTVCO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanM/ZDNjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnXG5cbmNvbnN0IG15VGFzayA9IG5ldyBUb2RvKFwiQm9zc1RlZVwiLCBcIkkgYW0gd29ya2luZyBvbiBpdFwiLCBcIjIwMjYtMTEtMjJcIiwgXCJoaWdoXCIsIHRydWUpO1xuY29uc3QgbXlUYXNrMiA9IG5ldyBUb2RvKFwiQ29sZVwiLCBcImFyclwiLCBcIjIwMjYtNTQtMjJcIiwgXCJNRURJVU1cIiwgdHJ1ZSk7XG5jb25zdCBteVRhc2szID0gbmV3IFRvZG8oXCJhZGhhXCIsIFwiY2hhaW5pbmcgZGF5XCIsIFwiMjEyMi0xMy04OFwiLCBcImxvd1wiKTtcblxuY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdCgpO1xuXG5wcm9qZWN0MS5hZGRUb2RvKG15VGFzayk7XG5wcm9qZWN0MS5hZGRUb2RvKG15VGFzazIpO1xucHJvamVjdDEuYWRkVG9kbyhteVRhc2szKTtcbnByb2plY3QxLnByaW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/project.js"
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\nclass Project{\n    constructor(title){\n        this.id = crypto.randomUUID();\n        this.title = title;\n        this.todos = [];\n    }\n    addTodo(todo){\n        if(!(todo instanceof _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])){\n            throw new TypeError(\"Expected a Todo object/instance\");\n        }\n        this.todos.push(todo);\n    }\n    //removeTodo(){} //this needs to delete based the uuid, for now i think its cool to leave since dataset hasnt been set in html yet\n    print(){\n        console.log(this.todos);\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0Qjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnREFBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanM/OTU0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IodGl0bGUpe1xuICAgICAgICB0aGlzLmlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuICAgIGFkZFRvZG8odG9kbyl7XG4gICAgICAgIGlmKCEodG9kbyBpbnN0YW5jZW9mIFRvZG8pKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhIFRvZG8gb2JqZWN0L2luc3RhbmNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG4gICAgLy9yZW1vdmVUb2RvKCl7fSAvL3RoaXMgbmVlZHMgdG8gZGVsZXRlIGJhc2VkIHRoZSB1dWlkLCBmb3Igbm93IGkgdGhpbmsgaXRzIGNvb2wgdG8gbGVhdmUgc2luY2UgZGF0YXNldCBoYXNudCBiZWVuIHNldCBpbiBodG1sIHlldFxuICAgIHByaW50KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9kb3MpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/project.js\n\n}");

/***/ },

/***/ "./src/todo.js"
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo{\n    constructor(title, description, dueDate, priority, checklist = false){\n        //Parameter Validation\n        if(typeof title !== \"string\" || title.trim() === \"\"){\n            throw new TypeError(\"Title should be a non-empty string\");\n        }\n        if(typeof description !== \"string\" || description.trim() === \"\"){\n            throw new TypeError(\"Description should be a non-empty string\");\n        }\n        if (typeof dueDate !== \"string\" || !/^\\d{4}-\\d{2}-\\d{2}$/.test(dueDate)) {\n            throw new Error(\"Date must be a string in YYYY-MM-DD format.\");\n        }\n        if (typeof priority !== \"string\" || (priority.toLowerCase() !== \"high\" && priority.toLowerCase() !== \"medium\" && priority.toLowerCase() !== \"low\")) {\n            throw new Error(\"Priority should be 'high', 'medium', 'low'.\");\n        }\n\n        if(typeof checklist !== \"boolean\"){\n            throw new TypeError(\"Checklist should be a boolean\");\n        }\n\n        this.id = crypto.randomUUID();\n        this.title = title; //The subject line of the todo task\n        this.description = description; // Small message expanding upon the title\n        this.dueDate = dueDate; // Format needs to be formatted(2020-11-10, YYYY-MM-DD)\n        this.priority = priority.toLowerCase(); //Low, Medium, High\n        this.checklist = checklist; //Bool\n    }\n    toggleChecklist(){\n        this.checklist = !this.checklist;\n    }\n    changePriority(priority){\n        if (typeof priority !== \"string\") {\n            throw new TypeError(\"Priority must be a string.\");\n        }\n\n        if (![\"high\", \"medium\", \"low\"].includes(priority.toLowerCase())) {\n            throw new Error(\"Priority should be 'high', 'medium', 'low'.\");\n        }\n\n        this.priority = priority.toLowerCase();\n    }\n    print(){\n        console.log(`ID: ${this.id}, Title: ${this.title}, Description: ${this.description}, DueDate: ${this.dueDate}, Priority: ${this.priority}, Checklist: ${this.checklist}`)\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1Qix3Q0FBd0M7QUFDeEMsZ0NBQWdDO0FBQ2hDLGdEQUFnRDtBQUNoRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVEsV0FBVyxXQUFXLGlCQUFpQixpQkFBaUIsYUFBYSxhQUFhLGNBQWMsY0FBYyxlQUFlLGVBQWU7QUFDL0s7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG8uanM/MmM0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2Rve1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCA9IGZhbHNlKXtcbiAgICAgICAgLy9QYXJhbWV0ZXIgVmFsaWRhdGlvblxuICAgICAgICBpZih0eXBlb2YgdGl0bGUgIT09IFwic3RyaW5nXCIgfHwgdGl0bGUudHJpbSgpID09PSBcIlwiKXtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaXRsZSBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZiBkZXNjcmlwdGlvbiAhPT0gXCJzdHJpbmdcIiB8fCBkZXNjcmlwdGlvbi50cmltKCkgPT09IFwiXCIpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlc2NyaXB0aW9uIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkdWVEYXRlICE9PSBcInN0cmluZ1wiIHx8ICEvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9JC8udGVzdChkdWVEYXRlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRGF0ZSBtdXN0IGJlIGEgc3RyaW5nIGluIFlZWVktTU0tREQgZm9ybWF0LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHByaW9yaXR5ICE9PSBcInN0cmluZ1wiIHx8IChwcmlvcml0eS50b0xvd2VyQ2FzZSgpICE9PSBcImhpZ2hcIiAmJiBwcmlvcml0eS50b0xvd2VyQ2FzZSgpICE9PSBcIm1lZGl1bVwiICYmIHByaW9yaXR5LnRvTG93ZXJDYXNlKCkgIT09IFwibG93XCIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcmlvcml0eSBzaG91bGQgYmUgJ2hpZ2gnLCAnbWVkaXVtJywgJ2xvdycuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodHlwZW9mIGNoZWNrbGlzdCAhPT0gXCJib29sZWFuXCIpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNoZWNrbGlzdCBzaG91bGQgYmUgYSBib29sZWFuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pZCA9IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTsgLy9UaGUgc3ViamVjdCBsaW5lIG9mIHRoZSB0b2RvIHRhc2tcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uOyAvLyBTbWFsbCBtZXNzYWdlIGV4cGFuZGluZyB1cG9uIHRoZSB0aXRsZVxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlOyAvLyBGb3JtYXQgbmVlZHMgdG8gYmUgZm9ybWF0dGVkKDIwMjAtMTEtMTAsIFlZWVktTU0tREQpXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eS50b0xvd2VyQ2FzZSgpOyAvL0xvdywgTWVkaXVtLCBIaWdoXG4gICAgICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0OyAvL0Jvb2xcbiAgICB9XG4gICAgdG9nZ2xlQ2hlY2tsaXN0KCl7XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0ID0gIXRoaXMuY2hlY2tsaXN0O1xuICAgIH1cbiAgICBjaGFuZ2VQcmlvcml0eShwcmlvcml0eSl7XG4gICAgICAgIGlmICh0eXBlb2YgcHJpb3JpdHkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcmlvcml0eSBtdXN0IGJlIGEgc3RyaW5nLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghW1wiaGlnaFwiLCBcIm1lZGl1bVwiLCBcImxvd1wiXS5pbmNsdWRlcyhwcmlvcml0eS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJpb3JpdHkgc2hvdWxkIGJlICdoaWdoJywgJ21lZGl1bScsICdsb3cnLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cbiAgICBwcmludCgpe1xuICAgICAgICBjb25zb2xlLmxvZyhgSUQ6ICR7dGhpcy5pZH0sIFRpdGxlOiAke3RoaXMudGl0bGV9LCBEZXNjcmlwdGlvbjogJHt0aGlzLmRlc2NyaXB0aW9ufSwgRHVlRGF0ZTogJHt0aGlzLmR1ZURhdGV9LCBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fSwgQ2hlY2tsaXN0OiAke3RoaXMuY2hlY2tsaXN0fWApXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/todo.js\n\n}");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;