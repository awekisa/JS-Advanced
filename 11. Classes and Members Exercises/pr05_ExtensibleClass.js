let func = (function solve() {
    let id = 0;
    class Extensible {
        constructor() {
            this.id = id;
            id++;
        }

        extend(template) {
            for (let prop in template) {
                if (typeof template[prop] === 'function') {
                    Object.getPrototypeOf(this)[prop] = template[prop];
                }
                else {
                    this[prop] = template[prop];
                }
            }
        }

    }
    return Extensible;
}());

let obj1 = new func();
let template = {
    extensionMethod: function () {
        return 324
    },
    extensionProperty: 'someString'
}


obj1.extend(template)
console.log(obj1)