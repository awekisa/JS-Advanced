// let f = (function () {
//     let total = 0;
//     return function sum(a) {
//         total += a;
//         sum.toString = () => total;
//         return sum;
//     }
// })();
//
// console.log(f(4)(3)(100).toString())

function add(num){
    let sum = num;
    function calc(num2){
        sum += num2;
        return calc;
    }
    calc.toString = () => sum;
    return calc

}

console.log(add(3)(4).toString());
