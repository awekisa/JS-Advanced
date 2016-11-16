let Turtle = require('./turtle');

class EvkodianTurtle extends Turtle{
    constructor(name, age, gender, evkodiumValue){
        super(name, age, gender);
        this._evkodiumValue = evkodiumValue;
    }
    get evkodium(){
        let ageUpd = (this.gender === 'male') ? this.age * 3: this.age * 2;
        return {value: this._evkodiumValue, density: ageUpd};
    }
    toString(){
        return `Turtle: ${this.name}\nAged – ${this.age}; Gender – ${this.gender}` + `\nEvkodium: ${this.evkodium.value * this.evkodium.density}`;
    }
}

module.exports = EvkodianTurtle;