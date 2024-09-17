"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    scale(factor) {
        this.radius *= factor;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    scale(factor) {
        this.width *= factor;
        this.height *= factor;
    }
}
class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    getArea() {
        return 0.5 * this.base * this.height;
    }
    getPerimeter() {
        // Нехай рівнобедрений
        const side = Math.sqrt((this.base * this.base) / 4 + this.height * this.height);
        return this.base + 2 * side;
    }
    scale(factor) {
        this.base *= factor;
        this.height *= factor;
    }
}
// Створення масиву фігур
const shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4),
];
// Обчислення загальної площі та периметра
let totalArea = 0;
let totalPerimeter = 0;
shapes.forEach((shape) => {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
});
console.log('');
console.log('Завдання 2:');
console.log('');
console.log('Загальна площа:', totalArea);
console.log('Загальний периметр:', totalPerimeter);
// Масштабування всіх фігур в 2 рази
shapes.forEach((shape) => shape.scale(2));
// Перерахунок загальної площі та периметра після масштабування
totalArea = 0;
totalPerimeter = 0;
shapes.forEach((shape) => {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
});
console.log('Загальна площа після масштабування:', totalArea);
console.log('Загальний периметр після масштабування:', totalPerimeter);
