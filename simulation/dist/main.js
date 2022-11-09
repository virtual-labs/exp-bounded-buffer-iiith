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

/***/ "./src/helper_functions.ts":
/*!*********************************!*\
  !*** ./src/helper_functions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomInt\": () => (/* binding */ getRandomInt)\n/* harmony export */ });\nvar getRandomInt = function (min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive\n};\n\n\n\n//# sourceURL=webpack://context-switching/./src/helper_functions.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper_functions */ \"./src/helper_functions.ts\");\n\n// State of the System\nvar buffer_size = 10;\nvar p_in = 0;\nvar c_out = 0;\nvar full = 0;\nvar empty = buffer_size;\nvar mutex = 1;\nvar pA = 0;\nvar pB = 0;\nvar pg = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 5);\nvar cu = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 5);\nvar inst = \"\";\ndocument.getElementById(\"nextP\").onclick = function (event) {\n    switch (pA) {\n        case 0:\n            if (pg === 0) {\n                pA = (pA + 1) % 6;\n                inst = \"\";\n            }\n            else {\n                inst = \"The Item generation is not yet done. Please click Advance Clock\";\n            }\n            break;\n        case 1:\n            if (empty > 0) {\n                pA = (pA + 1) % 6;\n                empty--;\n                inst = \"\";\n            }\n            else {\n                inst = \"The buffer is full.\";\n            }\n            break;\n        case 2:\n            if (mutex > 0) {\n                pA = (pA + 1) % 6;\n                mutex--;\n                inst = \"\";\n            }\n            else {\n                inst = \"The Consumer is running the code. So Producer cannot run it now\";\n            }\n            break;\n        case 3:\n            pA = (pA + 1) % 6;\n            p_in = (p_in + 1) % buffer_size;\n            inst = \"\";\n            break;\n        case 4:\n            pA = (pA + 1) % 6;\n            mutex++;\n            inst = \"\";\n            break;\n        default:\n            pA = (pA + 1) % 6;\n            full++;\n            pg = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 5);\n            inst = \"\";\n    }\n    cu = Math.max(0, cu - 1);\n    update();\n};\ndocument.getElementById(\"nextC\").onclick = function (event) {\n    switch (pB) {\n        case 0:\n            if (full > 0) {\n                pB = (pB + 1) % 6;\n                full--;\n                inst = \"\";\n            }\n            else {\n                inst = \"The Buffer is Empty. Nothing to consume\";\n            }\n            break;\n        case 1:\n            if (mutex > 0) {\n                pB = (pB + 1) % 6;\n                mutex--;\n                inst = \"\";\n            }\n            else {\n                inst = \"The Producer is running the code. So Consumer cannot run it now\";\n            }\n            break;\n        case 2:\n            pB = (pB + 1) % 6;\n            c_out = (c_out + 1) % buffer_size;\n            inst = \"\";\n            break;\n        case 3:\n            pB = (pB + 1) % 6;\n            mutex++;\n            inst = \"\";\n            break;\n        case 4:\n            pB = (pB + 1) % 6;\n            full++;\n            cu = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(1, 5);\n            inst = \"\";\n            break;\n        default:\n            if (cu === 0) {\n                pB = (pB + 1) % 6;\n                inst = \"The Item using is done\";\n            }\n            else {\n                inst = \"The Item using is not yet done. Please click Advance Clock\";\n            }\n    }\n    pg = Math.max(0, pg - 1);\n    update();\n};\ndocument.getElementById(\"advance_clock\").onclick = function (event) {\n    pg = Math.max(0, pg - 1);\n    cu = Math.max(0, cu - 1);\n    inst = \"\";\n    update();\n};\nfunction update_instrucion() {\n    var instruction = document.getElementById(\"instruction\");\n    if (pA === 0 && pg === 0) {\n        inst = \"Producer Generated the Item.\";\n    }\n    else if (pA === 0 && pB == 5) {\n        inst = \"Advance the Clock\";\n    }\n    instruction.textContent = inst;\n}\nfunction update_codes() {\n    document.querySelector(\"#codeP :nth-child(\".concat((pA - 1 + 6) % 6 + 1, \")\")).classList.remove('highlight');\n    document.querySelector(\"#codeP :nth-child(\".concat(pA + 1, \")\")).classList.add('highlight');\n    document.querySelector(\"#codeC :nth-child(\".concat((pB - 1 + 6) % 6 + 1, \")\")).classList.remove('highlight');\n    document.querySelector(\"#codeC :nth-child(\".concat(pB + 1, \")\")).classList.add('highlight');\n}\nfunction update_buffer() {\n    var tr = document.querySelector(\"#buffer table tr\");\n    tr.innerHTML = \"\";\n    for (var index = 0; index < buffer_size; index++) {\n        var td = document.createElement('td');\n        td.textContent = \"\";\n        if (c_out <= index && index < p_in)\n            td.classList.add(\"data\");\n        tr.appendChild(td);\n    }\n}\nfunction update_semaphores() {\n    document.getElementById(\"full\").textContent = String(full);\n    document.getElementById(\"empty\").textContent = String(empty);\n    document.getElementById(\"mutex\").textContent = String(mutex);\n    document.getElementById(\"full_ph\").textContent = String(full);\n    document.getElementById(\"empty_ph\").textContent = String(empty);\n    document.getElementById(\"mutex_ph\").textContent = String(mutex);\n}\nfunction update() {\n    update_buffer();\n    update_semaphores();\n    update_codes();\n    update_instrucion();\n}\nupdate();\n\n\n//# sourceURL=webpack://context-switching/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;