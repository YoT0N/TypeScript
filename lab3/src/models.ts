export interface IBook {
    bookName: string;
    author: string;
    yearOfPublishing: number;
}

export class Book implements IBook {
    bookName: string;
    author: string;
    yearOfPublishing: number;

    constructor(bookname: string, author: string, yearOfPublishing: number) {
        this.bookName = bookname;
        this.author = author;
        this.yearOfPublishing = yearOfPublishing;
    }
}

export interface IUser {
    name: string;
    email: string;
}

export class User implements IUser {
    name: string;
    email: string;
    id: number;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.id = Math.floor(Math.random() * 1000000000);
    }
}
