"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(bookname, author, yearOfPublishing) {
        this.bookName = bookname;
        this.author = author;
        this.yearOfPublishing = yearOfPublishing;
    }
    return Book;
}());
exports.Book = Book;
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
        this.id = Math.floor(Math.random() * 1000000000);
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=models.js.map