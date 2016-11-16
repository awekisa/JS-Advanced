let sum = require('../pr01_SumOfNumbers.js').sum;
let expect = require("chai").expect;

describe("sum(arr)", function() {
    it("should return 3 for [1, 2]", function() {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it("should return -1 for [2, -3]", function() {
        expect(sum([2, -3])).to.be.equal(-1);
    });
    it("should return NaN for ['pesho', 2]", function() {
        expect(sum(['pesho', 2])).to.be.NaN;
    });
});
