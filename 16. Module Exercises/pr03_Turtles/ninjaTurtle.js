let Turtle = require('./turtle');

class NinjaTurtle extends Turtle {
    constructor(name, age, gender, maskColor, weapon) {
        super(name, age, gender);
        this.maskColor = maskColor;
        this.weapon = weapon;
        this._level = 0;
    }

    get level() {
        return this._level;
    }

    toString() {
        let result = `Turtle: ${this.name}\nAged – ${this.age}; Gender – ${this.gender}`;
        let first3Letters = this.name.slice(0, 3);
        if (this.level < 25) {
            result += `\n${first3Letters} wears a ${this.maskColor} mask, and is an apprentice with the ${this.weapon}.`;
        }
        else if (this.level < 100) {
            result += `\n${first3Letters} wears a ${this.maskColor} mask, and is smokin strong with the ${this.weapon}.`;
        }
        else {
            result += `\n${first3Letters} wears a ${this.maskColor} mask, and is BEYOND GODLIKE with the ${this.weapon}.`;
        }
        return result;
    }
}

module.exports = NinjaTurtle;