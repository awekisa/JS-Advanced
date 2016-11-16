class Entity{
    constructor(name){
        if (new.target === Entity){
            throw new TypeError('Can\'t initialize Entity');
        }
        this.name = name;
    }
}

module.exports = Entity