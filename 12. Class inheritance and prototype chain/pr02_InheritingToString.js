function personAndTeacher(){
    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
        toString(){
            return `Person (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject
        }
        toString(){
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }
        toString(){
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`
        }
    }
    return {
        Person,
        Teacher,
        Student
    }
}

let classes = personAndTeacher()
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let p = new Person('fafa', 'email1')
let t = new Teacher('gril', 'chicken2', 'math');
let s = new Student('1111', '1111123', 'school stuff')

console.log(p)
console.log(t)
console.log(s)