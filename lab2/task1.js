"use strict";
class Cat {
    constructor(name, age, color, hasClaws) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.hasClaws = hasClaws;
    }
    move() {
        console.log('Кіт ходить і стрибає');
    }
    makeSound() {
        console.log('Мяу');
    }
}
class Bird {
    constructor(name, age, color, canFly) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.canFly = canFly;
    }
    move() {
        if (this.canFly) {
            console.log('Птах літає');
        }
        else {
            console.log('Птах ходить');
        }
    }
    makeSound() {
        console.log('Чирик');
    }
}
class Fish {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    move() {
        console.log('Риба плаває');
    }
    makeSound() {
        console.log('Буль-буль');
    }
}
