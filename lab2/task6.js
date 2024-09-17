"use strict";
class Book {
    constructor(name, author, pages) {
        this.name = name;
        this.author = author;
        this.pages = pages;
    }
    borrow() {
        console.log(`${this.name} було позичено`);
    }
}
class Magazine {
    constructor(name, author, issueNumber) {
        this.name = name;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    borrow() {
        console.log(`${this.name}, випуск ${this.issueNumber}, було позичено`);
    }
}
class DVD {
    constructor(name, author, duration) {
        this.name = name;
        this.author = author;
        this.duration = duration;
    }
    borrow() {
        console.log(`${this.name} (DVD) було позичено`);
    }
}
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    findItemByName(name) {
        return this.items.find((item) => item.name === name);
    }
    listAvailableItems() {
        console.log('Доступні елементи:');
        this.items.forEach((item) => console.log(item.name));
    }
}
const library = new Library();
const book1 = new Book('Володар перснів', 'Дж. Р. Р. Толкін', 1200);
const magazine1 = new Magazine('National Geographic', 'Різні автори', 12);
const dvd1 = new DVD('Хрещений батько', 'Френсіс Форд Коппола', 180);
library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);
console.log('');
console.log('Завдання 6:');
console.log('');
library.listAvailableItems();
const borrowedItem = library.findItemByName('Володар перснів');
if (borrowedItem) {
    borrowedItem.borrow();
}
