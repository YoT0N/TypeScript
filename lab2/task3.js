"use strict";
class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    showInfo() {
        console.log(`Автомобіль: ${this.make} ${this.model} (${this.year})`);
        console.log(`Колір: ${this.color}`);
    }
}
class BMW extends Car {
    constructor(make, model, year, color, isConvertible) {
        super(make, model, year, color);
        this.isConvertible = isConvertible;
    }
    startEngine() {
        console.log('Заводимо двигун BMW...');
    }
    showInfo() {
        super.showInfo();
        console.log(`Кабріолет: ${this.isConvertible}`);
    }
}
class Toyota extends Car {
    constructor(make, model, year, color, hybrid) {
        super(make, model, year, color);
        this.hybrid = hybrid;
    }
    startEngine() {
        console.log('Заводимо двигун Toyota...');
    }
    showInfo() {
        super.showInfo();
        console.log(`Гібрид: ${this.hybrid}`);
    }
}
class Ford extends Car {
    constructor(make, model, year, color, numberOfDoors) {
        super(make, model, year, color);
        this.numberOfDoors = numberOfDoors;
    }
    startEngine() {
        console.log('Заводимо двигун Ford...');
    }
    showInfo() {
        super.showInfo();
        console.log(`Кількість дверей: ${this.numberOfDoors}`);
    }
}
const bmw1 = new BMW('BMW', 'M3', 2023, 'Синій', true);
const bmw2 = new BMW('BMW', 'X5', 2022, 'Чорний', false);
const toyota1 = new Toyota('Toyota', 'Camry', 2021, 'Сріблястий', true);
const toyota2 = new Toyota('Toyota', 'Corolla', 2020, 'Білий', false);
const ford1 = new Ford('Ford', 'Mustang', 2022, 'Червоний', 2);
const ford2 = new Ford('Ford', 'F-150', 2023, 'Синій', 4);
console.log('');
console.log('Завдання 3:');
console.log('');
bmw1.showInfo();
bmw2.showInfo();
toyota1.showInfo();
toyota2.showInfo();
ford1.showInfo();
ford2.showInfo();
