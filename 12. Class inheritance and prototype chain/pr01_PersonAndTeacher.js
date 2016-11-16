function personAndTeacher(){
    class Person {
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject
        }
    }
    return {
        Person,
        Teacher
    }
}

// let classes = personAndTeacher()
// let Person = classes.Person;
// let Teacher = classes.Teacher;
//
// let p = new Person('fafa', 'email1')
// let t = new Teacher('gril', 'chicken2', 'math');
//
// console.log(p)
// console.log(t)