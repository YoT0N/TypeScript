interface LibraryItem {
    name: string;
    author: string;
    borrow(): void;
}

class Book implements LibraryItem {
    name: string;
    author: string;
    pages: number;

    constructor(name: string, author: string, pages: number) {
        this.name = name;
        this.author = author;
        this.pages = pages;
    }

    borrow(): void {
        console.log(`${this.name} було позичено`);
    }
}

class Magazine implements LibraryItem {
    name: string;
    author: string;
    issueNumber: number;

    constructor(name: string, author: string, issueNumber: number) {
        this.name = name;
        this.author = author;
        this.issueNumber = issueNumber;
    }

    borrow(): void {
        console.log(`${this.name}, випуск ${this.issueNumber}, було позичено`);
    }
}

class DVD implements LibraryItem {
    name: string;
    author: string;
    duration: number;

    constructor(name: string, author: string, duration: number) {
        this.name = name;
        this.author = author;
        this.duration = duration;
    }

    borrow(): void {
        console.log(`${this.name} (DVD) було позичено`);
    }
}

class Library {
    items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
    }

    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find((item) => item.name === name);
    }

    listAvailableItems(): void {
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
