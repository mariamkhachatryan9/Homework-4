// Create a class named University.
// ● It should contain two properties
// ○ teachers ([] as default)
// ○ students ([] as default)
// ● It should contain 3 methods
// ○ addMember(member
// ○ removeMember(member)
// ○ startLesson() (description below)

// For members you should create two classes, Teacher and Student which will be inherited
// from the class UniversityMember.
// Members should contain 4 properties
// ● name
// ● age
// ● role
// ● energy (24 as default)
// And one method named info() which will return all 4 properties of it.
// After calling the University class startLesson() method, students get -2 of energy
// and teachers get -5 of energy.


class UniversityMember {
    constructor(name, age, role, energy = 24) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.energy = energy;
    }
    info() {
        return this.name, this.age, this.role, this.energy;
    }
}

class Teacher extends UniversityMember {

}
class Student extends UniversityMember {

}


class University {
    constructor(teachers = [], students = []) {
        this.teachers = teachers;
        this.students = students;
    }
    addMember(member) {
        if (member.constructor.name === "Teacher") { // returns class name
            this.teachers.push(member);
        } else if (member.constructor.name === "Student") {
            this.students.push(member);
        } else {
            throw new Error("Your object type is wrong")
        }
    }

    removeMember(member) {
        if (member.constructor.name === "Teacher") {
            const teacher = this.teachers.find(teacher => teacher.name === member.name &&
                teacher.age === member.age && teacher.role === member.role);
            if (teacher === undefined) {
                throw new Error("Member didn't find in array")
            }
            this.teachers.splice(this.teachers.indexOf(teacher), 1);
        } else if (member.constructor.name === "Student") {
            const student = this.students.find(student => student.name === member.name &&
                student.age === member.age && student.role === member.role);
            if (student === undefined) {
                throw new Error("Member didn't find in array")
            }
            this.students.splice(this.students.indexOf(student), 1);
        } else {
            throw new Error("Your object type is wrong")
        }
    }
    startLesson() {
        for (let i = 0; i < this.teachers.length; i++) {
            this.teachers[i].energy -= 5;
        }

        for (let i = 0; i < this.students.length; i++) {
            this.students[i].energy -= 2;
        }
    }

}

let teachers = [new Teacher("Jane", 25, "teacher"), new Teacher("John", 30, "another teacher")];
let students = [new Student("Ann", 18, "student"), new Student("Jacob", 17, "student")];
let uni = new University(teachers, students);
console.log(uni.addMember(new Student("Helen", 16, "student")));
console.log(uni);
console.log(uni.startLesson());
