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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nclass App {\n}\ndocument.addEventListener('DOMContentLoaded', () => {\n    new App();\n    const addBook = document.getElementById('addBook');\n    const addUser = document.getElementById('addUser');\n    //Валідація полів для вводу після натискання на кнопку Додати\n    const validation = new Validation();\n    addBook.addEventListener('click', () => {\n        event?.preventDefault();\n        validation.checkBookFields();\n    });\n    addUser.addEventListener('click', () => {\n        event?.preventDefault();\n        validation.checkUserFields();\n    });\n});\nclass Validation {\n    bookName = document.getElementById('bookName');\n    author = document.getElementById('author');\n    yearOfPublication = document.getElementById('yearOfPublication');\n    userName = document.getElementById('userName');\n    email = document.getElementById('email');\n    checkBookFields() {\n        //Перевірка поля назва\n        const bookNameLabel = document.getElementById('bookNameLabel');\n        if (bookNameLabel != null) {\n            if (this.bookName.value === '') {\n                bookNameLabel.style.display = 'block';\n            }\n            else {\n                bookNameLabel.style.display = 'none';\n            }\n        }\n        //Перевірка поля автор\n        const bookAuthorLabel = document.getElementById('bookAuthorLabel');\n        if (bookAuthorLabel != null) {\n            if (this.author.value === '') {\n                bookAuthorLabel.style.display = 'block';\n            }\n            else {\n                bookAuthorLabel.style.display = 'none';\n            }\n        }\n        //Перевірка поля рік видання\n        const bookYearLabel = document.getElementById('bookYearLabel');\n        if (bookYearLabel != null) {\n            if (this.yearOfPublication.value === '') {\n                bookYearLabel.style.display = 'block';\n            }\n            else {\n                bookYearLabel.style.display = 'none';\n            }\n        }\n    }\n    checkUserFields() {\n        //Перевірка поля ім'я користувача\n        const userNameLabel = document.getElementById('userNameLabel');\n        if (userNameLabel != null) {\n            if (this.userName.value === '') {\n                userNameLabel.style.display = 'block';\n            }\n            else {\n                userNameLabel.style.display = 'none';\n            }\n        }\n        //Перевірка поля email\n        const emailLabel = document.getElementById('emailLabel');\n        if (emailLabel != null) {\n            if (this.email.value === '') {\n                emailLabel.style.display = 'block';\n            }\n            else {\n                emailLabel.style.display = 'none';\n            }\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://lab1/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;