/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("var buffer_size = 10;\nvar p_in = 0;\nvar c_out = 0;\nfunction update_buffer() {\n    var tr = document.querySelector(\"#buffer table tr\");\n    tr.innerHTML = \"\";\n    for (var index = 0; index < buffer_size; index++) {\n        var td = document.createElement('td');\n        td.textContent = \"\";\n        if (c_out <= index && index < p_in)\n            td.classList.add(\"data\");\n        tr.appendChild(td);\n    }\n    // buffer.innerHTML = \"hello\";\n}\nfunction update() {\n    update_buffer();\n}\nupdate();\n\n\n//# sourceURL=webpack://context-switching/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;