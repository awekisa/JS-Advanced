let Turtle = require('./turtle');

class WaterTurtle extends Turtle{
    constructor(name, age, gender, waterPool){
        super(name, age, gender);
        this._waterPool = waterPool;
    }
    get currentWaterPool(){
        return this._waterPool;
    }
    set currentWaterPool(waterPool){
        return this._waterPool = waterPool;
    }
    travel(waterPool){
        this.currentWaterPool(waterPool);
        this._age += 5;
    }
    toString(){
        return `Turtle: ${this.name}\nAged – ${this.age}; Gender – ${this.gender}` + `\nCurrently inhabiting ${this.currentWaterPool}`;
    }
}

module.exports = WaterTurtle;
