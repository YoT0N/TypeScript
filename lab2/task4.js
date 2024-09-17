"use strict";
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class Developer extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    getAnnualBonus() {
        return this.salary * 0.1;
    }
    pay() {
        console.log(`Виплачуємо зарплату розробнику ${this.name}`);
    }
}
class Manager extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    getAnnualBonus() {
        return this.salary * 0.2;
    }
    pay() {
        console.log(`Виплачуємо зарплату менеджеру ${this.name}`);
    }
}
// Створення масиву співробітників
const employees = [
    new Developer('Іван Іванов', 30, 20000),
    new Manager('Марія Петрова', 35, 30000),
    new Developer('Петро Сидоров', 28, 25000),
];
console.log('');
console.log('Завдання 4:');
console.log('');
// Підрахунок загальної суми бонусів
let totalBonus = 0;
employees.forEach((employee) => {
    totalBonus += employee.getAnnualBonus();
});
console.log(`Загальна сума бонусів: ${totalBonus}`);
