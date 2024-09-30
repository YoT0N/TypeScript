export class Book {
    bookName;
    author;
    yearOfPublishing;
    constructor(bookname, author, yearOfPublishing) {
        this.bookName = bookname;
        this.author = author;
        this.yearOfPublishing = yearOfPublishing;
    }
}
export class User {
    name;
    email;
    id;
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.id = Math.floor(Math.random() * 1000000000);
    }
}
