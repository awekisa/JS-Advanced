function extendClass(classToExtend) {
    classToExtend.prototype.species = "Human";
    classToExtend.prototype.toSpeciesString = function(){
        return `I am a Human. ${this.toString()}`
    }
}

class Person {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    toString(){
        return `Person (name: ${this.name}, email: ${this.email})`
    }
}

extendClass(Person);
let p = new Person("Pesho","email@hit.bg");
console.log(p.toSpeciesString())