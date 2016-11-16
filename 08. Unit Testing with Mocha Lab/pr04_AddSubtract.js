// function createCalculator() {
//     let value = 0;
//     return {
//         add: function(num) { value += (num);
//         console.log(value)
//         console.log(typeof value)},
//         subtract: function(num) { value -= (num);
//         console.log(value)
//         console.log(typeof  value)},
//         get: function() { return value; }
//     }
// }

createCalculator = function () {
    let value = 0;
    return {
        add: function (num) {
            value += num;
            console.log(value)
            console.log(typeof value)
        },
        subtract: function (num) {
            value -= (num);
            console.log(value)
            console.log(typeof  value)
        },
        get: function () {
            return value;
        }
    }
};


let obj = createCalculator();

obj.subtract('3')
obj.get()

module.exports = {createCalculator}
