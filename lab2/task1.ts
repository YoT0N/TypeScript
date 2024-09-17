interface Animal {
    name: string;
    age: number;
    color?: string;
    move(): void;
    makeSound(): void;
}

class Cat implements Animal {
    name: string;
    age: number;
    color: string;
    hasClaws: boolean; // Додаткова властивість для котів

    constructor(name: string, age: number, color: string, hasClaws: boolean) {
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

class Bird implements Animal {
    name: string;
    age: number;
    color: string;
    canFly: boolean; // Додаткова властивість для птахів

    constructor(name: string, age: number, color: string, canFly: boolean) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.canFly = canFly;
    }

    move() {
        if (this.canFly) {
            console.log('Птах літає');
        } else {
            console.log('Птах ходить');
        }
    }
    makeSound() {
        console.log('Чирик');
    }
}

class Fish implements Animal {
    name: string;
    age: number;
    color: string;

    constructor(name: string, age: number, color: string) {
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
