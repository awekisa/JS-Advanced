let Entity = require('./Entity');
let Dog = require('./Dog');

class Person extends Entity{
    constructor(name, phrase, Dog){
        super(name)
        this.phrase = phrase
        this.dog = Dog;
    }
    saySomething(){
        return `${this.name} says: ${this.phrase}${this.dog.name} barks!`
    }
}

module.exports = Person