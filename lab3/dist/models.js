var Book = (function () {
    function Book(bookname, author, yearOfPublishing) {
        this.bookName = bookname;
        this.author = author;
        this.yearOfPublishing = yearOfPublishing;
    }
    return Book;
}());
export { Book };
var User = (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
        this.id = Math.floor(Math.random() * 1000000000);
    }
    return User;
}());
export { User };
//# sourceMappingURL=models.js.map