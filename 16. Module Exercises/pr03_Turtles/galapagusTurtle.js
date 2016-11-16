let Turtle = require('./turtle');

class GalapagusTurtle extends Turtle {
    constructor(name, age, gender) {
        super(name, age, gender);
        this._thingsEaten = [];
    }

    get thingsEaten() {
        return this._thingsEaten;
    }

    eat(food) {
        this._thingsEaten.push(food);

    }

    grow(age) {
        this._thingsEaten = [];
        this.age(age);
    }
    toString(){
        return `Turtle: ${this.name}\nAged – ${this.age}; Gender – ${this.gender}` + `\nThings, eaten this year: ` + this._thingsEaten.join(', ');
    }
}

module.exports = GalapagusTurtle;