abstract class Employee {
    protected name: string;
    protected age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.1;
    }

    pay(): void {
        console.log(`Виплачуємо зарплату розробнику ${this.name}`);
    }
}

class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.2;
    }

    pay(): void {
        console.log(`Виплачуємо зарплату менеджеру ${this.name}`);
    }
}

interface Payable {
    pay(): void;
}

// Створення масиву співробітників
const employees: Employee[] = [
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
