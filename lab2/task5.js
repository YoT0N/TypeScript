"use strict";
class OnlineCourse {
    constructor(name, duration) {
        this.students = [];
        this.name = name;
        this.duration = duration;
    }
    registerStudent(student) {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(`${student} успішно зареєстрований на курс ${this.name}`);
        }
        else {
            console.log(`${student} вже зареєстрований на курс ${this.name}`);
        }
    }
    isStudentRegistered(student) {
        return this.students.includes(student);
    }
}
class CourseManager {
    constructor() {
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
    removeCourse(courseName) {
        this.courses = this.courses.filter((course) => course.name !== courseName);
    }
    findCourse(courseName) {
        return this.courses.find((course) => course.name === courseName);
    }
}
// Створення курсів
const jsCourse = new OnlineCourse('JavaScript', 40);
const tsCourse = new OnlineCourse('TypeScript', 30);
// Створення менеджера курсів
const courseManager = new CourseManager();
// Додавання курсів до менеджера
courseManager.addCourse(jsCourse);
courseManager.addCourse(tsCourse);
console.log('');
console.log('Завдання 5:');
console.log('');
// Реєстрація студентів
jsCourse.registerStudent('Іван Петров');
jsCourse.registerStudent('Марія Іванова');
tsCourse.registerStudent('Петро Сидоров');
// Пошук курсу та виведення інформації
const foundCourse = courseManager.findCourse('JavaScript');
if (foundCourse) {
    console.log(`Курс: ${foundCourse.name}`);
    console.log('Студенти:');
    foundCourse.students.forEach((student) => console.log(student));
}
