class Turtle{
    constructor(name, age, gender){
        if (new.target === Turtle){
            throw new Error('Can\'t instantiate class Turtle');
        }
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get gender(){
        return this._gender;
    }
    set age(num){
        return this._age += num;
    }
    grow(age){
        this._age += age;
    }
    toString(){
        return `Turtle: ${this.name}\nAged – ${this.age}; Gender – ${this.gender}`;
    }
}

module.exports = Turtle;