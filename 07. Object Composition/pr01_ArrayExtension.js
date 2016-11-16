(function solve() {
    Array.prototype.last = function last() {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    };
    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i])
        }
        return result;
    };
    Array.prototype.sum = function () {
        let result = this.reduce((a, b) => a + b);
        return result;
    };
    Array.prototype.average = function () {
        let sum = this.sum();
        let average = sum / this.length;
        return average;
    }
})();

let a = [1, 2, 3]
console.log(a)

