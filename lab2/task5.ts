interface Course {
    name: string;
    duration: number;
    students: string[];

    registerStudent(student: string): void;
    isStudentRegistered(student: string): boolean;
}

class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[] = [];

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
    }

    registerStudent(student: string): void {
        if (!this.isStudentRegistered(student)) {
            this.students.push(student);
            console.log(
                `${student} успішно зареєстрований на курс ${this.name}`,
            );
        } else {
            console.log(`${student} вже зареєстрований на курс ${this.name}`);
        }
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    removeCourse(courseName: string): void {
        this.courses = this.courses.filter(
            (course) => course.name !== courseName,
        );
    }

    findCourse(courseName: string): Course | undefined {
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
