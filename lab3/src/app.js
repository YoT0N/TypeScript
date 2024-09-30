"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());
document.addEventListener('DOMContentLoaded', function () {
    new App();
    var addBook = document.getElementById('addBook');
    var addUser = document.getElementById('addUser');
    //Валідація полів для вводу після натискання на кнопку Додати
    var validation = new Validation();
    addBook.addEventListener('click', function () {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        validation.checkBookFields();
    });
    addUser.addEventListener('click', function () {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        validation.checkUserFields();
    });
});
var Validation = /** @class */ (function () {
    function Validation() {
        this.bookName = document.getElementById('bookName');
        this.author = document.getElementById('author');
        this.yearOfPublication = document.getElementById('yearOfPublication');
        this.userName = document.getElementById('userName');
        this.email = document.getElementById('email');
    }
    Validation.prototype.checkBookFields = function () {
        //Перевірка поля назва
        var bookNameLabel = document.getElementById('bookNameLabel');
        if (bookNameLabel != null) {
            if (this.bookName.value === '') {
                bookNameLabel.style.display = 'block';
            }
            else {
                bookNameLabel.style.display = 'none';
            }
        }
        //Перевірка поля автор
        var bookAuthorLabel = document.getElementById('bookAuthorLabel');
        if (bookAuthorLabel != null) {
            if (this.author.value === '') {
                bookAuthorLabel.style.display = 'block';
            }
            else {
                bookAuthorLabel.style.display = 'none';
            }
        }
        //Перевірка поля рік видання
        var bookYearLabel = document.getElementById('bookYearLabel');
        if (bookYearLabel != null) {
            if (this.yearOfPublication.value === '') {
                bookYearLabel.style.display = 'block';
            }
            else {
                bookYearLabel.style.display = 'none';
            }
        }
    };
    Validation.prototype.checkUserFields = function () {
        //Перевірка поля ім'я користувача
        var userNameLabel = document.getElementById('userNameLabel');
        if (userNameLabel != null) {
            if (this.userName.value === '') {
                userNameLabel.style.display = 'block';
            }
            else {
                userNameLabel.style.display = 'none';
            }
        }
        //Перевірка поля email
        var emailLabel = document.getElementById('emailLabel');
        if (emailLabel != null) {
            if (this.email.value === '') {
                emailLabel.style.display = 'block';
            }
            else {
                emailLabel.style.display = 'none';
            }
        }
    };
    return Validation;
}());
//# sourceMappingURL=app.js.map